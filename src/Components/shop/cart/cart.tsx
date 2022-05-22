import "./cart.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Badge,{BadgeProps} from '@mui/material/Badge';
import { styled, useTheme } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Container, Divider, Drawer, Grid, IconButton, Typography } from "@mui/material";
import ChevronRight from "@mui/icons-material/ChevronRight";
import CouponTable from "../../style-box/couponsTable/couponsTable";

const drawerWidth = "30%";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));



const DrawerHeader = styled('div')(({ theme }) => ({

}));




function Cart(): JSX.Element {
    const [count, setCount] = React.useState(1);
    const [invisible, setInvisible] = React.useState(false);
    const {coupons} = useTypedSelector(state=>state.cartRed)
    const [open, setOpen] = React.useState(false);

    React.useEffect(()=>{

    },[coupons])
  
    const handleBadgeVisibility = () => {
      setInvisible(!invisible);
    };

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <Container disableGutters maxWidth={false} sx={{ml:"1%"}}>
        <Grid container spacing={0} sx={{display:"flex" , flexDirection:"row"}}>

        <Grid item xs={12} sm={12}  >
        <IconButton sx={{display:"flow", padding:0 }} onClick={handleDrawerOpen} >
          <Badge badgeContent={coupons.length} invisible={false} sx={{color:"white"}}>
              <ShoppingCartIcon sx={{color:"white"}}  />
          </Badge>
        </IconButton>
        </Grid>

        <Grid item xs={12} sm={12} >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >

        <DrawerHeader>  
          <IconButton onClick={handleDrawerClose}>
             <ChevronRight/>
          </IconButton>
        </DrawerHeader>
        <Divider/>
        
        <DrawerHeader>
          <CouponTable coupons={coupons}/>
        </DrawerHeader>

      </Drawer> 
      </Grid>


      </Grid>

      </Container>


    );
}

export default Cart;
