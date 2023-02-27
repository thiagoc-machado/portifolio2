import React from 'react';

export const Social = () => {
  return (
    <div className='home__social'>
      <a
        href='https://www.instagram.com/thiagoc.machado/'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <i className='uil uil-instagram'></i>
      </a>
      <a
        href='https://www.linkedin.com/in/thiagomach/'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <i className='uil uil-github'></i>
      </a>
      <a
        href='https://github.com/thiagoc-machado'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <i className="uil uil-linkedin"></i>
      </a>
    </div>
  );
};
