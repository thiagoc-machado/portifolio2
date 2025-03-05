import React, { useState } from "react";
import "./qualification.css";
import { motion } from "framer-motion";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button button--flex qualification__active"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button button--flex qualification__active"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        {/* *********************************************** */}

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        duration: 0.5,
                                        delay: 0.2,
                                    },
                                }}
                            >
                                <h3 className="qualification__title">
                                    Advanced Django: Mastering Django and Django
                                    Rest Framework Specialization
                                </h3>
                                <span className="qualification__subtitle">
                                    Codio - 2023
                                </span>
                                <div>
                                    <span className="qualification__title"></span>
                                    <ul>
                                        <li>
                                            Schedule tasks with Celery and Redis
                                        </li>
                                        <li>Writing tests</li>
                                        <li>Integrate with ReactJS</li>
                                        <li>Django Rest Framework</li>
                                        <li>Authenticate users with Google</li>
                                        <li>Caching and optimizing database</li>
                                    </ul>
                                    <br></br>
                                    <span className="qualification__subtitle">
                                        <a
                                            href="https://www.coursera.org/account/accomplishments/specialization/certificate/4YQB2464LZG5"
                                            target="_blank"
                                        >
                                            View certificate
                                        </a>
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                        {/* ***********************************************  */}

                        <div className="qualification__data">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        duration: 0.5,
                                        delay: 0.2,
                                    },
                                }}
                            >
                                <h3 className="qualification__title">
                                    Django for everybody
                                </h3>
                                <span className="qualification__subtitle">
                                    University of Michigan<br></br>2023
                                </span>
                                <span className="qualification__subtitle">
                                    This Professional Certificate holder
                                    completed 4 courses in Django Web
                                    Development: Covered Django, JavaScript, and
                                    JSON web services.
                                </span>
                                <span className="qualification__subtitle">
                                    <a
                                        href="https://www.coursera.org/account/accomplishments/specialization/certificate/B5UECRHYKRLP"
                                        target="_blank"
                                    >
                                        View certificate
                                    </a>
                                </span>
                            </motion.div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        duration: 0.5,
                                        delay: 0.2,
                                    },
                                }}
                            >
                                <h3 className="qualification__title">
                                    Full Stack Software Developer
                                </h3>
                                <span className="qualification__subtitle">
                                    IBM Skills Network - 2022
                                </span>
                                <span className="qualification__subtitle">
                                    This Professional Certificate holder
                                    completed 10 courses on Application
                                    Development and Cloud technologies,
                                    mastering skills in Cloud Native
                                    Applications.
                                </span>
                                <span className="qualification__subtitle">
                                    <a
                                        href="https://www.coursera.org/account/accomplishments/specialization/certificate/5EJK9ET78ZXR"
                                        target="_blank"
                                    >
                                        View certificate
                                    </a>
                                </span>
                            </motion.div>
                        </div>
                        <div className="qualification__data">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        duration: 0.5,
                                        delay: 0.2,
                                    },
                                }}
                            >
                                <h3 className="qualification__title">
                                    Front-End Developer
                                </h3>
                                <span className="qualification__subtitle">
                                    Meta - 2022
                                </span>
                                <span className="qualification__subtitle">
                                    Gained proficiency in crafting webpages
                                    using HTML and CSS.
                                </span>
                                <span className="qualification__subtitle">
                                    <a
                                        href="https://www.coursera.org/account/accomplishments/certificate/VYAQDA5J67DH"
                                        target="_blank"
                                    >
                                        View certificate
                                    </a>
                                </span>
                            </motion.div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        duration: 0.5,
                                        delay: 0.2,
                                    },
                                }}
                            >
                                <h3 className="qualification__title">
                                    Programming in Python / Databases for
                                    Back-End Development
                                </h3>
                                <span className="qualification__subtitle">
                                    Meta - 2022
                                </span>
                                <span className="qualification__subtitle">
                                    Acquired back-end development skills
                                    including Python, Linux, Git, SQL, and Cloud
                                    Hosting.
                                </span>
                                <span className="qualification__subtitle">
                                    <a
                                        href="https://www.coursera.org/account/accomplishments/certificate/VLWKGM44GB28"
                                        target="_blank"
                                    >
                                        View certificate
                                    </a>
                                </span>
                            </motion.div>
                        </div>
                        <div className="qualification__data">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        duration: 0.5,
                                        delay: 0.2,
                                    },
                                }}
                            >
                                <h3 className="qualification__title">
                                    Introduction to Machine Learning on AWS
                                </h3>
                                <span className="qualification__subtitle">
                                    Amazon - 2023
                                </span>
                                <span className="qualification__subtitle">
                                    AI, machine learning, and deep learning
                                    concepts, selecting the right AWS machine
                                    learning service
                                </span>
                                <span className="qualification__subtitle">
                                    <a
                                        href="https://www.coursera.org/account/accomplishments/certificate/RATTNRJU6Y2W"
                                        target="_blank"
                                    >
                                        View certificate
                                    </a>
                                </span>
                            </motion.div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        duration: 0.5,
                                        delay: 0.2,
                                    },
                                }}
                            >
                                <h3 className="qualification__title">
                                    English Leve: C1
                                </h3>
                                <span className="qualification__subtitle">
                                    {" "}
                                    EF SET Certifcate
                                </span>
                                <br></br>
                                <a
                                    href="https://www.efset.org/cert/TeY1XU?cid=em100a"
                                    target="_blank"
                                >
                                    View certificate
                                </a>
                                <h3 className="qualification__title">
                                    Spanish Leve: C2
                                </h3>
                                <span className="qualification__subtitle">
                                    {" "}
                                </span>
                                <h3 className="qualification__title">
                                    Portuguese - native
                                </h3>
                            </motion.div>
                        </div>
                        <div>
                            <br></br>
                        </div>
                    </div>

                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        duration: 0.5,
                                        delay: 0.2,
                                    },
                                }}
                            >
                                <h3 className="qualification__title">
                                    Aidea Legal - Grupo Planeta
                                </h3>
                                <span className="qualification__subtitle">
                                    FullStack Developer<br></br>03/2024 -
                                    03/2025
                                </span>
                                <span className="qualification__subtitle">
                                    Development of a legal automation system
                                    using Django Rest Framework (DRF), Vue.js,
                                    Vuex, and PostgreSQL, hosted on AWS with S3
                                    for file storage, EC2 for deployment, and
                                    RDS for databases. Utilized Nginx for
                                    reverse proxy and Docker for
                                    containerization. Worked equally on backend
                                    and frontend development, including API
                                    integration, authentication systems, and
                                    data management. Implemented RESTful
                                    services and optimized performance using
                                    caching and indexing techniques
                                </span>
                            </motion.div>
                        </div>
                        <div className="qualification__data">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        duration: 0.5,
                                        delay: 0.2,
                                    },
                                }}
                            >
                                <h3 className="qualification__title">
                                    Freelancer
                                </h3>
                                <span className="qualification__subtitle">
                                    FullStack Developer<br></br>10/2022 -
                                    Present
                                </span>
                                <span className="qualification__subtitle">
                                    I have undertaken various projects on
                                    platforms like Fiverr and Freelancer.com,
                                    specializing in web applications utilizing
                                    Django, React, and Python. One of my most
                                    notable projects was a comprehensive
                                    application developed for a Brazilian
                                    municipality. This application was crafted
                                    to register candidates and issue bank
                                    payment slips for public service exam
                                    registration, entirely built using Django.
                                    Through these endeavors, I gained extensive
                                    knowledge and honed my expertise in these
                                    key technologies.
                                </span>
                            </motion.div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        duration: 0.5,
                                        delay: 0.2,
                                    },
                                }}
                            >
                                <h3 className="qualification__title">
                                    Stocken Capital
                                </h3>
                                <span className="qualification__subtitle">
                                    Backend Developer<br></br>05/2023 - 01/2024
                                </span>
                                <span className="qualification__subtitle">
                                    The company offers a customized legaltech
                                    SaaS tool designed to enable businesses to
                                    digitize their corporate governance and
                                    capital. Within this organization, the role
                                    involves overseeing the entire Django
                                    backend. This includes refactoring existing
                                    code, introducing new features and APIs,
                                    integrating blockchain data transfers,
                                    managing payments and financial transactions
                                    on the platform, and utilizing technologies
                                    such as Docker, Amazon EC2, etc.
                                </span>
                            </motion.div>
                        </div>

                        <div className="qualification__data">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        duration: 0.5,
                                        delay: 0.2,
                                    },
                                }}
                            >
                                <h3 className="qualification__title">Idatis</h3>
                                <span className="qualification__subtitle">
                                    FrontEnd Developer<br></br>01/2023 - 05/2023
                                </span>
                                <span className="qualification__subtitle">
                                    During my volunteer work at Idatis, I
                                    collaborated closely with the frontend team,
                                    primarily utilizing REACT to introduce new
                                    features and enhancements to the platform.
                                    The core mission of Idatis is to expedite
                                    projects, starting from a mere idea or
                                    design, and assist in transforming that
                                    concept into a minimum viable product with a
                                    social impact. This experience not only
                                    allowed me to hone my skills in contemporary
                                    web technologies but also broadened my
                                    understanding of creating value-driven
                                    digital solutions.
                                </span>
                            </motion.div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
