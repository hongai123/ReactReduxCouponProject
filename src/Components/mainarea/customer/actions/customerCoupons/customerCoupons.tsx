import "./customerCoupons.css";
import { useState } from "react";
import { CouponModel } from "../../../../model/couponModel/couponModel";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import CouponBox from "../../../../style-box/couponBox/couponBox";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import ErrorMessage from "../../../../popupMessages/errorMessage/errorMessage";
import { Collapse } from "@mui/material";
import { TextField } from "@mui/material";

function CustomerCoupons(): JSX.Element {
    const url = "http://localhost:8080/customer/AllCustomerCoupon"
    const [couponss,setCoupons] = useState<CouponModel[]>([])
    const {token} = useTypedSelector((state)=>state.loginRed);
    const [isError,setError] = useState(false);
    const [myError,setMyError] = useState("")
    const [collapse,setCollapse] = useState(false);



    
    useEffect(()=>{
        axios.get(url,{
            headers:{
                Authorization: token?token:"Bearer error"
            }
        }).then((response)=>{
            setCoupons(response.data);
            
    
        }).catch((error:AxiosError)=>{
            console.log(error)
            const err = error.response?.request.responseText
            const errMessage = JSON.stringify(err);
            console.log(errMessage)
        
            setMyError(errMessage.slice(22,66)
            )
            
            setError(true);
        })
    },[token])

    useEffect(()=>{
        console.log(isError)
    },[isError])
    
    useEffect(()=>{
    
    },[collapse])


    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(grey[800]),
        backgroundColor: grey[800],
        '&:hover': {
          backgroundColor: grey[600],
          
        },
      }));


    return (
        <div className="coupons">

        <ColorButton onClick={()=>{    
            setCollapse(!collapse)

        }}>Show Coupons</ColorButton>

<Collapse in={collapse} timeout={900}>
            <div>
			<CouponBox coupons={couponss} />
            </div>
</Collapse>

<ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>


        </div>
    );
}

export default CustomerCoupons;
