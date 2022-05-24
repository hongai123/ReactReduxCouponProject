import { combineReducers } from "redux";
import cartReducer from "./addToCartReducer";
import customerCouponsReducer from "./customerCouponsReducer";
import loginReducer from "./loginReducer"


const reducers = combineReducers({
  loginRed : loginReducer,
  couponsReducer : customerCouponsReducer,
  cartRed: cartReducer
  
});
export default reducers

export type RootState = ReturnType<typeof reducers>;
