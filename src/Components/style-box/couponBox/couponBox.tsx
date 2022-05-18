import "./couponBox.css";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { CouponModel } from "../../model/couponModel/couponModel";
import Box from '@mui/material/Box';
import BasicModalCoupon from "../basicModalCoupon/basicModalCoupon";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom"
import { customerModel } from "../../model/customerModel/customerModel";
import BuyCoupon from "../../mainarea/customer/actions/buyCoupon/buyCoupon";






interface CouponProps{
    coupons:CouponModel[]
    compare?:CouponModel[]
}

function CouponBox(props:CouponProps): JSX.Element {
    const {role} = useTypedSelector(state=>state.loginRed)
    const theme = createTheme();
    const nav = useNavigate();




    return (
        <Container sx={{ py: 10 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={6} sx={{color:"black"}}>
          {props.coupons.map((coupon) => (
            <Grid item key={coupon.coupon_id} xs={20} sm={20} md={4} >
              <Card
                sx={{ height: '100%', display:"flow", flexDirection: 'column' }}
              > 
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    height:"40%",
                    paddingTop:"0%",
                    paddingBottom:"12%"
                    
                  }}
                  image={coupon.image}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 20 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {coupon.title}
                  </Typography>
                  <Typography>
                    {coupon.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{position:"relative"}}>
                  {role==="CUSTOMER"? props.compare?.find(c=>c.coupon_id === coupon.coupon_id)?<Button size="small">purchased</Button>:<BuyCoupon couponProp={coupon}/> :(role==="COMPANY" || role === "ADMIN" ? "":<Button size="small" onClick={()=>nav("/login")}>TO BUY</Button>)}
                  <BasicModalCoupon coupons={coupon} buttonInfo="More"/>
                </CardActions>
              </Card>
            </Grid>
          ))
          }


        </Grid>
      </Container>
          );
}

export default CouponBox;
