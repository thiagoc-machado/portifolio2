import React, { useState } from 'react';
import './services.css';
import { motion } from 'framer-motion';
import magisHero from '../../assets/magismenu/tablet.png';
import magisMobileMenu from '../../assets/magismenu/mobile_menu.png';
import magisMobile from '../../assets/magismenu/mobile.png';
import magisKitchen from '../../assets/magismenu/kitchen_kds.png';
import magisStatus from '../../assets/magismenu/status_tv.png';
import magisAdmin from '../../assets/magismenu/admin_dashboard.png';
import magisWaiter from '../../assets/magismenu/waiter_tablet.png';
import magisTotem from '../../assets/magismenu/totem.png';
import work1 from '../../assets/work1.jpg';
import work2 from '../../assets/work2.jpg';
import work3 from '../../assets/work3.jpg';
import work4 from '../../assets/work4.jpg';
import work5 from '../../assets/work5.jpg';
import work6 from '../../assets/work6.jpg';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const [magisSlide, setMagisSlide] = useState(0);
  const magisImages = [
    magisMobileMenu,
    magisMobile,
    magisKitchen,
    magisStatus,
    magisAdmin,
    magisWaiter,
    magisTotem,
  ];
  const nextMagis = () =>
    setMagisSlide((prev) => (prev + 1) % magisImages.length);
  const prevMagis = () =>
    setMagisSlide((prev) => (prev - 1 + magisImages.length) % magisImages.length);
  const toggleTab = (index) => {
    setToggleState(index);
  };
    return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Projects</h2>
      <span className='section__subtitle'>
        Selected work with the strongest production impact, led by MagisMenu
        and live at magismenus.com / magismenu.es
      </span>

      <div className='services__container container grid'>
        <div className='services__featured-wrap'>
          <motion.div
            className='services__featured-card'
            initial={{ opacity: 0, y: 14 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 90,
                duration: 0.6,
              },
            }}
          >
            <div className='services__featured-copy'>
              <p className='services__featured-kicker'>Flagship product</p>
              <h3 className='services__featured-title'>MagisMenu</h3>
              <p className='services__featured-description'>
                Multi-tenant restaurant platform live at magismenus.com and
                magismenu.es, built to connect customer ordering, operations,
                kitchen workflows, and management in a single product.
              </p>
              <div className='services__featured-tags'>
                <span>QR ordering</span>
                <span>Kitchen / KDS</span>
                <span>Admin & analytics</span>
              </div>
              <div className='services__featured-actions'>
                <button
                  className='services__button services__button-primary'
                  onClick={() => toggleTab(10)}
                >
                  Explore case study
                  <i className='uil uil-arrow-right services__button-icon'></i>
                </button>
                <a
                  href='https://magismenus.com'
                  target='_blank'
                  rel='noreferrer'
                  className='services__featured-link'
                >
                  Open live site
                </a>
              </div>
            </div>
            <div className='services__featured-visual'>
              <img
                src={magisHero}
                alt='MagisMenu overview'
                className='services__featured-image'
              />
              <div className='services__featured-metrics'>
                <span>Multi-screen platform</span>
                <span>Production deployed</span>
                <span>AWS + Docker + Vue</span>
              </div>
            </div>
          </motion.div>
          <div
            className={
              toggleState === 10
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content services__modal-content-wide'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>
              <h3 className='services__modal-title'>MagisMenu</h3>
              <p className='services__modal-description'>
                MagisMenu is the flagship product in my portfolio, live at
                magismenus.com and magismenu.es. It is a multi-tenant
                restaurant platform built to connect customers, waiters,
                kitchens, kiosks, and management in one system. The product
                supports QR ordering at the table, real-time order tracking,
                status screens, kitchen/KDS workflows, and a centralized admin
                layer for menus, tables, users, and promotions. I helped
                shape the backend and frontend experience with Django, DRF,
                PostgreSQL, WebSockets, Redis, Docker, and Vue, and the system
                has been deployed on AWS for production use.
              </p>
              <div className='services__carousel'>
                <img
                  src={magisImages[magisSlide]}
                  alt='MagisMenu screen'
                  className='services__carousel-img'
                />
                <div className='services__carousel-controls'>
                  <button onClick={prevMagis} aria-label='Previous image'>
                    ‹
                  </button>
                  <span>
                    {magisSlide + 1}/{magisImages.length}
                  </span>
                  <button onClick={nextMagis} aria-label='Next image'>
                    ›
                  </button>
                </div>
              </div>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-globe services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://magismenus.com'
                      target='_blank'
                      rel='noreferrer'
                      className='services__modal-link'
                    >
                      magismenus.com
                    </a>{" "}
                    /{" "}
                    <a
                      href='https://magismenu.es'
                      target='_blank'
                      rel='noreferrer'
                      className='services__modal-link'
                    >
                      magismenu.es
                    </a>
                  </p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Customer-facing flow: catalog, cart, item customization,
                    multi-language support, and QR ordering per table.
                  </p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Operations layer: waiter/tablet and kiosk screens designed
                    to keep order flow fast and consistent.
                  </p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Kitchen and status screens with live order states delivered
                    through WebSockets.
                  </p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Multi-tenant admin for menus, promotions, tables, users,
                    and auditing, deployed with Docker and Nginx on AWS.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <motion.div
          className='services__content services__card-secondary services__card1'
          initial={{ opacity: 0, y: -5, x: -5 }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
            transition: { type: 'spring', stiffness: 100, duration: 0.5, delay: 0.1 },
          }}
        >
          <div className='services__card-secondary-inner'>
            <div className='services__mini-copy' onClick={() => toggleTab(1)}>
              <div className='services__mini-top'>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className='services__title'>
                  ServCenter
                  <br />
                  service control
                </h3>
              </div>
              <p className='services__mini-description'>
                Service management system for customers, employees, work orders,
                and cash control.
              </p>
              <span className='services__button' onClick={() => toggleTab(1)}>
                View more
                <i className='uil uil-arrow-right services__button-icon'></i>
              </span>
            </div>
            <img
              src={work1}
              alt='ServCenter preview'
              className='services__secondary-thumb'
            />
          </div>
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
                Full management system for service companies, covering customer
                registration, users, services, employees, work orders, and
                cash control. I built it with Django, Python, JavaScript, and
                Bootstrap to streamline day-to-day operations and reduce manual
                work.
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-globe services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://servcenter-fullstack-django.onrender.com'
                      target='_blank'
                      rel='noreferrer'
                      className='services__modal-link'
                    >
                      Website (username and password 'teste'
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
                      rel='noreferrer'
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
        <motion.div
          className='services__content services__card-secondary services__card2'
          initial={{ opacity: 0, y: -5 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, duration: 0.5, delay: 0.1 },
          }}
        >
          <div className='services__card-secondary-inner'>
            <div className='services__mini-copy' onClick={() => toggleTab(2)}>
              <div className='services__mini-top'>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className='services__title'>
                  Triac Soluções
                  <br />
                  Landing Page
                </h3>
              </div>
              <p className='services__mini-description'>
                Clean, responsive landing page focused on clarity and conversion.
              </p>
              <span onClick={() => toggleTab(2)} className='services__button'>
                View more
                <i className='uil uil-arrow-right services__button-icon'></i>
              </span>
            </div>
            <img
              src={work2}
              alt='Triac preview'
              className='services__secondary-thumb'
            />
          </div>
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
                Landing page for an appliance maintenance company, built with
                HTML, CSS, and JavaScript. The focus was on clear messaging,
                simple navigation, and a responsive layout that works well on
                every screen size.
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-globe services__modal-icon'></i>
                  <a
                    href='https://triac.info/'
                    target='_blank'
                    rel='noreferrer'
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
                      rel='noreferrer'
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
        <motion.div
          className='services__content services__card-secondary services__card3'
          initial={{ opacity: 0, y: -5, x: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
            transition: { type: 'spring', stiffness: 100, duration: 0.5, delay: 0.1 },
          }}
        >
          <div className='services__card-secondary-inner'>
            <div className='services__mini-copy' onClick={() => toggleTab(3)}>
              <div className='services__mini-top'>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className='services__title'>
                  Cap España
                  <br />
                  Study platform
                </h3>
              </div>
              <p className='services__mini-description'>
                Practice tool for CAP exam prep with randomized questions and
                local progress tracking.
              </p>
              <span onClick={() => toggleTab(3)} className='services__button'>
                View more
                <i className='uil uil-arrow-right services__button-icon'></i>
              </span>
            </div>
            <img
              src={work3}
              alt='CAP platform preview'
              className='services__secondary-thumb'
            />
          </div>
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
                Web application for CAP exam preparation in Spain. It collects
                questions from the Spanish Ministry of Transport, presents them
                in a randomized study flow, and stores progress locally in the
                browser. The project is still evolving, but the core learning
                experience is already in place.
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-globe services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://cap-empc.onrender.com/'
                      target='_blank'
                      rel='noreferrer'
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
                      rel='noreferrer'
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
        <motion.div
          className='services__content services__card-secondary services__card4'
          initial={{ opacity: 0, y: 5, x: -5 }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
            transition: { type: 'spring', stiffness: 100, duration: 0.5, delay: 0.1 },
          }}
        >
          <div className='services__card-secondary-inner'>
            <div className='services__mini-copy' onClick={() => toggleTab(4)}>
              <div className='services__mini-top'>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className='services__title'>
                  MusicApp
                  <br />
                  Music player
                </h3>
              </div>
              <p className='services__mini-description'>
                React player with Shazam API integration, search, playback and
                lyrics.
              </p>
              <span onClick={() => toggleTab(4)} className='services__button'>
                View more
                <i className='uil uil-arrow-right services__button-icon'></i>
              </span>
            </div>
            <img
              src={work4}
              alt='MusicApp preview'
              className='services__secondary-thumb'
            />
          </div>
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
                React music player built around the Shazam API via RapidAPI and
                styled with Tailwind CSS. It includes search, playback, lyrics,
                artist details, and location-aware recommendations.
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-globe services__modal-icon'></i>
                  <p className='services__modal-info'>
                    <a
                      href='https://musicapp-thiago.netlify.app/'
                      target='_blank'
                      rel='noreferrer'
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
                      rel='noreferrer'
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
        <motion.div
          className='services__content services__card-secondary services__card5'
          initial={{ opacity: 0, y: 5, x: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
            transition: { type: 'spring', stiffness: 100, duration: 0.5, delay: 0.1 },
          }}
        >
          <div className='services__card-secondary-inner'>
            <div className='services__mini-copy' onClick={() => toggleTab(5)}>
              <div className='services__mini-top'>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className='services__title'>
                  E-wok
                  <br />
                  Restaurant orders
                </h3>
              </div>
              <p className='services__mini-description'>
                Flask ordering flow for a restaurant with kitchen screen and order
                tracking.
              </p>
              <span onClick={() => toggleTab(5)} className='services__button'>
                View more
                <i className='uil uil-arrow-right services__button-icon'></i>
              </span>
            </div>
            <img
              src={work5}
              alt='E-wok preview'
              className='services__secondary-thumb'
            />
          </div>
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
                Web app built with Python and Flask to simplify the ordering
                process for a Chinese restaurant. It includes a customer flow,
                a kitchen screen, SQLite persistence, recurring-order discounts,
                and filtering by customer name.
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
        <motion.div
          className='services__content services__card-secondary services__card6'
          initial={{ opacity: 0, y: 5, x: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
            transition: { type: 'spring', stiffness: 100, duration: 0.5, delay: 0.1 },
          }}
        >
          <div className='services__card-secondary-inner'>
            <div className='services__mini-copy' onClick={() => toggleTab(6)}>
              <div className='services__mini-top'>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className='services__title'>
                  React
                  <br />
                  Dashboard
                </h3>
              </div>
              <p className='services__mini-description'>
                Dashboard connected to Google Sheets for simple, spreadsheet-driven
                updates.
              </p>
              <span onClick={() => toggleTab(6)} className='services__button'>
                View more
                <i className='uil uil-arrow-right services__button-icon'></i>
              </span>
            </div>
            <img
              src={work6}
              alt='Dashboard preview'
              className='services__secondary-thumb'
            />
          </div>
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
                React dashboard integrated with Google Sheets, letting data
                updates happen directly from the spreadsheet while keeping the
                dashboard in sync.
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
