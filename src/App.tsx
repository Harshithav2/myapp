import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { islogin } from './components/actions/userAction';
import PageNotFound from './components/PageNotFound';
import Signup from './components/Signup';
import { Login } from './components/Login';
import { PublicRoute } from './publicRoute';
import { ProtectedRoute } from './protectedroute';
import Dashboard from './components/Dashboard';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(islogin());
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <PublicRoute exact path="/login" component={Login}></PublicRoute>
          <Route path="/signup" component={Signup}></Route>
          <PublicRoute exact path="/signup" component={Signup}></PublicRoute>
          <ProtectedRoute path="/" component={Dashboard}></ProtectedRoute>
          <Route path="*" component={PageNotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
