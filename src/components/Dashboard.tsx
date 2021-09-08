import React from 'react';
import AddItems from './shopping/AddItems';
import DashboardHeader from './shopping/DashboardHeader';
import ListItems from './shopping/ListItems';

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <AddItems />
      <ListItems />
      <h2>Welcome to dash board</h2>
    </div>
  );
};
export default Dashboard;
