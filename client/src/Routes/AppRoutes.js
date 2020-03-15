import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthChoice from '../Auth/AuthChoice';
import SigninInfluencer from '../Auth/Influencer/SigninInfluencer';
import SigninHotelOwner from '../Auth/HotelOwner/SigninHotelOwner';
import InfluencerSignupStepper from '../Auth/Influencer/Signup/InfluencerSignupStepper';
import HotelOwnerSignupStepper from '../Auth/HotelOwner/Signup/HotelOwnerSignupStepper';
import DashboardInfluencer from '../App/Dashboards/DashboardInfluencer';
import DashboardHotelOwner from '../App/Dashboards/DashboardHotelOwner';

const AppRoutes = ({ authUser, type, refetch }) => {
  return (
    <>
      <Switch>
        {type === 'influencer' ? (
          <Route
            exact
            render={() => (
              <DashboardInfluencer authUser={authUser} refetch={refetch} />
            )}
          />
        ) : type === 'hotelowner' ? (
          <Route
            exact
            render={() => (
              <DashboardHotelOwner authUser={authUser} refetch={refetch} />
            )}
          />
        ) : null}
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default AppRoutes;
