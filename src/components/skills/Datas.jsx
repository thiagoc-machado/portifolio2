import React from "react";
import { motion } from "framer-motion";

const Datas = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Data / ETL</h3>
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
                            <h3 className="skills__name">Pandas</h3>
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
                            <h3 className="skills__name">NumPy</h3>
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
                            <h3 className="skills__name">Selenium</h3>
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
                            <h3 className="skills__name">Scrapy</h3>
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
                            <h3 className="skills__name">BeautifulSoup</h3>
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
                            <h3 className="skills__name">Matplotlib</h3>
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
                                delay: 0.8,
                            },
                        }}
                    >
                        <i className="uil uil-check"></i>
                        <div>
                            <h3 className="skills__name">Airflow</h3>
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
                                delay: 0.9,
                            },
                        }}
                    >
                        <i className="uil uil-check"></i>
                        <div>
                            <h3 className="skills__name">Martin</h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Datas;
