const users = (state = {}, action: any) => {
  switch (action.type) {
    case 'USER_LOG':
      return action.payload;
    case 'USER_SIGNOUT':
      return { loggedIn: false, user: {} };
    case 'FAILED':
      return { error: action.payload };
    default:
      return state;
  }
};
export default users;
