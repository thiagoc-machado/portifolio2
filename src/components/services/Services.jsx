import React, { useState } from "react";
import { motion } from "framer-motion";
import "./services.css";
import magisHero from "../../assets/magismenu/tablet.png";
import magisMobileMenu from "../../assets/magismenu/mobile_menu.png";
import magisMobile from "../../assets/magismenu/mobile.png";
import magisKitchen from "../../assets/magismenu/kitchen_kds.png";
import magisStatus from "../../assets/magismenu/status_tv.png";
import magisAdmin from "../../assets/magismenu/admin_dashboard.png";
import magisWaiter from "../../assets/magismenu/waiter_tablet.png";
import magisTotem from "../../assets/magismenu/totem.png";

const projects = [
    {
        id: "baible",
        icon: "uil-robot",
        eyebrow: "AI product · Full-stack",
        title: "bAIble",
        description:
            "Multilingual Bible study assistant combining conversational AI, semantic search and web/mobile experiences.",
        tags: ["Django", "LangChain", "Groq", "OpenAI", "Hugging Face"],
        accent: "violet",
        url: "https://github.com/thiagoc-machado/bAIble",
        frontendUrl: "https://github.com/thiagoc-machado/bAIble-frontend",
        detail:
            "bAIble is a complex AI product built around a multilingual Bible study experience. It connects a Django and GraphQL backend to a Vue 3 frontend, orchestrates different AI providers and models, and uses semantic retrieval to make conversations more useful and grounded.",
        highlights: [
            "AI orchestration with LangChain, Groq, OpenAI and xAI/Grok models",
            "Models and AI workloads deployed through Hugging Face",
            "FAISS, Transformers and embeddings for semantic search",
            "GraphQL API with JWT authentication and a Vue 3 interface",
            "Celery, Redis and PostgreSQL for asynchronous and production workflows",
            "Multilingual experience in Portuguese, English and Spanish with mobile support",
        ],
    },
    {
        id: "media-finder",
        icon: "uil-search-alt",
        eyebrow: "Backend · Integrations",
        title: "Media Finder",
        description:
            "A domain-driven media discovery platform that filters, scores and sends results to a personal media server.",
        tags: ["FastAPI", "DDD", "TMDB", "qBittorrent", "Docker"],
        accent: "blue",
        url: "https://github.com/thiagoc-machado/media-finder",
        detail:
            "Media Finder turns a fragmented search process into a structured workflow: resolve the media, query multiple providers, normalize the results, explain the score and safely send an eligible download to qBittorrent.",
        highlights: [
            "Domain-driven architecture with normalization, scoring and deduplication",
            "Integrations with TMDB, Prowlarr, Jackett and qBittorrent",
            "Rate limiting, CSRF, temporary tokens and SSRF protection",
            "SQLite migrations, Docker deployment, health checks and tests",
        ],
    },
    {
        id: "videogen",
        icon: "uil-video",
        eyebrow: "AI automation · Pipelines",
        title: "VideoGen",
        description:
            "Modular pipeline that transforms an idea into a complete video with script, visuals, narration, subtitles and music.",
        tags: ["Gemini", "Whisper", "FFmpeg", "Python", "Pipelines"],
        accent: "orange",
        url: "https://github.com/thiagoc-machado/videogen",
        detail:
            "VideoGen is an automation engine designed as a reusable production system rather than a one-off script. It separates atomic tools from higher-level flows and keeps each stage resumable and observable.",
        highlights: [
            "Gemini-powered text, image and audio generation",
            "Whisper-based transcription and scene alignment",
            "FFmpeg video assembly, subtitles, transitions and background music",
            "Reusable Tools & Pipelines architecture for Shorts and long-form videos",
        ],
    },
    {
        id: "product-research",
        icon: "uil-chart-line",
        eyebrow: "Product · Business logic",
        title: "3D Product Research",
        description:
            "A profitability research tool for deciding which 3D-printable products are worth producing.",
        tags: ["Django", "PostgreSQL", "Redis", "Celery", "Docker"],
        accent: "green",
        url: "https://github.com/thiagoc-machado/3D_Product_Research",
        detail:
            "This MVP turns production assumptions and market observations into a clear profitability estimate, helping makers evaluate an idea before investing material, machine time and marketplace fees.",
        highlights: [
            "Material, electricity, machine, failure and packaging cost models",
            "Marketplace fees, taxes, profit, margin and profit per machine hour",
            "Decimal-safe financial calculations and explicit business rules",
            "PostgreSQL, Redis, Celery and Docker-ready development workflow",
        ],
    },
    {
        id: "servcenter",
        icon: "uil-briefcase-alt",
        eyebrow: "Business system · Full-stack",
        title: "ServCenter",
        description:
            "Management system for service companies, covering customers, employees, work orders and cash control.",
        tags: ["Django", "Python", "JavaScript", "Bootstrap"],
        accent: "slate",
        url: "https://github.com/thiagoc-machado/ServCenter-Fullstack-Django",
        liveUrl: "https://servcenter-fullstack-django.onrender.com",
        detail:
            "ServCenter is a practical business application designed to organize the daily operation of service companies and reduce manual work across their main workflows.",
        highlights: [
            "Customer, user, employee and service management",
            "Work order lifecycle and cash control",
            "Django application with a responsive Bootstrap interface",
            "Live deployment available for demonstration",
        ],
    },
];

