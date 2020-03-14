import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthChoice from '../Auth/AuthChoice';
import SigninInfluencer from '../Auth/Influencer/SigninInfluencer';
import SigninHotelOwner from '../Auth/HotelOwner/SigninHotelOwner';
import InfluencerSignupStepper from '../Auth/Influencer/Signup/InfluencerSignupStepper';
import HotelOwnerSignupStepper from '../Auth/HotelOwner/Signup/HotelOwnerSignupStepper';

const AuthRoutes = ({ refetch }) => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={AuthChoice} />
        <Route
          exact
          path="/SigninInfluencer"
          render={() => <SigninInfluencer refetch={refetch} />}
        />
        <Route
          exact
          path="/SigninHotelOwner"
          render={() => <SigninHotelOwner refetch={refetch} />}
        />
        <Route
          exact
          path="/SignupInfluencer"
          render={() => <InfluencerSignupStepper refetch={refetch} />}
        />
        <Route
          exact
          path="/SignupHotelOwner"
          render={() => <HotelOwnerSignupStepper refetch={refetch} />}
        />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default AuthRoutes;
