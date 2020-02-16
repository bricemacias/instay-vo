import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import './styles/css/style.css';

import DashboardSelector from './Dashboards/DashboardSelector';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const changetheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="button-theme">
          <Button variant="contained" color="secondary" onClick={changetheme}>
            Change Theme
          </Button>
        </div>
        <div>
          <DashboardSelector theme={theme} />
        </div>
      </div>
    </>
  );
};

export default App;
