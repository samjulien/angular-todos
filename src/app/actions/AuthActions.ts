import { User } from '../model/User';

export const LOGIN = 'LOGIN'
export function login(user: User) {
  return { type: LOGIN, user }
}

export const LOGOUT = 'LOGOUT'
export function logout() {
  return { type: LOGOUT }
}
