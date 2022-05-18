import "./topbar.css";
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button,IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useActionOnCart, useActionOnCustomer, useActions } from "../../../hooks/useActions";
import { useEffect } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import { useTypedSelector } from "../../../hooks/useTypedSelector";


function Logout (){
    const nav = useNavigate();
    const useAction = useActions();
    const [log,setLog] = React.useState(false)
    const {CustomerDeleteCoupons} = useActionOnCustomer();
    const useCart = useActionOnCart();

useEffect(()=>{
  nav("/")
  console.log("lol")

},[log])




    const onClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        CustomerDeleteCoupons();
        useCart.LoggingOut();
        useAction.logMeOut();
        nav("/")
       
    }


    return (
        <li className="topListItem">
            {/* <Button
            type="submit"
            onClick={onClick}
>
             LogOut
</Button> */}


<IconButton aria-label="delete" type="submit" onClick={onClick}> 
    <LogoutIcon sx={{color:"white", position:"absolute"}}></LogoutIcon>
</IconButton>

        </li>
    );
}

export default Logout;