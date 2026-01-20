// Publications Data
const publications = [
    {
        title: "MANGO: A GLOBAL SINGLE-DATE PAIRED DATASET FOR MANGROVE SEGMENTATION",
        authors: "Junhyuk Heo, Beomkyu Choi, Hyunjin Shin, Darongsae Kwon",
        venue: "under review",
        year: "2026",
        image: "assets/publications/MANGO_IGARSS_thumbnail.pdf",
        links: {
        }
    },
    {
        title: "ELMZip: Onboard Satellite Image Compression via Extreme Learning Machines for Efficient Downlink",
        authors: "Woojin Cho, Junghwan Park, Sangcheol Sim, Steve Andreas Immanuel, Junhyuk Heo, Darongsae Kwon",
        venue: "under review",
        year: "2026",
        image: "assets/publications/ELMZip_thumbnail.png",
        links: {
        }
    },

    {
        title: "Basis-Oriented Low-rank Transfer for Few-Shot and Test-Time Adaptation",
        authors: "Junghwan Park, Woojin Cho, Junhyuk Heo, Darongsae Kwon, Kookjin Lee",
        venue: "under review",
        year: "2025",
        image: "assets/publications/BOLT_thumbnail.png",
        links: {
            paper: "https://arxiv.org/pdf/2512.02441",
        }
    },
    {
        title: "MANGO: MANGROVE GLOBAL OBSERVATIONS –A DATASET AND BENCHMARK",
        authors: "Junhyuk Heo",
        venue: "preprint",
        year: "2025",
        image: "assets/publications/MANGO_thumbnail.png",
        links: {
            paper: "https://openreview.net/forum?id=d3dSicnYkN&referrer=%5Bthe%20profile%20of%20Junhyuk%20Heo%5D(%2Fprofile%3Fid%3D~Junhyuk_Heo1)",
            code: "https://github.com/ROKMC1250/MANGO",
        }
    },
    {
        title: "Self-Supervised Score-Based Despeckling for SAR Imagery via Log-Domain Transformation",
        authors: "Junhyuk Heo",
        venue: "preprint",
        year: "2025",
        image: "assets/publications/S4DM_thumbnail_real.png",
        links: {
            code: "https://github.com/ROKMC1250/S-4DM"
        }
    },
    {
        title: "Fourier-Modulated Implicit Neural Representation for Multispectral Satellite Image Compression",
        authors: "Woojin Cho*, Steve Andreas Immanuel*, Junhyuk Heo, and Darongsae Kwon",
        venue: "IGARSS (Oral)",
        year: "2025",
        image: "assets/publications/Implisat_IGARSS_thumbnail.png",
        links: {
            poster: "https://steveimm.id/implisat/",
            paper: "https://arxiv.org/abs/2506.01234",
            code: "https://github.com/SteveImmanuel/implisat"
        }
    },
    {
        title: "Tackling Few-Shot Segmentation in Remote Sensing via Inpainting Diffusion Model",
        authors: "Steve Andreas Immanuel, Woojin Cho, Junhyuk Heo, and Darongsae Kwon",
        venue: "ICLRw (Best Paper Award)",
        year: "2025",
        image: "assets/publications/Fewshot_thumbnail.png",
        links: {
            poster: "https://steveimm.id/rs-paint/",
            paper: "https://arxiv.org/abs/2503.03785",
            code: "https://github.com/SteveImmanuel/rs-paint"
        }
    },
    {
        title: "Neural Compression for Multispectral Satellite Images",
        authors: "Woojin Cho*, Steve Andreas Immanuel*, Junhyuk Heo, and Darongsae Kwon",
        venue: "NeurIPSw",
        year: "2024",
        image: "assets/publications/Implisat_thumbnail.png",
        links: {
            poster: "https://steveimm.id/implisat/",
            paper: "https://openreview.net/pdf?id=gk2m2OIKMs",
            code: "https://github.com/SteveImmanuel/implisat",
        }
    },
];

