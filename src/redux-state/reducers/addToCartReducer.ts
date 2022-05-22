import { stat } from "fs";
import { CouponModel } from "../../Components/model/couponModel/couponModel";
import { ActionType } from "../action-types";
import { cartActionType } from "../actions/cartActionType";



interface CartCoupons {
  coupons : CouponModel[]
}

const initialState = {
  coupons:[]
}

const cartReducer = (state:CartCoupons=initialState, action:cartActionType ):CartCoupons =>{
  switch(action.type){
    case ActionType.ADD_TO_CART:{
      return {
        ...state,
        coupons:[...state.coupons, action.payload]
      }
    }

    case ActionType.REMOVE_FROM_CART:{
      return {
        coupons:state.coupons.filter(c=>c.coupon_id !== action.payload.coupon_id)}
    }

    case ActionType.LOGOUT_USER:{
      return{
        ...state,
        coupons:[]
      }
    }

    

    default:{
      return state;
    }

  }
}

export default cartReducer;