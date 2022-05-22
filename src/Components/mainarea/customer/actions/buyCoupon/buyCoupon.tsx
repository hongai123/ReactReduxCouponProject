import "./buyCoupon.css";
import { useState,useEffect } from "react";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { Button } from "@mui/material";
import { CouponModel } from "../../../../model/couponModel/couponModel";
import { useActionOnCart, useActionOnCustomer } from "../../../../../hooks/useActions";
import axios, { AxiosError } from "axios";

interface myCouponProp{
    couponProp:CouponModel
}

function BuyCoupon(props:myCouponProp): JSX.Element {
    const {token} = useTypedSelector(state=>state.loginRed);
    const {CustomerUploadCoupon} = useActionOnCustomer();
    const {coupons} = useTypedSelector(state=>state.couponsReducer)
    const cartCoupon = useActionOnCart();

    // useEffect(()=>{
    //     const term2 = {
    //         coupon: props.couponProp
    //     }
    //     cartCoupon.RemoveFromCart(term2);
    // },[])

    const handleClick = ()=>{
        console.log(coupons)
        const term = {
            coupons: props.couponProp
        }
        const term2 = {
            coupon: props.couponProp
        }
        cartCoupon.RemoveFromCart(term2);

        const url = `http://localhost:8080/customer/purchasecoupon/${props.couponProp.coupon_id}`
        axios.put(url,{},{
            headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': token ? token : "Bearer error"    
        }
        }
        ).then((response)=>{
            CustomerUploadCoupon(term);
            console.log(response)
        }).catch((error:AxiosError)=>{
            console.log(error)
        })

    }
    


    


    

    return (
        <div className="buyCoupon">
            <Button size="small" onClick={handleClick} >Buy</Button>
			
        </div>
    );
}

export default BuyCoupon;
