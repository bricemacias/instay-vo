import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import App from '../App/App';
import Signin from '../Auth/Influencer/SigninInfluencer';
import SignupInfluencer from '../Auth/Influencer/SignupInfluencer';
import SigninInfluencer from '../Auth/Influencer/SigninInfluencer';
import InstagramCheck from '../Auth/Influencer/InstagramCheck';
import InfluencerSignupStepper from '../Auth/Influencer/InfluencerSignupStepper';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/signin" component={Signin} />
        <Route path="/instagram-check" component={InstagramCheck} />
        <Route path="/signup" component={SignupInfluencer} />
        <Route path="/signin" component={SigninInfluencer} />
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
