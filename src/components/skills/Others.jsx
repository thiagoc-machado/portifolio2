import React from "react";
import { motion } from "framer-motion";

const Others = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Others</h3>
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
                        <i class="uil uil-check"></i>
                        <div>
                            <h3 className="skills__name">Google / microsoft oauth</h3>
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
                        <i class="uil uil-check"></i>
                        <div>
                            <h3 className="skills__name">Python Scripts</h3>
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
                        <i class="uil uil-check"></i>
                        <div>
                            <h3 className="skills__name">Postman / Insomnia</h3>
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
                        <i class="uil uil-check"></i>
                        <div>
                            <h3 className="skills__name">RESTful APIs</h3>
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
                        <i class="uil uil-check"></i>
                        <div>
                            <h3 className="skills__name">Certbot</h3>
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
                        <i class="uil uil-check"></i>
                        <div>
                            <h3 className="skills__name">Bash Scripting</h3>
                            {/* <span className='skills__level'>5</span> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Others;
