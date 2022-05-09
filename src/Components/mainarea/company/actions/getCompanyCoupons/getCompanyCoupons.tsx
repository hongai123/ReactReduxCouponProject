import "./getCompanyCoupons.css";
import { useState } from "react";
import { CouponModel } from "../../../../model/couponModel/couponModel";
import axios from "axios";
import { useEffect } from "react";
import CouponBox from "../../../../style-box/couponBox/couponBox";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";



function GetCompanyCoupons(): JSX.Element {
    const url = "http://localhost:8080/company/allCompanyCoupon"
    const [couponss,setCoupons] = useState<CouponModel[]>([])
    const {token} = useTypedSelector((state)=>state.loginRed);

    
    useEffect(()=>{
        axios.get(url,{
            headers:{
                Authorization: token?token:"Bearer error"

            }
        }).then((response)=>{
            setCoupons(response.data);
    
        }).catch(error=>console.log(error))
    },[])


    return (
        <div className="coupons">
			{couponss?<CouponBox coupons={couponss}/>:<div> No Coupons </div>}
        </div>
    );
}

export default GetCompanyCoupons;
