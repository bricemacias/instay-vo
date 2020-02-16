import React from 'react';
import DashboardLight from './DashboardLight';
import DashboardSide from './DashboardSide';

const DashboardSelector = ({ theme }) => {
  let dashboard;
  theme === 'dark'
    ? (dashboard = <DashboardSide />)
    : (dashboard = <DashboardLight />);

  return dashboard;
};

export default DashboardSelector;
