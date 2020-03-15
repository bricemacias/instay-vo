import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Campaigns from '../App/Pages/Influencer/Campaigns';
import Bookings from '../App/Pages/Influencer/Bookings';
import Favorites from '../App/Pages/Influencer/Favorites';
import Chat from '../App/Pages/Influencer/Chat';
import Calendar from '../App/Pages/Influencer/Calendar';
import HelpCenter from '../App/Pages/Influencer/HelpCenter';
import Settings from '../App/Pages/Influencer/Settings';

const InfluencerRoutes = props => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Campaigns {...props} />} />
        <Route exact path="/Bookings" render={() => <Bookings {...props} />} />
        <Route
          exact
          path="/Favorites"
          render={() => <Favorites {...props} />}
        />
        <Route exact path="/Chat" render={() => <Chat {...props} />} />
        <Route exact path="/Calendar" render={() => <Calendar {...props} />} />
        <Route
          exact
          path="/HelpCenter"
          render={() => <HelpCenter {...props} />}
        />
        <Route exact path="/Settings" render={() => <Settings {...props} />} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default InfluencerRoutes;
