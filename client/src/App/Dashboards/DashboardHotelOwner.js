import React, { useState, useEffect } from 'react';

import { Container, Content, MainContent, MainView } from '../../styles/layout';

import Header from '../Layout/Header/Header';
import { SidebarHotelOwner as Sidebar } from '../Layout/Sidebar/SidebarHotelOwner';

import InConstruction from '../Pages/InConstruction';
import Welcome from '../Pages/Welcome';

import { OpacityScaleMain } from '../../animations/animations';

import HotelOwnerRoutes from '../../Routes/HotelOwnerRoutes';

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
            <MainView>{welcome ? <Welcome /> : <HotelOwnerRoutes />}</MainView>
          </MainContent>
        </Content>
      </Container>
    </OpacityScaleMain>
  );
};

export default DashboardInfluencer;
