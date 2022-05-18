import { CouponModel } from "../../Components/model/couponModel/couponModel";
import { ActionType } from "../action-types";

export type customerActionType = Upload|DeleteCoupons;

interface Upload {
  type:ActionType.UPLOAD_COUPONS;
  payload:CouponModel[]|CouponModel;
}

interface DeleteCoupons {
  type:ActionType.LOGOUT_USER;
  payload:[]
}

