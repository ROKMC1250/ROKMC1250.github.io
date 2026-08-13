'use strict';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initProfileImage();
    renderNews();
    renderPublications();
    renderTimeline();
    initScrollAnimations();
});

/* ---------- Icons -------------------------------------------------------- */
// Icons come from the inline <svg> sprite in index.html, so they render even if
// the network drops. Previously these were Font Awesome classes served from a
// CDN — when that request failed, every icon silently vanished.
function icon(name) {
    return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
}

function publicationLinkIcon(type) {
    switch (type.toLowerCase()) {
        case 'paper': return 'paper';
        case 'poster': return 'poster';
        case 'code': return 'github';
        default: return 'link';
    }
}

function timelineIcon(type) {
    switch (type) {
        case 'work': return 'briefcase';
        case 'education': return 'scholar';
        case 'military': return 'shield';
        default: return 'link';
    }
}

/* ---------- Hero --------------------------------------------------------- */
function initProfileImage() {
    const img = document.querySelector('.image-placeholder-square img');
    if (img && personalInfo.profileImage && !img.src.endsWith(personalInfo.profileImage)) {
        img.src = personalInfo.profileImage;
    }

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `<span class="highlight">${personalInfo.name}</span>`;
    }

    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        heroDescription.innerHTML = personalInfo.description;
    }

    // Keyed by data-contact so reordering the markup can never mismatch links.
    if (typeof contactInfo === 'object' && contactInfo) {
        document.querySelectorAll('[data-contact]').forEach(link => {
            const key = link.dataset.contact;
            const value = contactInfo[key];
            if (!value) return;
            link.href = key === 'email' ? `mailto:${value}` : value;
        });
    }
}

/* ---------- Navigation --------------------------------------------------- */
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (!hamburger || !navMenu) return;

    const setMenu = open => {
        hamburger.classList.toggle('active', open);
        navMenu.classList.toggle('active', open);
        hamburger.setAttribute('aria-expanded', String(open));
    };

    hamburger.addEventListener('click', event => {
        event.stopPropagation();
        setMenu(!navMenu.classList.contains('active'));
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('click', event => {
        if (!navMenu.classList.contains('active')) return;
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) setMenu(false);
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') setMenu(false);
    });

    initNavbarScrollState();
    initActiveNavLink();
}

// Toggles a class instead of writing inline styles, and reads scrollY at most
// once per animation frame — the old handler ran on every scroll event.
function initNavbarScrollState() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let queued = false;
    const update = () => {
        queued = false;
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    };

    window.addEventListener('scroll', () => {
        if (queued) return;
        queued = true;
        requestAnimationFrame(update);
    }, { passive: true });

    update();
}

// IntersectionObserver instead of measuring offsetTop/offsetHeight for every
// section on every scroll event, which forced a synchronous layout each time.
function initActiveNavLink() {
    const links = new Map();
    document.querySelectorAll('.nav-link').forEach(link => {
        const id = (link.getAttribute('href') || '').slice(1);
        if (id) links.set(id, link);
    });

    const sections = [...links.keys()]
        .map(id => document.getElementById(id))
        .filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) return;

    const visible = new Set();
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) visible.add(entry.target.id);
            else visible.delete(entry.target.id);
        });

        // Topmost visible section wins, so the highlight matches reading order.
        const active = sections.find(section => visible.has(section.id));
        links.forEach((link, id) => link.classList.toggle('active', !!active && id === active.id));
    }, { rootMargin: '-72px 0px -60% 0px' });

    sections.forEach(section => observer.observe(section));
}

/* ---------- Scroll reveal ------------------------------------------------ */
let revealObserver = null;

function initScrollAnimations() {
    // Without IntersectionObserver, .scroll-reveal would stay at opacity 0
    // forever — reveal everything up front rather than hiding the content.
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('revealed'));
        return;
    }

    revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

    observeReveals(document);
}

// Must be called for any .scroll-reveal element added after page load,
// otherwise it never receives .revealed and stays invisible.
function observeReveals(root) {
    if (!revealObserver) {
        root.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('revealed'));
        return;
    }
    root.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => revealObserver.observe(el));
}

