import React from 'react';
import { motion } from 'framer-motion';

const Backend = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Backend / APIs</h3>
      <div className='skills__box'>
        <div className='skills__group'>
          <motion.div
            className='skills__data'
            initial={{ opacity: 0, y: -5 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                duration: 0.5,
                delay: 0.2,
              },
            }}
          >
            <i className='uil uil-check'></i>
            <div>
              <h3 className='skills__name'>Django</h3>
            </div>
          </motion.div>
          <motion.div
            className='skills__data'
            initial={{ opacity: 0, y: -5 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                duration: 0.5,
                delay: 0.3,
              },
            }}
          >
            <i className='uil uil-check'></i>
            <div>
              <h3 className='skills__name'>Python</h3>
            </div>
          </motion.div>
          <motion.div
            className='skills__data'
            initial={{ opacity: 0, y: -5 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                duration: 0.5,
                delay: 0.4,
              },
            }}
          >
            <i className='uil uil-check'></i>
            <div>
              <h3 className='skills__name'>FastAPI</h3>
            </div>
          </motion.div>
          <motion.div
            className='skills__data'
            initial={{ opacity: 0, y: -5 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                duration: 0.5,
                delay: 0.45,
              },
            }}
          >
            <i className='uil uil-check'></i>
            <div>
              <h3 className='skills__name'>PostgreSQL</h3>
            </div>
          </motion.div>
        </div>
        

        <div className='skills__group'>
          <motion.div
            className='skills__data'
            initial={{ opacity: 0, y: -5 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                duration: 0.5,
                delay: 0.5,
              },
            }}
          >
            <i className='uil uil-check'></i>
            <div>
              <h3 className='skills__name'>Flask</h3>
            </div>
          </motion.div>
          <motion.div
            className='skills__data'
            initial={{ opacity: 0, y: -5 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                duration: 0.5,
                delay: 0.6,
              },
            }}
          >
            <i className='uil uil-check'></i>
            <div>
              <h3 className='skills__name'>PostGIS</h3>
            </div>
          </motion.div>
          <motion.div
            className='skills__data'
            initial={{ opacity: 0, y: -5 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                duration: 0.5,
                delay: 0.7,
              },
            }}
          >
            <i className='uil uil-check'></i>
            <div>
              <h3 className='skills__name'>MySQL</h3>
            </div>
          </motion.div>
          <motion.div
            className='skills__data'
            initial={{ opacity: 0, y: -5 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                duration: 0.5,
                delay: 0.8,
              },
            }}
          >
            <i className='uil uil-check'></i>
            <div>
              <h3 className='skills__name'>Keycloak</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
