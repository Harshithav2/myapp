import axios, { AxiosRequestConfig } from 'axios';
import { environment } from '../environment/environment';
import { Credentials, LoginApiResponse, SignupCred } from '../schema/User';

export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: `${environment.API_URL}/login`,
    withCredentials: true,
    data
  };

  try {
    const { data: { user } } = await axios.request<LoginApiResponse>(requestConfig);
    console.log('data', user)
    return {
      user
    };
  } catch (e) {
    console.error(e);
    // return { error: e.response.data.message };
  }
};

export const onSignUp = async (data: SignupCred) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: `${environment.API_URL}/register`,
    data
  };

  try {
    await axios.request(requestConfig);
  } catch (e) {
    console.error(e);
    return {error: 'error in signout'}
    // return { error: e.response.data[0].message };
  }
};

export const onSignOut = async () => {
  const requestConfig: AxiosRequestConfig = {
    method: 'delete',
    url: `${environment.API_URL}/logout`,
    withCredentials: true
  };
  try {
    await axios.request(requestConfig);
  } catch (e) {
    console.error(e);
    // return { error: e.response.data.message };
  }
};

export const isLoggedIn = async () => {
  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: `${environment.API_URL}/isLoggedIn`,
    withCredentials: true
  };
  try {
    const { data } = await axios.request(requestConfig);
    if (!data) {
      return { loggedIn: data.loggedIn, user: {} };
    }
    return data;
  } catch (e) {
    // console.error(e);
  };
};
