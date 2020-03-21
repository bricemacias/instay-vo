import React from 'react';

import ScrollToTop from '../components/ScrollToTop';

import AppRoutes from '../Routes/AppRoutes';

import Dashboard from './Dashboards/Dashboard';

const AppLayout = props => {
  return (
    <>
      <ScrollToTop>
        <Dashboard {...props} />
      </ScrollToTop>
    </>
  );
};

export default AppLayout;