// Vitae/Timeline Data
const vitaeData = [
    {
        period: "May 2024 - Present",
        title: "telePIX",
        role: "AI Engineer",
        image: "assets/vitae/telepix.png",
        type: "work",
        link: "https://telepix.net/"
    },
    {
        period: "Sep 2019 - Apr 2021",
        title: "R.O.K Marine Corps",
        role: "Sergeant",
        image: "assets/vitae/rokmc.png",
        type: "military"
    },
    {
        period: "Mar 2018 - Feb 2024",
        title: "Konkuk University",
        role: "B.S Civil Engineering",
        image: "assets/vitae/konkuk.png",
        type: "education"
    }
];

// Research Interests
const researchInterests = [
    "Deep Learning",
    "Remote Sensing",
    "Computer Vision", 
    "Satellite Image Analysis",
    "Hyperspectral Imaging",
    "Neural Networks",
    "Image Super-Resolution",
    "Few-Shot Learning"
];

// Skills
const skills = {
    "Programming Languages": ["Python", "JavaScript", "MATLAB", "C++"],
    "Deep Learning": ["PyTorch", "TensorFlow", "Keras", "OpenCV"],
    "Remote Sensing": ["ENVI", "ERDAS", "ArcGIS", "QGIS"],
    "Tools & Platforms": ["Git", "Docker", "Linux", "AWS", "Google Colab"]
};

// Personal Information
const personalInfo = {
    profileImage: "assets/profile/profile_img.jpg",
    name: "Junhyuk Heo",
    description: "I'm an AI researcher in <a href='https://telepix.net/' target='_blank'>TelePIX</a>. My research seeks to solve real-world problems from an artificial intelligence perspective. I address challenging tasks such as complex image restoration and data-efficient learning for few-shot segmentation by applying generative models (diffusion-based, score-based, translation models). In parallel, my work explores continuous signal modeling using Implicit Neural Representations (INRs) for applications in neural image compression and spatial-spectral super-resolution. Recently, my research interest has shifted towards Vision-Language Models (VLMs). My primary goal is to build a unified model capable of solving various complex tasks in earth science"
};

// News Data
const newsData = [
    {
        date: "2025-03",
        title: "Paper accepted at IGARSS 2025 (Oral)",
        description: "Our work on 'Fourier-Modulated Implicit Neural Representation for Multispectral Satellite Image Compression' has been accepted at IEEE International Geoscience and Remote Sensing Symposium (Oral), 2025",
        type: "publication"
    },
    {
        date: "2025-02",
        title: "Paper accepted at ICLRw 2025(Best Paper Award)",
        description: "Our work on 'Tackling Few-Shot Segmentation in Remote Sensing via Inpainting Diffusion Model' has been accepted at ICLR Machine Learning for Remote Sensing Workshop (Best Paper Award), 2025",
        type: "publication"
    },
    {
        date: "2024-11",
        title: "Paper accepted at NeurIPSw 2024",
        description: "Our work on 'Neural Compression for Multispectral Satellite Images' has been accepted at NeurIPS Neural Compression Workshop, 2024",
        type: "publication"
    },
    {
        date: "2024-05",
        title: "Joined telePIX as AI Engineer",
        description: "Started working as an AI Engineer at telePIX, focusing on remote sensing and satellite image analysis.",
        type: "career"
    },
    {
        date: "2024-02",
        title: "Graduated from Konkuk University",
        description: "Successfully completed B.S. in Civil Engineering and Computer Science.",
        type: "education"
    }
];

// Contact Information
const contactInfo = {
    email: "hjh1037@gmail.com",
    github: "https://github.com/ROKMC1250",
    scholar: "https://scholar.google.com/citations?user=FIhe-wcAAAAJ&hl=ko",
    linkedin: "https://www.linkedin.com/in/junhyuk-heo-51567a292/",
    cv: "assets/profile/Junhyuk_Heo_CV.pdf"
}; 