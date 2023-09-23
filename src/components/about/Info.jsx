import React from "react";
import { motion } from "framer-motion";

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              duration: 0.5,
              delay: 0.1,
            },
          }}
        >
          <i class="uil uil-graduation-cap"></i>
          <h3 className="about__title">University of Michigan</h3>
          <span className="about__subtitle">Python</span>
        </motion.div>
      </div>
      <div className="about__box">
        <motion.div
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
          <i class="uil uil-graduation-cap"></i>
          <h3 className="about__title">Meta</h3>
          <span className="about__subtitle">Frontend</span>
        </motion.div>
      </div>
      <div className="about__box">
        <motion.div
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
          <i class="uil uil-graduation-cap"></i>
          <h3 className="about__title">IBM</h3>
          <span className="about__subtitle">Fullstack</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Info;
