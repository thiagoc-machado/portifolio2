import React from 'react';

function Info() {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
      <i class="uil uil-graduation-cap"></i>
        <h3 className="about__title">University of Michigan</h3>
        <span className="about__subtitle">Python</span>
      </div>
      <div className='about__box'>
      <i class="uil uil-graduation-cap"></i>
        <h3 className="about__title">Meta</h3>
        <span className="about__subtitle">Advanced React</span>
      </div>
      <div className='about__box'>
      <i class="uil uil-graduation-cap"></i>
        <h3 className="about__title">IBM</h3>
        <span className="about__subtitle">Fullstack</span>
      </div>
    </div>
  );
}

export default Info;