/* ---------- News --------------------------------------------------------- */
// Renders every item once. How many are visible is a CSS media-query concern:
// re-rendering on resize used to blank the whole list, because mobile browsers
// fire `resize` when the address bar collapses and the fresh .scroll-reveal
// nodes were never handed to the observer.
function renderNews() {
    const newsList = document.getElementById('newsList');
    if (!newsList) return;

    const fragment = document.createDocumentFragment();
    newsData.forEach((news, index) => {
        const item = document.createElement('div');
        item.className = 'news-item scroll-reveal';
        item.style.transitionDelay = `${Math.min(index, 5) * 0.04}s`;
        item.innerHTML = `
            <div class="news-date">${news.date}</div>
            <div class="news-content">
                <div class="news-title">${news.title}</div>
                <span class="news-type ${news.type}">${news.type}</span>
            </div>
        `;
        fragment.appendChild(item);
    });

    newsList.replaceChildren(fragment);
    observeReveals(newsList);
}

/* ---------- Publications ------------------------------------------------- */
function renderPublications() {
    const grid = document.getElementById('publicationsGrid');
    if (!grid) return;

    const fragment = document.createDocumentFragment();
    publications.forEach((pub, index) => fragment.appendChild(createPublicationCard(pub, index)));
    grid.replaceChildren(fragment);
    observeReveals(grid);
}

function createPublicationCard(publication, index) {
    const card = document.createElement('div');
    card.className = 'publication-card scroll-reveal';
    card.style.transitionDelay = `${Math.min(index, 5) * 0.06}s`;

    let linksHTML = '';
    if (publication.links && Object.keys(publication.links).length) {
        const items = Object.entries(publication.links)
            .map(([type, url]) => `<a href="${url}" class="publication-link" target="_blank" rel="noopener">${icon(publicationLinkIcon(type))}<span>${type}</span></a>`)
            .join('');
        linksHTML = `<div class="publication-links">${items}</div>`;
    }

    let badgesHTML = '';
    if (publication.conference || publication.award) {
        badgesHTML = `<div class="publication-badges">
            ${publication.conference ? `<span class="badge badge-conference">${publication.conference}</span>` : '<span></span>'}
            ${publication.award ? `<span class="badge badge-award">${publication.award}</span>` : ''}
        </div>`;
    }

    // First two cards are above the fold on desktop; the rest load lazily.
    const loading = index < 2 ? 'eager' : 'lazy';

    card.innerHTML = `
        <div class="publication-image-wrapper">
            <img src="${publication.image}" alt="" class="publication-image"
                 loading="${loading}" decoding="async" onerror="this.remove()">
            ${badgesHTML}
        </div>
        <div class="publication-content">
            <h3 class="publication-title">${publication.title}</h3>
            <p class="publication-authors">${publication.authors}</p>
            <p class="publication-venue">${publication.venue} (${publication.year})</p>
            ${linksHTML}
        </div>
    `;

    return card;
}

/* ---------- Vitae / timeline -------------------------------------------- */
function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;

    const fragment = document.createDocumentFragment();
    vitaeData.forEach((item, index) => fragment.appendChild(createTimelineItem(item, index)));
    container.replaceChildren(fragment);
    observeReveals(container);
}

function createTimelineItem(item, index) {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item scroll-reveal';
    timelineItem.style.transitionDelay = `${Math.min(index, 5) * 0.08}s`;

    const title = item.link
        ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a>`
        : item.title;

    timelineItem.innerHTML = `
        <div class="timeline-content">
            <div class="timeline-date">${item.period}</div>
            <h3 class="timeline-title">${title}</h3>
            <div class="timeline-role">${item.role}</div>
        </div>
        <div class="timeline-image">
            <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async">
        </div>
    `;

    // Setting innerHTML on an <img> does nothing, so the old inline onerror
    // left a broken-image box. Swap in the icon on the parent instead.
    const img = timelineItem.querySelector('.timeline-image img');
    img.addEventListener('error', () => {
        img.parentElement.innerHTML = `<span class="icon-fallback">${icon(timelineIcon(item.type))}</span>`;
    }, { once: true });

    return timelineItem;
}
