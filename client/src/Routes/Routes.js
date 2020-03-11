import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { GET_CURRENT_INFLUENCER } from '../graphql/queries/influencer';

import App from '../App/App';
import SignupInfluencer from '../Auth/Influencer/Signup/SignupInfluencer';
import SigninInfluencer from '../Auth/Influencer/SigninInfluencer';
import InstagramCheck from '../Auth/Influencer/Signup/InstagramCheck';
import GoToDashboard from '../Auth/Influencer/Signup/GoToDashboard';
import InfluencerSignupStepper from '../Auth/Influencer/Signup/InfluencerSignupStepper';

const Routes = ({ data, refetch }) => {
  // const { data } = useQuery(GET_CURRENT_INFLUENCER);
  // console.log(data);

  return (
    <Router>
      <Switch>
        {/* {data.getCurrentInfluencer ? (
          <Route
            exact
            render={() => <App authUser={data.getCurrentInfluencer} />}
          />
        ) : (
          <Route exact render={() => <SigninInfluencer refetch={refetch} />} />
        )} */}
        <Route path="/" exact component={App} />
        {/* <Route
          path="/signin"
          render={() => <SigninInfluencer refetch={refetch} />} */}
        />
        <Route path="/instagram-check" component={InstagramCheck} />
        <Route
          path="/signup"
          render={() => <SignupInfluencer refetch={refetch} />}
        />
        <Route
          path="/Gotodashboard"
          render={() => <GoToDashboard refetch={refetch} />}
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
