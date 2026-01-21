// Publications Data
const publications = [
    {
        title: "MANGO: A GLOBAL SINGLE-DATE PAIRED DATASET FOR MANGROVE SEGMENTATION",
        authors: "Junhyuk Heo, Beomkyu Choi, Hyunjin Shin, Darongsae Kwon",
        venue: "under review",
        year: "2026",
        image: "assets/publications/MANGO_IGARSS_thumbnail.png",
        conference: "IGARSS",  // 학회 약어 (왼쪽 상단)
        award: "",  // Best Paper, Oral, Poster 등 (오른쪽 상단)
        links: {
        }
    },
    {
        title: "ELMZip: Onboard Satellite Image Compression via Extreme Learning Machines for Efficient Downlink",
        authors: "Woojin Cho, Junghwan Park, Sangcheol Sim, Steve Andreas Immanuel, Junhyuk Heo, Darongsae Kwon",
        venue: "under review",
        year: "2026",
        image: "assets/publications/ELMzip_thumbnail.png",
        conference: "",  // 학회 약어 (왼쪽 상단)
        award: "",  // Best Paper, Oral, Poster 등 (오른쪽 상단)
        links: {
        }
    },

    {
        title: "Basis-Oriented Low-rank Transfer for Few-Shot and Test-Time Adaptation",
        authors: "Junghwan Park, Woojin Cho, Junhyuk Heo, Darongsae Kwon, Kookjin Lee",
        venue: "under review",
        year: "2025",
        image: "assets/publications/BOLT_thumbnail.png",
        conference: "",  // 학회 약어 (왼쪽 상단)
        award: "",  // Best Paper, Oral, Poster 등 (오른쪽 상단)
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
        conference: "",  // 학회 약어 (왼쪽 상단)
        award: "",  // Best Paper, Oral, Poster 등 (오른쪽 상단)
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
        conference: "",  // 학회 약어 (왼쪽 상단)
        award: "",  // Best Paper, Oral, Poster 등 (오른쪽 상단)
        links: {
            code: "https://github.com/ROKMC1250/S-4DM"
        }
    },
    {
        title: "Fourier-Modulated Implicit Neural Representation for Multispectral Satellite Image Compression",
        authors: "Woojin Cho*, Steve Andreas Immanuel*, Junhyuk Heo, and Darongsae Kwon",
        venue: "IEEE International Geoscience and Remote Sensing Symposium",
        year: "2025",
        image: "assets/publications/Implisat_IGARSS_thumbnail.png",
        conference: "IGARSS",  // 학회 약어 (왼쪽 상단)
        award: "Oral",  // Best Paper, Oral, Poster 등 (오른쪽 상단)
        links: {
            poster: "https://steveimm.id/implisat/",
            paper: "https://arxiv.org/abs/2506.01234",
            code: "https://github.com/SteveImmanuel/implisat"
        }
    },
    {
        title: "Tackling Few-Shot Segmentation in Remote Sensing via Inpainting Diffusion Model",
        authors: "Steve Andreas Immanuel, Woojin Cho, Junhyuk Heo, and Darongsae Kwon",
        venue: "ICLR Machine Learning for Remote Sensing Workshop",
        year: "2025",
        image: "assets/publications/Fewshot_thumbnail.png",
        conference: "ICLR-w",  // 학회 약어 (왼쪽 상단)
        award: "Best Paper",  // Best Paper, Oral, Poster 등 (오른쪽 상단)
        links: {
            poster: "https://steveimm.id/rs-paint/",
            paper: "https://arxiv.org/abs/2503.03785",
            code: "https://github.com/SteveImmanuel/rs-paint"
        }
    },
    {
        title: "Neural Compression for Multispectral Satellite Images",
        authors: "Woojin Cho*, Steve Andreas Immanuel*, Junhyuk Heo, and Darongsae Kwon",
        venue: "NeurIPS Neural Compression Workshop",
        year: "2024",
        image: "assets/publications/Implisat_thumbnail.png",
        conference: "NeurIPS-w",  // 학회 약어 (왼쪽 상단)
        award: "Poster",  // Best Paper, Oral, Poster 등 (오른쪽 상단)
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
    description: "I'm an AI researcher in <a href='https://telepix.net/' target='_blank'>TelePIX</a>. My work focuses on machine learning for Earth observation, aiming to derive real-world value from satellite imagery for environmental monitoring and climate change. My interests include learning methods for extracting meaningful information from remote sensing data (e.g., target detection and semantic segmentation), as well as representation learning and foundation models. I also work on satellite data preprocessing, including atmospheric and radiometric correction, and I am increasingly interested in onboard processing and compression for more efficient use of satellite observations."
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