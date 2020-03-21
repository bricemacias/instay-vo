import React from 'react';
import icons from '../../../images/sprite.svg';

import {
  SideNav,
  SideNavItem,
  SideNavLink,
  SideNavIcon,
  SideNavText
} from '../../../styles/layout';

export const SidebarInfluencer = () => {
  return (
    <>
      <SideNav>
        <SideNavItem>
          <SideNavLink exact to="/">
            <SideNavIcon>
              <use xlinkHref={`${icons}#icon-list`} />
            </SideNavIcon>
            <SideNavText>Your campaigns</SideNavText>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink exact to="/Bookings">
            <SideNavIcon>
              <use xlinkHref={`${icons}#icon-aircraft-take-off`} />
            </SideNavIcon>
            <SideNavText>Bookings</SideNavText>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink exact to="/Favorites">
            <SideNavIcon>
              <use xlinkHref={`${icons}#icon-star`} />
            </SideNavIcon>
            <SideNavText>Favorites</SideNavText>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink exact to="/Chat">
            <SideNavIcon>
              <use xlinkHref={`${icons}#icon-chat`} />
            </SideNavIcon>
            <SideNavText>Chat</SideNavText>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink exact to="/Calendar">
            <SideNavIcon>
              <use xlinkHref={`${icons}#icon-calendar`} />
            </SideNavIcon>
            <SideNavText>Calendar</SideNavText>
          </SideNavLink>
        </SideNavItem>
      </SideNav>
    </>
  );
};
