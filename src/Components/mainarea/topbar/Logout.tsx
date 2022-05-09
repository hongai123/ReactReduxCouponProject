import "./topbar.css";
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button,IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useEffect } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import { useTypedSelector } from "../../../hooks/useTypedSelector";


function Logout (){
    const nav = useNavigate();
    const useAction = useActions();
    const [log,setLog] = React.useState(false)

useEffect(()=>{
  nav("/")

},[log])




    const onClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        useAction.logMeOut();
        setLog(!log)
       
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