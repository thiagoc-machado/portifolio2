import React from "react";
import { motion } from "framer-motion";

const Devops = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Devops</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <motion.div
                        className="skills__data"
                        initial={{ opacity: 0, y: -5 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                duration: 0.5,
                                delay: 0.2,
                            },
                        }}
                    >
                        <i className="uil uil-check"></i>
                        <div>
                            <h3 className="skills__name">Amazon AWS</h3>
                            {/* <span className='skills__level'>6</span> */}
                        </div>
                    </motion.div>
                    <motion.div
                        className="skills__data"
                        initial={{ opacity: 0, y: -5 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                duration: 0.5,
                                delay: 0.3,
                            },
                        }}
                    >
                        <i className="uil uil-check"></i>
                        <div>
                            <h3 className="skills__name">Nginx / Apache</h3>
                            {/* <span className='skills__level'>9</span> */}
                        </div>
                    </motion.div>
                    <motion.div
                        className="skills__data"
                        initial={{ opacity: 0, y: -5 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                duration: 0.5,
                                delay: 0.4,
                            },
                        }}
                    >
                        <i className="uil uil-check"></i>
                        <div>
                            <h3 className="skills__name">Linux / Ubuntu Server</h3>
                            {/* <span className='skills__level'>8</span> */}
                        </div>
                    </motion.div>
                </div>

                <div className="skills__group">
                    <motion.div
                        className="skills__data"
                        initial={{ opacity: 0, y: -5 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                duration: 0.5,
                                delay: 0.5,
                            },
                        }}
                    >
                        <i className="uil uil-check"></i>
                        <div>
                            <h3 className="skills__name">Docker / Docker compose</h3>
                            {/* <span className='skills__level'>7</span> */}
                        </div>
                    </motion.div>
                    <motion.div
                        className="skills__data"
                        initial={{ opacity: 0, y: -5 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                duration: 0.5,
                                delay: 0.6,
                            },
                        }}
                    >
                        <i className="uil uil-check"></i>
                        <div>
                            <h3 className="skills__name">Github / Bitbucket</h3>
                            {/* <span className='skills__level'>5</span> */}
                        </div>
                    </motion.div>
                    <motion.div
                        className="skills__data"
                        initial={{ opacity: 0, y: -5 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                duration: 0.5,
                                delay: 0.7,
                            },
                        }}
                    >
                        <i className="uil uil-check"></i>
                        <div>
                            <h3 className="skills__name">Celery / Redis</h3>
                            {/* <span className='skills__level'>5</span> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Devops;
