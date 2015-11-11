import { User } from '../model/User';
import { LOGIN, LOGOUT } from '../actions/AuthActions';

export function currentUser(user: User = null, action) {
  switch (action.type) {
    case LOGIN:
      return action.user
    case LOGOUT:
      return null
    default:
      return user
  }
}
