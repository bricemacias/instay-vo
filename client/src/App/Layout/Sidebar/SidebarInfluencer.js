import React from 'react';
import icons from 'images/sprite.svg';

import {
  Sidebar,
  LogoTitle,
  SideNav,
  SideNavItem,
  SideNavLink,
  SideNavIcon,
  SideNavText
} from 'styles/layout';

export const SidebarInfluencer = () => {
  return (
    <>
      <Sidebar>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <LogoTitle>INSTAY</LogoTitle>
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
        </div>

        <SideNav>
          <SideNavItem>
            <SideNavLink exact to="/HelpCenter">
              <SideNavIcon>
                <use xlinkHref={`${icons}#icon-question`} />
              </SideNavIcon>
              <SideNavText>Help Center</SideNavText>
            </SideNavLink>
          </SideNavItem>
          <SideNavItem>
            <SideNavLink exact to="/Settings">
              <SideNavIcon>
                <use xlinkHref={`${icons}#icon-cog`} />
              </SideNavIcon>
              <SideNavText>Settings</SideNavText>
            </SideNavLink>
          </SideNavItem>
        </SideNav>
      </Sidebar>
    </>
  );
};
