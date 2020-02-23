import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import App from '../App/App';
import SignupInfluencer from '../Auth/Influencer/SignupInfluencer';
import SigninInfluencer from '../Auth/Influencer/SigninInfluencer';
import InstagramCheck from '../Auth/Influencer/InstagramCheck';
import InfluencerSignupStepper from '../Auth/Influencer/InfluencerSignupStepper';

const Routes = ({ refetch }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route
          path="/signin"
          render={() => <SigninInfluencer refetch={refetch} />}
        />
        <Route path="/instagram-check" component={InstagramCheck} />
        <Route
          path="/signup"
          render={() => <SignupInfluencer refetch={refetch} />}
        />
        <Route
          path="/InfluencerSignupStepper"
          component={InfluencerSignupStepper}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
