import "./main.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Fade, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import SwipeableTextMobileStepper from "../../style-box/SwipeableTextMobileStepper";
import { fontFamily } from "@mui/system";
import sx from "@mui/system/sx";



function Main(): JSX.Element {
    return (
      <Fade in={true} timeout={1200} >

      <Container maxWidth="lg" sx={{mt:"7vh" , flexDirection:"column" , display:"flex"}}>

      <Grid container spacing={2} sx={{display:"flex" , flexDirection:"column"}}>

        <Grid item sm={12} xs={12} alignContent="center" sx={{mb:"5vh"}} >
          <CardMedia
          component="img"
          style={{width:"100%", maxHeight:"100%"}}
          image={require("../../../Assets/images/ticketLogoTry.png")}
          />

        </Grid>

        <Grid item sm={10} xs={10} sx={{ml:"8vw"}}>
         <Card sx={{ borderRadius:"10%" ,borderColor:"black" , width:"90%" }}>
            <CardMedia
              component="img"
              height="120"
              image= {require("../../../Assets/images/AboutUsBack.jpeg")}
            />
            <CardContent>
              <Typography  gutterBottom variant="h3" component="div" style={{fontFamily:"Lora"}}>
                 About Us
              </Typography>
              <Typography variant="body2" color="text.second" >
                our company was created in 2022 by Huy Nguyen and his three useless teammates. <br/>
                our company helps other companies sell coupons and improve their sales among the market drastically.<br/>
                we have a unique working technique which has been proven by our satisfied customers all over the world.<br/>
                We work with big companies such as Banana, Pbay, Sellpal and Fakebook. <br/>
                We highly recommend to join us for better shopping exprience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={24} xs={24} sx={{ ml:"8vw", maxHeight:"100%", width:"100%" , pb:"10%"}}>

        {/* <SwipeableTextMobileStepper/> */}

        </Grid>



      </Grid>
      </Container>
      </Fade>


    );
}

export default Main;
