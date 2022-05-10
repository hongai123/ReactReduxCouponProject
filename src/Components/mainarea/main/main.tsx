import "./main.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';


function Main(): JSX.Element {
    return (
        <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">All You Ever Wanted</span>
          <span className="headerTitleLg">Heti Coupons</span>        
        </div>

       

        {/* <img
          className="headerImg"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        /> */}
        <div className="aboutCoupons">
        <Card sx={{ maxWidth: "47%" , position:"relative" }}>
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              <h3 className="headerTitles">About Our Company</h3>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            our company was created in 2022 by Huy Nguyen and his three useless teammates. <br/>
            our company helps other companies sell coupons and improve their sales among the market drastically.<br/>
            we have a unique working technique which has been proven by our satisfied customers all over the world.<br/>
            We work with big companies such as Banana, Pbay, Sellpal and Fakebook. <br/>
            We highly recommend to join us for better shopping exprience.
          </Typography>
        </CardContent>
    </Card>
</div>


<div className="huy">
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

</div>

<div className="itzik">
<Box
      sx={{
        width: "47%",
        height: "47%",
        backgroundColor:"white" 
       
      }}
    >      
       <h3 className="headerTitlesBlack">Itzik</h3>
    </Box>

</div>

<div className="tomer">
<Box
      sx={{
        width: "47%",
        height: "47%",
        backgroundColor:"white" 
       
      }}
    >
                <h3 className="headerTitles">Tomer</h3>

    </Box>

</div>


<div className="emanuel">
<Box
      sx={{
        width: "47%",
        height: "47%",
        backgroundColor:"#1d1d1f" 
       
      }}
    >
                <h3 className="headerTitlesWhite">Emanuel</h3>


    </Box>

</div>
        <hr className="new4"/>
        

      </div>
    );
}

export default Main;
