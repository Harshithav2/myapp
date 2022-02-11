import React from 'react';

const Dashboard = () => {
  const itemList = async (event: React.FormEvent) => {
    event.preventDefault();
  };
  const cartList = async (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className='dashboard-header'>
        <h2>Shopping</h2>
        <div>
          <button className='dash-head-content' onClick={itemList}>Shop</button>
          <button className='dash-head-content' onClick={cartList}>My cart</button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
