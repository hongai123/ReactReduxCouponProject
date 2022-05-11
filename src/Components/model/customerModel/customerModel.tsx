import { CouponModel } from "../couponModel/couponModel";

export class customerModel{
  email:string="";
  firstName:string="";
  id?:number;
  lastName:string="";
  password:string="";
  coupons:CouponModel[]=[];

}