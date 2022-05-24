import "./couponBox.css";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CouponModel } from "../../model/couponModel/couponModel";
import BasicModalCoupon from "../basicModalCoupon/basicModalCoupon";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom"
import BuyCoupon from "../../mainarea/customer/actions/buyCoupon/buyCoupon";
import AddToCartButton from "../../shop/addToCart/addToCart";





interface CouponProps{
    coupons:CouponModel[]
    compare?:CouponModel[]
    onClick?: ()=>void
}

function CouponBox(props:CouponProps): JSX.Element {
    const {role} = useTypedSelector(state=>state.loginRed)
    const nav = useNavigate();


    


    

    return (
        <Container sx={{ py: 10 }} maxWidth="xl">
        {/* End hero unit */}
        <Grid container spacing={6} sx={{color:"black"}}>
          {props.coupons.map((coupon) => (
            <Grid item key={coupon.coupon_id} xs={12} sm={12} md={4} xl={2.4} lg={3} >
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
                <CardContent sx={{ flexGrow: 20 , height:115 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {coupon.title}
                  </Typography>
                  <Typography>
                    {coupon.description}
                  </Typography>
                  <Typography sx={{position:"absolute"}}>
                    price: {coupon.price}
                  </Typography>

                </CardContent>
                <CardActions sx={{position:"relative"}}>
                  {role==="CUSTOMER"? props.compare?.find(c=>c.coupon_id === coupon.coupon_id)?<Button size="small" sx={{mr:1,ml:1}}> purchased </Button>:<BuyCoupon couponProp={coupon}/> :(role==="COMPANY" || role === "ADMIN" ? "":<Button size="small" onClick={()=>nav("/login")}>TO BUY</Button>)}
                  <BasicModalCoupon coupons={coupon} buttonInfo="More"/>
                  
                  {/* WE WILL ADD HERE A FUNCTION THAT WILL RECIEVE A COUPON AND IT WILL ADD IT TO THE CART, WE WILL HAVE TO CREATE "ADDTOCART FUNCTION WHICH ACCEPT COUPON" */}
                  {role==="CUSTOMER"&&<AddToCartButton coupon={coupon}  />}
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
