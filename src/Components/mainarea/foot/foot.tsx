import "./foot.css";
import { Box,Container,Grid, Typography } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';

function Foot(): JSX.Element {



return(
<div className="SetBot">
    <Container maxWidth="lg">
        <Grid container spacing={2} sx={{display:"flex", flexDirection:"row", alignContent:"center"}}>
           

            <Grid item sm={6} xs={6}>
            <Typography variant="body1" style={{fontSize:"0.7rem"}}>
            <CopyrightIcon fontSize="small"/>  
                                                H.E.T.I COMPANY
            </Typography> 
            </Grid>




        </Grid>
    </Container>
</div>
)

}

export default Foot;
