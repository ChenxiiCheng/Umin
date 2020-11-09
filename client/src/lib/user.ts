const USER_LOGIN_STATUS = 'USER_LOGIN_STATUS'
const USER_LOGIN_TOKEN = 'USER_LOGIN_TOKEN'

export interface IUser {
  id: number;
  nickname: string;
  email: string;
  isActive: boolean;
  isAdmin: boolean;
  isSuperUser: boolean;
}

export interface ILogin {
  token: string;
  user: IUser;
}

// get login status from localStorage
export const getUserInfo = () => {
  const userInfo = localStorage.getItem(USER_LOGIN_STATUS) || null

  return userInfo !== null ? true : false
}

// set login status to localStorage
export const setUserInfo = (data: ILogin) => {
  const { token, user } = data;
  
  localStorage.setItem(USER_LOGIN_STATUS, JSON.stringify(user))
  localStorage.setItem(USER_LOGIN_TOKEN, token)
}

// user logout
export const userLogout = () => {
  localStorage.clear()
}