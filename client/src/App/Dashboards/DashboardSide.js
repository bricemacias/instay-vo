import React from 'react';
import user from '../../img/user-6.jpg';
import icons from '../../img/sprite.svg';
import '../../App.css';
import '../../styles/css/style.css';

import { OpacityScaleMain } from '../../animations';

import SidebarWithTitle from '../Layout/SidebarWithTitle';

import InConstruction from '../../Pages/InConstruction';

const DashboardSide = () => {
  return (
    <OpacityScaleMain>
      <div className="container" style={{ display: 'flex' }}>
        <SidebarWithTitle />
        <div
          className="content"
          style={{
            flexDirection: 'column',
            flex: 1
          }}
        >
          <header className="header">
            <form action="#" className="search search--side">
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
                <img
                  src={user}
                  alt="User photo"
                  className="user-nav__user-photo"
                />
                <span className="user-nav__user-name">Sarah</span>
              </div>
            </nav>
          </header>
          <div className="content" style={{ flex: 1 }}>
            <main className="hotel-view">
              <InConstruction />
            </main>
          </div>
        </div>
      </div>
    </OpacityScaleMain>
  );
};

export default DashboardSide;
