import Amplify, { Auth } from 'aws-amplify';

let appConfig = null;
let userPool = null;
let currentUser = null;

export const set = async ampConfig => {
  appConfig = ampConfig;

  Amplify.configure(ampConfig);
  userPool = Auth.userPool;
}

export const get = () => {
  return appConfig
}

export const getUserPool = () => {
  return userPool
}

export const getUser = async () => {
  let cognitoUser = null;
  try {
    cognitoUser = await Auth.currentAuthenticatedUser({
        bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    });
  } catch (error) {
    console.log(error)
  }

  return cognitoUser;
}

export const setCurrentUserSession = user => {
  currentUser = user
}

export const getCurrentUserSession = () => {
  return currentUser
}
