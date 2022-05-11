import { combineReducers } from "redux";
import customerCouponsReducer from "./customerCouponsReducer";
import loginReducer from "./loginReducer"


const reducers = combineReducers({
  loginRed : loginReducer,
  couponsReducer : customerCouponsReducer
});
export default reducers

export type RootState = ReturnType<typeof reducers>;
