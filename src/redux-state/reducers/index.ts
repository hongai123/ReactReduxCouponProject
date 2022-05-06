import { combineReducers } from "redux";
import loginReducer from "./loginReducer"
const reducers = combineReducers({
  loginRed : loginReducer
});
export default reducers

export type RootState = ReturnType<typeof reducers>;
