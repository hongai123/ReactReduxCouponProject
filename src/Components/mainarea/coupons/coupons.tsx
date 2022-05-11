import "./coupons.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { CouponModel } from "../../model/couponModel/couponModel";
import CouponBox from "../../style-box/couponBox/couponBox";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import { Collapse } from "@mui/material";


function Coupons(): JSX.Element {
    const url = "http://localhost:8080/guest/allAvailableCoupons"
    const [couponss,setCoupons] = useState<CouponModel[]>([])
    const [refresh,setRefresh] = useState(true);
    
    useEffect(()=>{
        axios.get(url).then((response)=>{
            setCoupons(response.data);
            console.log(response.data)
    
        }).catch(error=>console.log(error))
    },[refresh])

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        
        color: theme.palette.getContrastText(grey[800]),
        backgroundColor: grey[800],
        '&:hover': {
          backgroundColor: grey[600],
          
        },
      }));
      let hide = false;



    return (
        <div className="coupons">
            <div id="buttonToRemove" className="buttomDesign"  >
            <ColorButton  onClick={()=>{
                setRefresh(!refresh);

            }}>Show Coupons</ColorButton>
            </div>
            <Collapse in={refresh} timeout={900}>
            <div id="couponsShow" >

            <CouponBox coupons={couponss}/>

            </div>
            </Collapse>
        </div>
    );
}

export default Coupons;
