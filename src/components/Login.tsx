import React, { useState } from 'react';
import { Link } from 'react-navi';
import userLogin from './actions/userAction';
import { connect, useDispatch } from 'react-redux';
import { UserRedux } from './schema/User';

const Login = (props: any) => {
  const { users } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispath = useDispatch();

  const onLog = async (event: React.FormEvent) => {
    event.preventDefault();
    dispath(userLogin(email, password, props));
  };

  return (
    <div>
      <div className="login-container">
        <div data-testid='login-test' className='login-form'>
          <h3 className="text-center text-info">Login Page</h3>
          <div className="row form-group">
            <label className="text-info">Email:</label>
            <input className="col-sm-8 form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            {email && !(/\S+@\S+\.\S+/).test(email) && <span className="error" data-testid="error-msg">Please enter a valid email.</span>}
          </div>
          <div className="row form-group">
            <label className="text-info">Password:</label>
            <input className="col-sm-8 form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
          </div>
          <button type="submit" data-testid='login-button' name="submit" className="btn btn-primary login-btn" onClick={onLog}>Login</button>
        </div>
      </div>
      {users.error && <div className="error-message">{users.error}</div>}
      <p className="error-message">Don't have account? <Link href="/signup"> Sign Up</Link></p>
    </div>
  );
};

function mapStateToProps (state: UserRedux) {
  return { users: state.users };
}

const connectpage = connect(mapStateToProps)(Login);
export { connectpage as Login };
