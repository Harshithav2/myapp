import { ComponentState } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { UserLoggedIn, UserRedux } from './components/schema/User';

const ProtectedRoute = ({ component: Component, ...rest }: { path: string, currentUser?: UserLoggedIn, component: ComponentState }) => {
  const currentUser = rest.currentUser;
  return (
    <Route
    {...rest}
    render={props => {
      if (currentUser && currentUser.loggedIn) {
        return <Component {...props}/>;
      } else {
        return <Redirect to='/login' />;
      }
    }}
    />
  );
};

function mapStateToProps (state: UserRedux) {
  return { currentUser: state.users };
}

const connectpage = connect(mapStateToProps)(ProtectedRoute);
export { connectpage as ProtectedRoute };
