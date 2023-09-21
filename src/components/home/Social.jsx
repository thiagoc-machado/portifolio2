import React from 'react';
import { motion } from 'framer-motion';

export const Social = () => {
  return (
    <div className='home__social'>
      <motion.a
        href='https://www.instagram.com/thiagoc.machado/'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
        initial={{ scale: 0  }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <i className='uil uil-instagram'></i>
      </motion.a>
      <motion.a
        href='https://www.linkedin.com/in/thiagomach/'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
        initial={{ scale: 0  }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2, delay: 0.2  }}
      >
        <i className='uil uil-linkedin'></i>
      </motion.a>
      <motion.a
        href='https://github.com/thiagoc-machado'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
        initial={{ scale: 0  }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2, delay: 0.4  }}
      >
        <i className="uil uil-github"></i>
      </motion.a>
    </div>
  );
};
