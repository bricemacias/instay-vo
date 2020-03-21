import React, { useState, useEffect, useRef } from 'react';

import { Container, Content, MainContent, MainView } from '../../styles/layout';

import Header from '../Layout/Header/Header';
import { Sidebar } from '../Layout/Sidebar/Sidebar';

import Welcome from '../Pages/Welcome';

import InfluencerRoutes from '../../Routes/InfluencerRoutes';
import HotelOwnerRoutes from '../../Routes/HotelOwnerRoutes';

import { OpacityScaleMain } from '../../animations/animations';

import { useWindowSize } from '../../hooks/useWindowSize';
import { useClickOutside } from '../../hooks/useClickOutside';

const Dashboard = ({ type }) => {
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
        <Sidebar
          type={type}
          open={open}
          sideBarRef={sideBarRef}
          width={windowSize.width}
        />
        <Content>
          <Header open={open} setOpen={setOpen} />
          <MainContent>
            <MainView>
              {welcome ? (
                <Welcome />
              ) : type === 'influencer' ? (
                <InfluencerRoutes />
              ) : (
                <HotelOwnerRoutes />
              )}
            </MainView>
          </MainContent>
        </Content>
      </Container>
    </OpacityScaleMain>
  );
};

export default Dashboard;
