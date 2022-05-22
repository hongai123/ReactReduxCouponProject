import { useState,useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Button } from "@mui/material";
import { CouponModel } from "../../model/couponModel/couponModel";
import { useActionOnCart, useActionOnCustomer } from "../../../hooks/useActions";
import axios, { AxiosError } from "axios";
import SuccsessMessage from '../../popupMessages/succsessMessage/succsessMessage';
import ErrorMessage from '../../popupMessages/errorMessage/errorMessage';


function BuyAll(): JSX.Element {
    const {token} = useTypedSelector(state=>state.loginRed);
    const {CustomerUploadCoupon} = useActionOnCustomer();
    const {coupons} = useTypedSelector(state=>state.couponsReducer)
    const cartCoupon = useActionOnCart();
    const cartCoupons = useTypedSelector(state=>state.cartRed)
    const [isSuccesses, setIsSuccesses] = useState(false)
    const [sucMessage, setSucMessage] = useState("");
    const [isError,setError] = useState(false);
    const [myError,setMyError] = useState("")

 

    const onClick = ()=>{
        cartCoupons.coupons.map((c)=>{
            buyWithAxios(c)
        })

    }

    const buyWithAxios = (co : CouponModel)=>{
        const term = {
            coupons: co
        }
        const term2 = {
            coupon: co
        }
        cartCoupon.RemoveFromCart(term2);

        const url = `http://localhost:8080/customer/purchasecoupon/${co.coupon_id}`
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
            setIsSuccesses(true)
            setSucMessage("Coupon Added!")

        }).catch((error:AxiosError)=>{
            console.log(error)
            setMyError(error.message)
            
            
            setError(true)
        })

    }





    


    

    return (
        <div className="buyCoupon">

            <Button size="small" onClick={onClick} >Purchase All</Button>
            <SuccsessMessage isSuccesses={isSuccesses} sucMessage={sucMessage} onClickHandle={()=>setIsSuccesses(false)}/>
            <ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>
			
        </div>
    );
}

export default BuyAll;
