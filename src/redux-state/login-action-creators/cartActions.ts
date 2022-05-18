import { CouponModel } from "../../Components/model/couponModel/couponModel";
import { Dispatch } from 'redux'
import { cartActionType } from "../actions/cartActionType";
import { ActionType } from "../action-types";




export const AddToCart = (term:{coupon:CouponModel})=>{
return async(dispatch:Dispatch<cartActionType>)=>{
  dispatch({
    type:ActionType.ADD_TO_CART,
    payload: term.coupon
  });
}
}

export const RemoveFromCart = (term:{coupon:CouponModel})=>{
  return async(dispatch:Dispatch<cartActionType>)=>{
    dispatch({
      type:ActionType.REMOVE_FROM_CART,
      payload: term.coupon
    });
  }
  }

  export const LoggingOut = ()=>{
    return async(dispatch:Dispatch<cartActionType>)=>{
      dispatch({
        type:ActionType.LOGOUT_USER,
      });
    }
    }

