import { getUser } from './config'

export default async ()=> {
  const cognitoUser = await getUser();

  if (cognitoUser) {
    cognitoUser.signOut()
    Promise.resolve()
  } else {
    throw new Error('no cognitiveUser value')
  }
}
