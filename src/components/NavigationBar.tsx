import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './home';

export default function NavigationBar () {
  return (
    <div>
      <Router>
        <div className="welcome-header">
          <Link className="welcome-content" to='/'>Home</Link>
          <Link className="welcome-content" to='/dashboard'>Dashboard</Link>
        </div>
        <Switch>
          <Route exact path="/dashboard" render={(props) => <Dashboard />} />
          <Route exact path="/home" render={(props) => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}
