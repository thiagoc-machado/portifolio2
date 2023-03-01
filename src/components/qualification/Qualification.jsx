import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualifications</h2>
      <span className='section__subtitle'>My personal journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={
              toggleState === 1
                ? 'qualification__button button--flex qualification__active'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button button--flex qualification__active'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className='uil uil-briefcase-alt qualification__icon'></i>
            Experience
          </div>
        </div>

        <div className='qualification__sections'>
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Frontend</h3>
                <span className='qualification__subtitle'>
                  Spain - Institute
                </span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calndar-alt'></i>2021 - Present
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Backend</h3>
                <span className='qualification__subtitle'>
                  Spain - Institute
                </span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calndar-alt'></i>2021 - Present
                </div>
              </div>
            </div>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>React</h3>
                <span className='qualification__subtitle'>
                  Spain - Institute
                </span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calndar-alt'></i>2021 - Present
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Django</h3>
                <span className='qualification__subtitle'>
                  Spain - Institute
                </span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calndar-alt'></i>2021 - Present
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Idatis</h3>
                <span className='qualification__subtitle'>
                  Spain - Institute
                </span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calndar-alt'></i>2021 - Present
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Freelancer</h3>
                <span className='qualification__subtitle'>
                  Spain - Institute
                </span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calndar-alt'></i>2021 - Present
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
