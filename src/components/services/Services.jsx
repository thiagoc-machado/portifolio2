import React, { useState } from 'react';
import './services.css';
import { motion } from 'framer-motion';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Projects</h2>
      <span className='section__subtitle'>
        Take a look at what I'm working on
      </span>

      <div className='services__container container grid'>
        <motion.div className='services__content  services__card1'
        initial={{opacity: 0, y: -5, x: -5 }}
        whileInView={{ opacity: 1, y: 0, x: 0, transition: { type: 'spring', stiffness: 100,  duration: 0.5, delay: 0.1 } }}
        >
          <div onClick={() => toggleTab(1)}>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>
              ServCenter
              <br />
              service control
            </h3>
          </div>
          <span className='services__button' onClick={() => toggleTab(1)}>
            View more
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>
          <div
            className={
              toggleState === 1
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>
              <h3 className='services__modal-title'>ServCenter</h3>
              <p className='services__modal-description'>
                Full management system for service companies. It has customer
                registration, users, services, employees, control of work orders
                and cash control. Developed with Django, Python, JavaScript and
                Bootstrap technologies, this system offers an efficient solution
                for managing the processes of a company.
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-globe services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://servcenter.up.railway.app/'
                      target='_blank'
                      className='services__modal-link'
                      rel="noreferrer"
                    >
                      Website (username and password 'root'
                    </a>
                    )
                  </p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-github services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://github.com/thiagoc-machado/ServCenter-Fullstack-Django'
                      target='_blank'
                      className='services__modal-link'
                      rel="noreferrer"
                    >
                      Github project
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div className='services__content services__card2'
        initial={{opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100,  duration: 0.5, delay: 0.1 } }}
        >
          <div onClick={() => toggleTab(2)}>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>
              Triac Soluções
              <br />
              Landing Page
            </h3>
          </div>
          <span onClick={() => toggleTab(2)} className='services__button'>
            View more
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>
          <div
            className={
              toggleState === 2
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>
              <h3 className='services__modal-title'>Triac Soluções</h3>
              <p className='services__modal-description'>
                The website of the appliance maintenance company was developed
                with the combination of HTML, CSS and JavaScript to ensure an
                optimized and attractive user experience. The website structure
                was carefully planned to be intuitive and easy to navigate, with
                a responsive menu that fits perfectly to any screen size.
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-globe services__modal-icon'></i>
                  <a
                    href='https://triac.info/'
                    target='_blank'
                    className='services__modal-link'
                  >
                    Website
                  </a>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-github services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://github.com/thiagoc-machado/triac-web'
                      target='_blank'
                      className='services__modal-link'
                    >
                      Website
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div className='services__content services__card3'
        initial={{opacity: 0, y: -5, x: 5 }}
        whileInView={{ opacity: 1, y: 0, x: 0, transition: { type: 'spring', stiffness: 100,  duration: 0.5, delay: 0.1 } }}
        >
          <div onClick={() => toggleTab(3)}>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>
              Cap España
              <br />
              Study plataform
            </h3>
          </div>
          <span onClick={() => toggleTab(3)} className='services__button'>
            View more
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>
          <div
            className={
              toggleState === 3
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>
              <h3 className='services__modal-title'>Visual Designer</h3>
              <p className='services__modal-description'>
                This web application is designed for CAP exam preparation in
                Spain. It scrapes questions from the Spanish Ministry of
                Transport website, downloads them, and presents them randomly.
                The app also tracks progress through javascript and saves it in
                the user's browser. This web application is still in
                development.
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-globe services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://cap-empc.onrender.com/'
                      target='_blank'
                      className='services__modal-link'
                    >
                      Website
                    </a>
                  </p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-github services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://cap-empc.onrender.com/'
                      target='_blank'
                      className='services__modal-link'
                    >
                      Github project
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div className='services__content services__card4'
        initial={{opacity: 0, y: 5, x: -5 }}
        whileInView={{ opacity: 1, y: 0, x: 0, transition: { type: 'spring', stiffness: 100,  duration: 0.5, delay: 0.1 } }}
        >
          <div onClick={() => toggleTab(4)}>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>
              MusicApp
              <br />
              Music player
            </h3>
          </div>
          <span onClick={() => toggleTab(4)} className='services__button'>
            View more
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>
          <div
            className={
              toggleState === 4
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>
              <h3 className='services__modal-title'>MusicApp</h3>
              <p className='services__modal-description'>
                This project is a music player built using React, consuming data
                from the Shazam API via Rapid API and styled with Tailwind CSS.
                It includes features such as music search, playback, lyrics and
                artist display and the added functionality of identifying the
                user's location to provide local music recommendations
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-globe services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://musicapp-thiago.netlify.app/'
                      target='_blank'
                      className='services__modal-link'
                    >
                      Website
                    </a>
                  </p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-github services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://github.com/thiagoc-machado/musicaap'
                      target='_blank'
                      className='services__modal-link'
                    >
                      Github projet
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div className='services__content services__card5'
        initial={{opacity: 0, y: 5, x: 0 }}
        whileInView={{ opacity: 1, y: 0, x: 0, transition: { type: 'spring', stiffness: 100,  duration: 0.5, delay: 0.1 } }}
        >
          <div onClick={() => toggleTab(5)}>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>
              E-wok
              <br />
              restaurant orders
            </h3>
          </div>
          <span onClick={() => toggleTab(5)} className='services__button'>
            View more
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>
          <div
            className={
              toggleState === 5
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>
              <h3 className='services__modal-title'>E-Wok sistems</h3>
              <p className='services__modal-description'>
                This web application was developed with Python and the Flask
                framework to facilitate the ordering process of a Chinese
                restaurant. We used HTML, CSS and JavaScript for the frontend
                and stored the order data in a SQLite database. We display the
                list of orders for the preparation of dishes at the restaurant
                endpoint and offer a discount system for recurring orders and an
                option to filter by customer name.
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-globe services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://e-wok.onrender.com'
                      target='_blank'
                      className='services__modal-link'
                      rel="noreferrer"
                    >
                      Website
                    </a>
                  </p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-globe services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://e-wok.onrender.com/endpoint'
                      target='_blank'
                      className='services__modal-link'
                      rel="noreferrer"
                    >
                      Kitcken screen
                    </a>
                  </p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-github services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://github.com/thiagoc-machado/aLSuh1iIWKXxxGRJJ121'
                      target='_blank'
                      className='services__modal-link'
                      rel="noreferrer"
                    >
                      Github project
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div className='services__content services__card6'
        initial={{opacity: 0, y: 5, x: 5 }}
        whileInView={{ opacity: 1, y: 0, x: 0, transition: { type: 'spring', stiffness: 100,  duration: 0.5, delay: 0.1 } }}
        >
          <div onClick={() => toggleTab(6)}>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>
              React
              <br />
              Dashboard
            </h3>
          </div>
          <span onClick={() => toggleTab(6)} className='services__button'>
            View more
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>
          <div
            className={
              toggleState === 6
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>
              <h3 className='services__modal-title'>Dashboard</h3>
              <p className='services__modal-description'>
                React dashboard with seamless integration to google sheets. You
                can easily make changes to your data directly from the sheet,
                making it easier and faster to update your dashboard.
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-globe services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://dashboard-thiago.netlify.app'
                      target='_blank'
                      className='services__modal-link'
                      rel="noreferrer"
                    >
                      Website
                    </a>
                  </p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-globe services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://docs.google.com/spreadsheets/d/1odWgxKhy10fLHpTpedeLBNEmcpyhOW4CxBDRV8u3lik/edit?usp=sharing'
                      target='_blank'
                      className='services__modal-link'
                      rel="noreferrer"
                    >
                      Spreadsheet link
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
