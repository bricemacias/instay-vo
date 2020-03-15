import React from 'react';

import ScrollToTop from '../Components/ScrollToTop';

import AppRoutes from '../Routes/AppRoutes';

const AppLayout = props => {
  return (
    <>
      <ScrollToTop>
        <AppRoutes {...props} />
      </ScrollToTop>
    </>
  );
};

export default AppLayout;
