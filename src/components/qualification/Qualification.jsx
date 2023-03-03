import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className='qualification section' id='qualification'>
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
                <h3 className='qualification__title'>Django for everybody</h3>
                <span className='qualification__subtitle'>
                  University of Michigan
                </span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calndar-alt'></i>2023
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
                <h3 className='qualification__title'>
                  Full Stack Software Developer
                </h3>
                <span className='qualification__subtitle'>
                  IBM Skills Network
                </span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calndar-alt'></i>2022
                </div>
              </div>
            </div>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Front-End Developer</h3>
                <span className='qualification__subtitle'>Meta</span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calndar-alt'></i>2022
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
                <h3 className='qualification__title'>
                  Programming in Python / Databases for Back-End Development
                </h3>
                <span className='qualification__subtitle'>Meta</span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calndar-alt'></i>2022
                </div>
              </div>
            </div>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  Introduction to Machine Learning on AWS
                </h3>
                <span className='qualification__subtitle'>AWS</span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calndar-alt'></i>2022
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
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
                  Fullstack Developer - volunteer
                </span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calndar-alt'></i>01/2023 - Present
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
                  {/* Spain - Institute */}
                </span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calndar-alt'></i>12/2022 - Present
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
