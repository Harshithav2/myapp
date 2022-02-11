import { isLoggedIn, onLogin, onSignOut } from '../service/authApi';
import { User, UserLoggedIn } from '../schema/User';
import { RouteComponentProps } from 'react-router-dom';

export default function userLogin(email: string, password: string, props: RouteComponentProps) {
  return async (dispatch: any) => {
    const data: any = await onLogin({ email, password });
    try {
      if (data.user) {
        console.log('in user action', data);
        dispatch(success(data.user));
        props.history.push('/');
      } else {
        return dispatch(failed(data.error));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export function islogin() {
  return (dispatch: any) => {
    isLoggedIn().then(data => {
      dispatch(login(data));
    });
  };
}

export function signOut(props: RouteComponentProps) {
  return (dispatch: any) => {
    onSignOut().then(data => {
      dispatch(logOut());
      props.history.push('/');
    });
  };
}

function success(users?: User) { return { type: 'USER_LOG', payload: { loggedIn: true, user: users } }; };
function login(data: UserLoggedIn) { return { type: 'USER_LOG', payload: data }; };
function logOut() { return { type: 'USER_SIGNOUT', payload: {} }; };
function failed(data: string) { return { type: 'FAILED', payload: data }; };
