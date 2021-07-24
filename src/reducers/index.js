import {combineReducers} from "redux";
import users from './login'
import quotes from './quote'
import auth from './auth'
export default combineReducers({users,quotes})
