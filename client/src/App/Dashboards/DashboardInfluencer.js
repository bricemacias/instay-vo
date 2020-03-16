import React, { useState, useEffect } from 'react';

import { Container, Content, MainContent, MainView } from '../../styles/layout';

import Header from '../Layout/Header/Header';
import { SidebarInfluencer as Sidebar } from '../Layout/Sidebar/SidebarInfluencer';

import Welcome from '../Pages/Welcome';

import InfluencerRoutes from '../../Routes/InfluencerRoutes';

import { OpacityScaleMain } from '../../animations/animations';

const DashboardInfluencer = () => {
  const [welcome, setWelcome] = useState(true);
  const [open, setOpenState] = useState(true);

  const setOpen = () => {
    setOpenState(!open);
  };

  useEffect(() => {
    setTimeout(function() {
      setWelcome(false);
    }, 5000);
  }, []);
  return (
    <OpacityScaleMain>
      <Container>
        <Sidebar open={open} />
        <Content>
          <Header setOpen={setOpen} />
          <MainContent>
            <MainView>{welcome ? <Welcome /> : <InfluencerRoutes />}</MainView>
          </MainContent>
        </Content>
      </Container>
    </OpacityScaleMain>
  );
};

export default DashboardInfluencer;
