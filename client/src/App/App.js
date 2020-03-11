import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';
import '../styles/css/style.css';

import theme from '../styles/theme';

import DashboardSelector from './Dashboards/DashboardSelector';

import { Query } from 'react-apollo';
import { GET_ALL_INFLUENCERS } from '../graphql/influencer';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const changetheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* <div className="button-theme">
          <Button variant="contained" color="secondary" onClick={changetheme}>
            Change Theme
          </Button>
        </div> */}
        <div>
          <DashboardSelector theme={theme} />
        </div>
        <Query query={GET_ALL_INFLUENCERS}>
          {(data, loading, error) => {
            if (loading) return <div>Loading</div>;
            if (error) return <div>Error</div>;
            // console.log(data);
            return null;
          }}
        </Query>
      </div>
    </>
  );
};

export default App;
