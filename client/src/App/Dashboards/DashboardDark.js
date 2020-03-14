import React from 'react';
import user from '../images/user-6.jpg';
import icons from '../images/sprite.svg';
import '../../styles/css/style.css';

import Sidebar from '../Layout/Sidebar';

import InConstruction from '../Pages/InConstruction';

const DashboardDark = () => {
  return (
    <div className="container">
      <header className="header-dark">
        <div className="logo-header">
          <h1 className="logo-title">INSTAY</h1>
        </div>

        <form action="#" className="search search--dark-mode">
          <input
            type="text"
            className="search__input"
            placeholder="Search hotels or inluencers"
          />
          <button className="search__button">
            <svg className="search__icon">
              <use xlinkHref={`${icons}#icon-magnifying-glass`} />
            </svg>
          </button>
        </form>
        <nav className="user-nav user-nav--dark-mode">
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon--dark-mode">
              <use xlinkHref={`${icons}#icon-bell`} />
            </svg>
            <span className="user-nav__notification">7</span>
          </div>
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon--dark-mode">
              <use xlinkHref={`${icons}#icon-bubbles2`} />
            </svg>
            <span className="user-nav__notification">13</span>
          </div>
          <div className="user-nav__user">
            <images
              src={user}
              alt="User photo"
              className="user-nav__user-photo"
            />
            <span className="user-nav__user-name user-nav__user-name--dark-mode">
              Sarah
            </span>
          </div>
        </nav>
      </header>
      <div className="content"></div>

      <div className="content">
        <Sidebar />

        <main className="hotel-view">
          <InConstruction />
        </main>
      </div>
    </div>
  );
};

export default DashboardDark;
