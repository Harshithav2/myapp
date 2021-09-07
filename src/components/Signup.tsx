import React, { useState } from 'react';
import { Link, useNavigation } from 'react-navi';
import { onSignUp } from './service/authApi';

function Signup () {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [error, setError] = useState('');

  const signup = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await onSignUp({
      email,
      password
    });

    if (response && response.error) {
      setError(response.error);
    } else {
      navigation.navigate('/account');
    }
  };
  return (
    <div>
      <div className="login-container">
        <div className='login-form'>
          <h3 className="text-center text-info">Sign Up</h3>
          <div className="row form-group">
            <label className="text-info">Email:</label>
            <input className="col-sm-8 form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
          </div>
          <div className="row form-group">
            <label className="text-info">Password:</label>
            <input className="col-sm-8 form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
          </div>
          <div className="row form-group">
            <label className="text-info">Confirm Password:</label>
            <input className="col-sm-8 form-control" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Enter Confirm Password" />
            {confirmPassword && (password !== confirmPassword) && <p className='error'>Password and Confirm Password does not match</p>}
          </div>
          <button className="btn btn-primary login-btn" onClick={signup}>Sign Up</button>
        </div>
      </div>
      <div className="error-message">{error}</div>
      <p className="error-message">Already have account? <Link href="/login"> Login</Link></p>
    </div>
  );
}

export default Signup;
