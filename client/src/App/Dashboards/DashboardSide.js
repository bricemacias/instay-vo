import React, { useState, useEffect } from 'react';
import user from 'images/user-6.jpg';
import icons from 'images/sprite.svg';

import { Container, Content, MainContent, MainView } from 'styles/layout';

import Search from 'Components/Search';
import Header from '../Layout/Header/Header';
import { SidebarInfluencer as Sidebar } from '../Layout/Sidebar/SidebarInfluencer';

import InConstruction from '../Pages/InConstruction';
import Welcome from '../Pages/Welcome';

import { OpacityScaleMain } from 'animations';

const DashboardSide = () => {
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
            <MainView>{welcome ? <Welcome /> : <InConstruction />}</MainView>
          </MainContent>
        </Content>
      </Container>
    </OpacityScaleMain>
  );
};

export default DashboardSide;