const magisImages = [
    magisMobileMenu,
    magisMobile,
    magisKitchen,
    magisStatus,
    magisAdmin,
    magisWaiter,
    magisTotem,
];

const magisProject = {
    id: "magismenu",
    icon: "uil-restaurant",
    eyebrow: "Flagship product · In production",
    title: "MagisMenu",
    description:
        "Multi-tenant restaurant platform connecting customers, waiters, kitchens, kiosks and management in one product.",
    tags: ["Django", "Vue", "WebSockets", "Redis", "AWS"],
    detail:
        "MagisMenu is the flagship product in my portfolio: a production platform that coordinates the full restaurant order journey, from QR ordering at the table to kitchen operations, status screens and centralized administration.",
    highlights: [
        "Customer-facing QR ordering with catalog, cart and item customization",
        "Waiter, kiosk, kitchen/KDS and real-time status screens",
        "Multi-tenant administration for menus, promotions, tables and users",
        "Django, DRF, PostgreSQL, WebSockets, Redis, Docker and AWS",
        "Android kiosk terminal with restricted WebView, kiosk mode and PIN exit",
    ],
};

const otherProjects = [
    {
        title: "CAP 2.0",
        description: "Study platform for Spain's CAP exam, with practice questions, progress tracking and a focused learning experience.",
        tech: "React · Education",
        url: "https://github.com/thiagoc-machado/cap-2.0",
    },
    {
        title: "Moviapp",
        description: "React movie catalog with search, routing and TMDB API integration.",
        tech: "React · TMDB · Vite",
        url: "https://github.com/thiagoc-machado/Moviapp",
    },
    {
        title: "IA Cripto Trading Bot",
        description: "Experiment for analyzing and backtesting automated cryptocurrency strategies.",
        tech: "Python · Pandas · ML",
        url: "https://github.com/thiagoc-machado/ia-cripto-tradingBot",
    },
    {
        title: "Citacion",
        description: "Python automation for searching and generating Civil Registry appointment confirmations.",
        tech: "Python · Automation",
        url: "https://github.com/thiagoc-machado/citacion",
    },
    {
        title: "YourTrucks",
        description: "Project focused on managing and tracking transportation and vehicle-related operations.",
        tech: "Full-stack · Logistics",
        url: "https://github.com/thiagoc-machado/yourtrucks",
    },
    {
        title: "GeoAlert",
        description: "Location-oriented application for geospatial alerts and event tracking.",
        tech: "Web · Geolocation",
        url: "https://github.com/thiagoc-machado/GeoAlert",
    },
    {
        title: "Postalia",
        description: "Web product focused on publishing and organizing content through a structured digital experience.",
        tech: "Web product · Content",
        url: "https://github.com/thiagoc-machado/postalia",
    },
    {
        title: "DinerApp",
        description: "Restaurant and service application exploring digital workflows for dining operations.",
        tech: "Web app · Restaurant",
        url: "https://github.com/thiagoc-machado/dinerapp",
    },
    {
        title: "Tienda Full-stack",
        description: "E-commerce application with a Django REST backend and Vue frontend for catalog and store operations.",
        tech: "Django REST · Vue · Commerce",
        url: "https://github.com/thiagoc-machado/Drf-Vue_tienda",
    },
    {
        title: "Publishing Platform",
        description: "Full-stack publishing project exploring a REST API, React frontend and data management.",
        tech: "Django REST · React",
        url: "https://github.com/thiagoc-machado/Blog_django-DRF-react",
    },
    {
        title: "Phonebook App",
        description: "Full-stack contact management application with authentication, CRUD workflows, card-based UI and Docker support.",
        tech: "React · Django · Docker",
        url: "https://github.com/thiagoc-machado/phonebook-app",
    },
];

function ProjectVisual({ project, featured = false }) {
    return (
        <div className={`projects__visual projects__visual-${project.accent || "gold"}`}>
            <div className="projects__visual-glow" />
            <i className={`uil ${project.icon} projects__visual-icon`} />
            <span className="projects__visual-label">
                {featured ? "Production platform" : project.eyebrow}
            </span>
            <strong>{project.title}</strong>
            <div className="projects__visual-lines" aria-hidden="true">
                <span />
                <span />
                <span />
            </div>
        </div>
    );
}

