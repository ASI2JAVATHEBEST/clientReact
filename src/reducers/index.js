import { combineReducers } from 'redux'
import userReducer from './userReducer'

const globalReducer = combineReducers({
  user: userReducer,
})


export default globalReducer