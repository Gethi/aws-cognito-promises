import Amplify, { Auth } from 'aws-amplify';

let appConfig
let userPool
let currentUser

export const set = async ampConfig => {
  appConfig = ampConfig;

  Amplify.configure(ampConfig);
  const cognitoUser = await Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  });
  userPool = cognitoUser.pool;
}

export const get = () => {
  return appConfig
}

export const getUserPool = () => {
  return userPool
}

export const getUser = async () => {
  const cognitoUser = await Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  });
  return cognitoUser;
}

export const setCurrentUserSession = user => {
  currentUser = user
}

export const getCurrentUserSession = () => {
  return currentUser
}
