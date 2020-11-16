/*
 * action types
 */
export const UPDATE_USER = 'UPDATE_USER'

/*
 * action creators
 */

export function updateUser(user) {
  return { type: UPDATE_USER, user }
}