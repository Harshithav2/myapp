import React from 'react';
import { BrowserRouter as Router, RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from './actions/userAction';
import NavigationBar from './NavigationBar';

const Welcome = (props: RouteComponentProps) => {
  const dispath = useDispatch();
  const logout = async (event: React.FormEvent) => {
    event.preventDefault();
    dispath(signOut(props));
  };

  return (
    <div>
      <div>
        <div className="header-dashboard">
          <button className="btn btn-primary logout-btn" onClick={logout}>Sign Out</button>
        </div>
        <div>
          <Router>
            <NavigationBar />
          </Router>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
