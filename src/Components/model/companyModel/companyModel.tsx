import { CouponModel } from "../couponModel/couponModel";

export class CompanyModel{
    email:string="";
    name:string="";
    password:string="";
    id?:number;
    coupons:CouponModel[]=[];

}