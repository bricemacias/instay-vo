import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Campaigns from '../App/Pages/HotelOwner/Campaigns';
import Requests from '../App/Pages/HotelOwner/Requests';
import Collaborations from '../App/Pages/HotelOwner/Collaborations';
import Chat from '../App/Pages/HotelOwner/Chat';
import Calendar from '../App/Pages/HotelOwner/Calendar';
import Analytics from '../App/Pages/HotelOwner/Analytics';
import HelpCenter from '../App/Pages/HotelOwner/HelpCenter';
import Settings from '../App/Pages/HotelOwner/Settings';

const HotelOwnerRoutes = props => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Campaigns {...props} />} />
        <Route exact path="/Requests" render={() => <Requests {...props} />} />
        <Route
          exact
          path="/Collaborations"
          render={() => <Collaborations {...props} />}
        />
        <Route exact path="/Chat" render={() => <Chat {...props} />} />
        <Route exact path="/Calendar" render={() => <Calendar {...props} />} />
        <Route
          exact
          path="/Analytics"
          render={() => <Analytics {...props} />}
        />
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

export default HotelOwnerRoutes;
