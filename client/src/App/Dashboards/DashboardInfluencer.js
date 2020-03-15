import React, { useState, useEffect } from 'react';

import { Container, Content, MainContent, MainView } from '../../styles/layout';

import Header from '../Layout/Header/Header';
import { SidebarInfluencer as Sidebar } from '../Layout/Sidebar/SidebarInfluencer';

import InConstruction from '../Pages/InConstruction';
import Welcome from '../Pages/Welcome';

import InfluencerRoutes from '../../Routes/InfluencerRoutes';

import { OpacityScaleMain } from '../../animations/animations';

const DashboardInfluencer = () => {
  const [welcome, setWelcome] = useState(true);

  useEffect(() => {
    setTimeout(function() {
      setWelcome(false);
    }, 5000);
  }, []);
  return (
    <OpacityScaleMain>
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <MainContent>
            <MainView>{welcome ? <Welcome /> : <InfluencerRoutes />}</MainView>
          </MainContent>
        </Content>
      </Container>
    </OpacityScaleMain>
  );
};

export default DashboardInfluencer;
