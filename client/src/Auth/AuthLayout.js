import React from 'react';

import ScrollToTop from '../Components/ScrollToTop';

import AuthRoutes from '../Routes/AuthRoutes';

const AuthLayout = ({ refetch }) => {
  return (
    <>
      <ScrollToTop>
        <AuthRoutes refetch={refetch} />
      </ScrollToTop>
    </>
  );
};

export default AuthLayout;
