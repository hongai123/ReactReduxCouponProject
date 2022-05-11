import { CouponModel } from "../../Components/model/couponModel/couponModel";
import { ActionType } from "../action-types";
import { customerActionType } from "../actions/customerActionType";


interface CustomerCoupons{
  coupons:CouponModel[];
}



const initialState = {
  coupons:[]
}


const customerCouponsReducer = (state:CustomerCoupons=initialState, action:customerActionType):CustomerCoupons=>{
  console.log("im in customer reducer!!!")

  switch(action.type){
    case ActionType.UPLOAD_COUPONS:{
      console.log(action)
      return {...state,
      coupons: state.coupons.concat(action.payload)
    }
  }
    case ActionType.LOGOUT_USER :{
    return {coupons:[]}
    }

    default:{
      return state;
    }
  }

}

export default  customerCouponsReducer;