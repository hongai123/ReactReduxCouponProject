import "./coupons.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { CouponModel } from "../../model/couponModel/couponModel";
import CouponBox from "../../style-box/couponBox/couponBox";
function Coupons(): JSX.Element {
    const url = "http://localhost:8080/guest/allAvailableCoupons"
    const [couponss,setCoupons] = useState<CouponModel[]>([])
    
    useEffect(()=>{
        axios.get(url).then((response)=>{
            setCoupons(response.data);
    
        }).catch(error=>console.log(error))
    },[couponss])

    return (
        <div className="coupons">
			<CouponBox coupons={couponss}/>
        </div>
    );
}

export default Coupons;
