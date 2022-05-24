import { Button } from "@mui/material";
import { useActionOnCart } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import "./addToCart.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { CouponModel } from "../../model/couponModel/couponModel";
import { useEffect, useState } from "react";

interface GetCouponProps{
    coupon:CouponModel
}

function AddToCartButton(props:GetCouponProps): JSX.Element {
    const cartAdd = useActionOnCart();
    const {coupons} = useTypedSelector(state=>state.cartRed);
    const [disableMe, setDisable] = useState(false);
    const ownCoupons = useTypedSelector(state=>state.couponsReducer)
    const allCoupons = [...coupons, ...ownCoupons.coupons]

    // useEffect(()=>{
    //     ownCoupons.coupons.map((c)=>{
    //         if(c.coupon_id === props.coupon.coupon_id){
    //             setDisable(true);
    //         }
    //     })
    // },[ownCoupons.coupons])

    // useEffect(()=>{
    //     coupons.map((c)=>{
    //         if(c.coupon_id === props.coupon.coupon_id){
    //             setDisable(true)
    //         }
    //     })
    // },[ownCoupons,coupons])

    useEffect(()=>{

        for(const co of allCoupons ){
            if(co.coupon_id === props.coupon.coupon_id){
                setDisable(true);
                break;
            }
            else if(co.coupon_id !== props.coupon.coupon_id){
                setDisable(false);

            }        
            
        }

        if(allCoupons.length === 0) {
            setDisable(false)
        }



        console.log(allCoupons)
    },[coupons,ownCoupons])

    
    const handleOnClick = ()=>{
        const term = {
            coupon: props.coupon
        }
        cartAdd.AddToCart(term)
        setDisable(true)
    }



    return (
        <Button disabled={disableMe} onClick={handleOnClick}>

        <AddCircleIcon/>

        </Button>
    );
}

export default AddToCartButton;
