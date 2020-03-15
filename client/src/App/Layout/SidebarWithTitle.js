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

const SidebarWithTitle = () => {
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
                <SideNavText>Your campaign</SideNavText>
              </SideNavLink>
            </SideNavItem>
            <SideNavItem>
              <SideNavLink exact to="/Requests">
                <SideNavIcon>
                  <use xlinkHref={`${icons}#icon-user1`} />
                </SideNavIcon>
                <SideNavText>Requests</SideNavText>
              </SideNavLink>
            </SideNavItem>
            <SideNavItem>
              <SideNavLink exact to="/Collaborations">
                <SideNavIcon>
                  <use xlinkHref={`${icons}#icon-shield`} />
                </SideNavIcon>
                <SideNavText>Collaborations</SideNavText>
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
            <SideNavItem>
              <SideNavLink exact to="/Chat">
                <SideNavIcon>
                  <use xlinkHref={`${icons}#icon-chat`} />
                </SideNavIcon>
                <SideNavText>Chat</SideNavText>
              </SideNavLink>
            </SideNavItem>
            <SideNavItem>
              <SideNavLink exact to="/Analytics">
                <SideNavIcon>
                  <use xlinkHref={`${icons}#icon-bar-graph`} />
                </SideNavIcon>
                <SideNavText>Analytics</SideNavText>
              </SideNavLink>
            </SideNavItem>
          </SideNav>
        </div>

        <SideNav>
          <SideNavItem>
            <SideNavLink exact to="/FAQ">
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

export default SidebarWithTitle;