function ProjectModal({ project, onClose, magis = false }) {
    const [slide, setSlide] = useState(0);
    return (
        <div className="projects__modal" onClick={onClose}>
            <div className="projects__modal-content" onClick={(event) => event.stopPropagation()}>
                <button className="projects__modal-close" onClick={onClose} aria-label="Close project details">
                    <i className="uil uil-times" />
                </button>
                <span className="projects__eyebrow">{project.eyebrow}</span>
                <h3>{project.title}</h3>
                <p className="projects__modal-lead">{project.detail}</p>
                {magis && (
                    <div className="projects__carousel">
                        <img src={magisImages[slide]} alt={`${project.title} screen ${slide + 1}`} />
                        <div className="projects__carousel-controls">
                            <button onClick={() => setSlide((slide - 1 + magisImages.length) % magisImages.length)} aria-label="Previous image">‹</button>
                            <span>{slide + 1} / {magisImages.length}</span>
                            <button onClick={() => setSlide((slide + 1) % magisImages.length)} aria-label="Next image">›</button>
                        </div>
                    </div>
                )}
                <div className="projects__modal-grid">
                    {project.highlights.map((highlight) => (
                        <div className="projects__highlight" key={highlight}>
                            <i className="uil uil-check-circle" />
                            <span>{highlight}</span>
                        </div>
                    ))}
                </div>
                <div className="projects__modal-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="projects__modal-actions">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Open live project <i className="uil uil-arrow-up-right" /></a>}
                    <a href={project.url || "https://magismenu.com"} target="_blank" rel="noreferrer">View on GitHub <i className="uil uil-github" /></a>
                    {project.frontendUrl && <a href={project.frontendUrl} target="_blank" rel="noreferrer">Frontend repository <i className="uil uil-github" /></a>}
                </div>
            </div>
        </div>
    );
}

function OtherProjectsModal({ onClose }) {
    return (
        <div className="projects__modal" onClick={onClose}>
            <div className="projects__modal-content projects__modal-content-others" onClick={(event) => event.stopPropagation()}>
                <button className="projects__modal-close" onClick={onClose} aria-label="Close other projects">
                    <i className="uil uil-times" />
                </button>
                <span className="projects__eyebrow">More selected work</span>
                <h3>Other highlighted projects</h3>
                <p className="projects__modal-lead">
                    Experiments, applications and tools that complement my experience in product development, frontend, backend and automation.
                </p>
                <div className="projects__others-grid">
                    {otherProjects.map((item) => (
                        <article className="projects__other-card" key={item.title}>
                            <div>
                                <h4>{item.title}</h4>
                                <span>{item.tech}</span>
                                <p>{item.description}</p>
                            </div>
                            <a href={item.url} target="_blank" rel="noreferrer">
                                Repository <i className="uil uil-github" />
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project, onOpen }) {
    return (
        <motion.article className="projects__card" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 18 }} viewport={{ once: true }}>
            <ProjectVisual project={project} />
            <div className="projects__card-copy">
                <span className="projects__eyebrow">{project.eyebrow}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="projects__tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <button className="projects__case-link" onClick={() => onOpen(project.id)}>Explore case <i className="uil uil-arrow-right" /></button>
            </div>
        </motion.article>
    );
}

const Services = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [showOtherProjects, setShowOtherProjects] = useState(false);
    const openProject = (id) => setActiveProject(id);
    const project = activeProject === "magismenu" ? magisProject : projects.find((item) => item.id === activeProject);

    return (
        <section className="services section projects" id="projects">
            <div className="projects__intro">
                <div>
                    <h2 className="section__title">Selected projects</h2>
                    <span className="section__subtitle">Products, systems and AI workflows built to solve real problems.</span>
                </div>
                <p className="projects__intro-copy">Full-stack development with product thinking, architecture and production in mind.</p>
            </div>

            <div className="projects__container container">
                <motion.article className="projects__featured" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 18 }} viewport={{ once: true }}>
                    <div className="projects__featured-copy">
                        <span className="projects__eyebrow">{magisProject.eyebrow}</span>
                        <h3>{magisProject.title}</h3>
                        <p>{magisProject.description}</p>
                        <div className="projects__tags">{magisProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                        <div className="projects__featured-actions">
                            <button className="projects__primary-button" onClick={() => openProject("magismenu")}>Explore case <i className="uil uil-arrow-right" /></button>
                            <a href="https://magismenu.com" target="_blank" rel="noreferrer">Open live product</a>
                        </div>
                    </div>
                    <div className="projects__featured-media">
                        <img src={magisHero} alt="MagisMenu platform on tablet" />
                        <div className="projects__featured-proof"><span>QR ordering</span><span>Kitchen / KDS</span><span>Android kiosk</span></div>
                    </div>
                </motion.article>
                <div className="projects__grid">
                    {projects.map((item) => <ProjectCard key={item.id} project={item} onOpen={openProject} />)}
                </div>
                <button className="projects__others-card" onClick={() => setShowOtherProjects(true)}>
                    <span className="projects__others-icon"><i className="uil uil-apps" /></span>
                    <span className="projects__others-copy">
                        <strong>Other highlighted projects</strong>
                        <span>Explore more applications, experiments and tools.</span>
                    </span>
                    <i className="uil uil-arrow-right projects__others-arrow" />
                </button>
            </div>
            {project && <ProjectModal project={project} magis={project.id === "magismenu"} onClose={() => setActiveProject(null)} />}
            {showOtherProjects && <OtherProjectsModal onClose={() => setShowOtherProjects(false)} />}
        </section>
    );
};

export default Services;
