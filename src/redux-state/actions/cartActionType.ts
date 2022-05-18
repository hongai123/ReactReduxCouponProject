import { CouponModel } from "../../Components/model/couponModel/couponModel";
import { ActionType } from "../action-types";

export type cartActionType = AddCoupon|RemoveCoupon|LoggedOut

interface AddCoupon {
  type:ActionType.ADD_TO_CART;
  payload:CouponModel
}

interface RemoveCoupon {
  type:ActionType.REMOVE_FROM_CART
  payload:CouponModel
}

interface LoggedOut {
  type:ActionType.LOGOUT_USER;
}