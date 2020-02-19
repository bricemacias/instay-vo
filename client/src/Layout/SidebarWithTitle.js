import React from 'react';
import icons from '../img/sprite.svg';
import { findByLabelText } from '@testing-library/react';

const SidebarWithTitle = () => {
  return (
    <>
      <nav className="sidebar">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 className="logo-title logo-title--side">INSTAY</h1>
          <ul className="side-nav">
            <li className="side-nav__item side-nav__item--active">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${icons}#icon-list`} />
                </svg>
                <span className="side-nav__text">Your campaign</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${icons}#icon-user1`} />
                </svg>
                <span className="side-nav__text">Requests</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${icons}#icon-shield`} />
                </svg>
                <span className="side-nav__text">Collaborations</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${icons}#icon-calendar`} />
                </svg>
                <span className="side-nav__text">Calendar</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${icons}#icon-chat`} />
                </svg>
                <span className="side-nav__text">Chat</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${icons}#icon-bar-graph`} />
                </svg>
                <span className="side-nav__text">Analytics</span>
              </a>
            </li>
          </ul>
        </div>

        <ul className="side-nav">
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <svg className="side-nav__icon">
                <use xlinkHref={`${icons}#icon-question`} />
              </svg>
              <span className="side-nav__text">FAQ</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <svg className="side-nav__icon">
                <use xlinkHref={`${icons}#icon-cog`} />
              </svg>
              <span className="side-nav__text">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SidebarWithTitle;
