import "./main.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Fade } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import SwipeableTextMobileStepper from "../../style-box/SwipeableTextMobileStepper";
import { fontFamily } from "@mui/system";



function NoLongerMain(): JSX.Element {
    return (
      <Fade in={true} timeout={1200} >
      <Container>
      <Grid>
      <Box>

        
        <div>
          <Box className="centerMe"  sx={{pb:"3vh" , pt:"8vh"}}>

          <CardMedia
          component="img"
          style={{width:"auto", maxHeight:"250px"}}
          sx={{display:"flex" , flexDirection:"column" , alignItems:"center"   }}
          
          image={require("../../../Assets/images/ticketLogoTry.png")}
          />
        </Box>

       

        {/* <img
          className="headerImg"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        /> */}
        <Box className="centerMe"   sx={{pb:"20vh", pt:"5vh" }}>
        <Card sx={{ position:"absolute" , borderRadius:"20%" ,borderColor:"black" }}>
        <CardMedia
          component="img"
          height="120"
          image= {require("../../../Assets/images/AboutUsBack.jpeg")}
        />
        <CardContent>
          <Typography  gutterBottom variant="h5" component="div">
              <h3  className="headerTitles">About Our Company</h3>
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
    </Box>



{/* 
<Box
      sx={{
        position:"absolute",
        width: "47%" ,
        height: "47%",
        backgroundColor:"#1d1d1f" 
       
      }}
    >

        <h3 className="headerTitlesWhite">Huy</h3>
    </Box>


<Box
      sx={{
        width: "47%",
        height: "47%",
        backgroundColor:"white" 
       
      }}
    >      
       <h3 className="headerTitlesBlack">Itzik</h3>
    </Box>


<Box
      sx={{
        width: "47%",
        height: "47%",
        backgroundColor:"white",
        position:"absolute",
        top:"75%",
        left:"5%"
       
      }}
    >
                <h3 className="headerTitles">Tomer</h3>

    </Box>



<Box
      sx={{
        position:"relative",
        width: "47%",
        height: "47%",
        backgroundColor:"#1d1d1f" ,
        top:"125%",
        left:"5%"
       
      }}
    >
                <h3 className="headerTitlesWhite">Emanuel</h3>


    </Box> */}


    <Grid className="centerMe" sx={{pt:"10%"}} >
      <Box className="centerMe" sx={{pt:"10%"}}>
    {/* <SwipeableTextMobileStepper/> */}
     </Box>
    </Grid>
        

      </div>
      </Box>
      </Grid>
      </Container>
      </Fade>

    );
}

export default NoLongerMain;
