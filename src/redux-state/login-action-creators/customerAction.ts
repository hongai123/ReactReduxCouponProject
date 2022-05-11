import { CouponModel } from "../../Components/model/couponModel/couponModel";
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { customerActionType } from "../actions/customerActionType";



export const CustomerUploadCoupon =(term:{coupons:CouponModel[]|CouponModel})=>{
return async(dispatch:Dispatch<customerActionType>) => {
  
    dispatch({
      type:ActionType.UPLOAD_COUPONS,
      payload:term.coupons
    });
}

}

export const CustomerDeleteCoupons =()=>{
  return async(dispatch:Dispatch<customerActionType>) => {
    
      dispatch({
        type:ActionType.LOGOUT_USER,
        payload:[]
      });
  }
  
  }