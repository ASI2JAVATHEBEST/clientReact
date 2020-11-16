import { UPDATE_USER } from '../actions'

const initialState = {
//   user: null,
  user: {name:"Antoine",money:4000},
  /*...*/
}

/**
 * Reducer
 */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      // state is immutable, you must create a new object with another reference
      return {
        ...state,
        user: action.user,
      }
    default:
      return state
  }
}

export default userReducer