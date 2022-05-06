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


import { CouponModel } from "../../model/couponModel/couponModel";

interface CouponProps{
    coupons:CouponModel[]
}

function CouponBox(props:CouponProps): JSX.Element {
    const theme = createTheme();
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4} sx={{color:"black"}}>
          {props.coupons.map((coupon) => (
            <Grid item key={coupon.coupon_id} xs={10} sm={6} md={4} color="black" >
              <Card
                sx={{ height: '100%', display:"flow", flexDirection: 'column' }}
              > 
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: '2.25%',
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {coupon.title}
                  </Typography>
                  <Typography>
                    {coupon.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Buy</Button>
                  <Button size="small">More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
          );
}

export default CouponBox;
