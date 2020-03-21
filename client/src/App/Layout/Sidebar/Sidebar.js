import React from 'react';
import styled from 'styled-components';
import icons from '../../../images/sprite.svg';

import {
  Sidebar as SidebarLayout,
  LogoTitle,
  SideNav,
  SideNavItem,
  SideNavLink,
  SideNavIcon,
  SideNavText
} from '../../../styles/layout';

import { SidebarInfluencer } from './SidebarInfluencer';
import { SidebarHotelOwner } from './SidebarHotelOwner';

const BottomIcons = styled.div`
  ${p => p.width <= parseInt('1200px', 10) && { marginBottom: '5rem' }}
`;

export const Sidebar = ({ type, open, sideBarRef, width }) => {
  return (
    <>
      <SidebarLayout open={open} ref={sideBarRef}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <LogoTitle>INSTAY</LogoTitle>
          {type === 'influencer' ? (
            <SidebarInfluencer />
          ) : (
            <SidebarHotelOwner />
          )}
        </div>

        <BottomIcons width={width}>
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
        </BottomIcons>
      </SidebarLayout>
    </>
  );
};
