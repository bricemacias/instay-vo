import React from 'react';
import user from '../../img/user-6.jpg';
import icons from '../../img/sprite.svg';
import '../../App.css';
import '../../styles/css/style.css';

import Sidebar from '../Layout/Sidebar';

import InConstruction from '../../Pages/InConstruction';

const DashboardLight = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo-title logo-title--light">INSTAY</h1>
        <form action="#" className="search">
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
        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref={`${icons}#icon-bell`} />
            </svg>
            <span className="user-nav__notification">7</span>
          </div>
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref={`${icons}#icon-bubbles2`} />
            </svg>
            <span className="user-nav__notification">13</span>
          </div>
          <div className="user-nav__user">
            <img src={user} alt="User photo" className="user-nav__user-photo" />
            <span className="user-nav__user-name">Sarah</span>
          </div>
        </nav>
      </header>
      <div className="content">
        <Sidebar />
        <main className="hotel-view">
          <InConstruction />
        </main>
      </div>
    </div>
  );
};

export default DashboardLight;
