export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const RESET_AUTHED_USER = 'RESET_AUTHED_USER';

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id
  };
}

export function resetAuthedUSer() {
  console.log('INSIDE reset USERS');
  return {
    type: RESET_AUTHED_USER,
    id: null
  };
}