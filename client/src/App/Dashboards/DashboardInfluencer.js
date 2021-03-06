import React, { useState, useEffect, useRef } from 'react';

import { Container, Content, MainContent, MainView } from '../../styles/layout';

import Header from '../Layout/Header/Header';
import { SidebarInfluencer as Sidebar } from '../Layout/Sidebar/SidebarInfluencer';

import Welcome from '../Pages/Welcome';

import InfluencerRoutes from '../../Routes/InfluencerRoutes';

import { OpacityScaleMain } from '../../animations/animations';

import { useWindowSize } from '../../hooks/useWindowSize';
import { useClickOutside } from '../../hooks/useClickOutside';

//////// NOT USED ANYMORE

const DashboardInfluencer = () => {
  const [welcome, setWelcome] = useState(true);
  const [open, setOpenState] = useState(false);

  const windowSize = useWindowSize();

  const sideBarRef = useRef('');

  const setOpen = () => {
    setOpenState(!open);
  };

  useEffect(() => {
    setTimeout(function() {
      setWelcome(false);
    }, 5000);
  }, []);

  useClickOutside(sideBarRef, () => {
    if (windowSize.width <= parseInt('716px', 10) && open) {
      setOpen(false);
    }
  });

  return (
    <OpacityScaleMain>
      <Container>
        <Sidebar open={open} sideBarRef={sideBarRef} width={windowSize.width} />
        <Content>
          <Header open={open} setOpen={setOpen} />
          <MainContent>
            <MainView>{welcome ? <Welcome /> : <InfluencerRoutes />}</MainView>
          </MainContent>
        </Content>
      </Container>
    </OpacityScaleMain>
  );
};

export default DashboardInfluencer;
