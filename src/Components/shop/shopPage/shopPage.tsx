import { Container, Grid, Typography } from "@mui/material";
import Coupons from "../../mainarea/coupons/coupons";
import "./shopPage.css";

function ShopPage(): JSX.Element {
    return (
        <Container maxWidth="xl" sx={{mt:"5%"}}>
            <Grid container spacing={1} sx={{display:"flex" , flexDirection:"column", alignContent:"center"}}>
                <Grid item xs={12} sm={12} >
                    <Typography variant="h4" style={{fontFamily:"Lora"}}>
                    Shop
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Coupons />
                </Grid>


            </Grid>

        </Container>
     
    );
}

export default ShopPage;
