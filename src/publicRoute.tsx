import { ComponentState } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { UserLoggedIn, UserRedux } from './components/schema/User';

const PublicRoute = ({ component: Component, ...rest }: { exact: boolean, path: string, currentUser?: UserLoggedIn, component: ComponentState }) => {
  const currentUser = rest.currentUser;
  return (
    <Route
      {...rest}
      render={props => {
        if (currentUser && currentUser.loggedIn) {
          return <Redirect to='/' />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};
function mapStateToProps (state: UserRedux) {
  return { currentUser: state.users };
}

const connectpage = connect(mapStateToProps)(PublicRoute);
export { connectpage as PublicRoute };
