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
import { Collapse, Container , Grid } from "@mui/material";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface couponsToCompareProps{
    couponsCompare?:CouponModel[];
    onClick?:()=>void;
}

function Coupons(props:couponsToCompareProps): JSX.Element {
    const url = "http://localhost:8080/guest/allAvailableCoupons"
    const [couponss,setCoupons] = useState<CouponModel[]>([])
    const [refresh,setRefresh] = useState(false);
    const {coupons} = useTypedSelector(state=>state.couponsReducer);

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setCoupons(response.data);
            console.log(coupons)
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
        <Container maxWidth="lg" sx={{mt:"5%"}}>

            <Grid container spacing={2} sx={{display:"flex", flexDirection:"column"}}>


                <Grid item xs={12} sm ={12}>    

                <ColorButton  onClick={()=>{
                    setRefresh(!refresh);

                }}>Show Coupons</ColorButton>
                <Collapse in={refresh} timeout={900}>

                <CouponBox coupons={couponss} compare={coupons} onClick={props.onClick}/>

                </Collapse>
                </Grid>    


            </Grid>
        </Container>
    );
}

export default Coupons;
