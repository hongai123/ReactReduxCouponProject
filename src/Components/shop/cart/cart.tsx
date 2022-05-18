import "./cart.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTypedSelector } from "../../../hooks/useTypedSelector";


function Cart(): JSX.Element {
    const [count, setCount] = React.useState(1);
    const [invisible, setInvisible] = React.useState(false);
    const {coupons} = useTypedSelector(state=>state.cartRed)

    React.useEffect(()=>{

    },[coupons])
  
    const handleBadgeVisibility = () => {
      setInvisible(!invisible);
    };
  
    return (

          <Badge badgeContent={coupons.length} invisible={false}>
              <ShoppingCartIcon  />
          </Badge>

    );
}

export default Cart;
