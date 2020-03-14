import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { GET_CURRENT_INFLUENCER } from '../graphql/influencer';

import { GlobalStyle } from '../styles/GlobalStyles';

import ScrollToTop from '../components/ScrollToTop';

import App from '../App/App';
import SignupInfluencer from '../Auth/Influencer/Signup/SignupInfluencer';
import SigninInfluencer from '../Auth/Influencer/SigninInfluencer';
import InstagramCheck from '../Auth/Influencer/Signup/InstagramCheck';
import GoToDashboard from '../Auth/Influencer/Signup/GoToDashboard';
import InfluencerSignupStepper from '../Auth/Influencer/Signup/InfluencerSignupStepper';

import SignupHotelOwner from '../Auth/HotelOwner/Signup/SignupHotelOwner';
import HotelOwnerSignupStepper from '../Auth/HotelOwner/Signup/HotelOwnerSignupStepper';

import AuthLayout from '../Auth/AuthLayout';

const RootRoutes = ({ session, refetch }) => {
  // const { session } = useQuery(GET_CURRENT_INFLUENCER);
  // console.log(session);

  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop>
        <Switch>
          {session && session.getCurrentInfluencer ? (
            <Route
              exact
              render={() => <App authUser={session.getCurrentInfluencer} />}
            />
          ) : session && session.getCurrentHotelOwner ? (
            <Route
              exact
              render={() => <App authUser={session.getCurrentHotelOwner} />}
            />
          ) : (
            <>
              <Route exact render={() => <AuthLayout refetch={refetch} />} />
              <Route
                path="/InfluencerSignupStepper"
                component={InfluencerSignupStepper}
              />
            </>
          )}
          {/* <Route path="/" exact component={App} />
          <Route
            path="/signin"
            render={() => <SigninInfluencer refetch={refetch} />}
          />
          <Route path="/instagram-check" component={InstagramCheck} />
          <Route
            path="/signup"
            render={() => <HotelOwnerSignupStepper refetch={refetch} />}
          />
          <Route
            path="/Gotodashboard"
            render={() => <GoToDashboard refetch={refetch} />}
          />
          <Route
            path="/InfluencerSignupStepper"
            component={InfluencerSignupStepper}
          /> */}
          {/* <Route path="/AuthChoice" component={AuthChoice} /> */}
          <Redirect to="/" />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default RootRoutes;
