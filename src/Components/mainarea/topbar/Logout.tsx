import "./topbar.css";
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button,IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useEffect } from "react";
import LogoutIcon from '@mui/icons-material/Logout';


function Logout (){
    const nav = useNavigate();
    const useAction = useActions();
    const some = localStorage.getItem("token")

// useEffect(()=>{
//   nav("/")
// },[some])


const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //const data = new FormData(event.currentTarget);
    
    
  
  };

    const onClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        
          console.log("lol")
        useAction.logMeOut();
        
       
    }


    return (
        <li className="topListItem">
            <form onSubmit={handleSubmit}>
            {/* <Button
            type="submit"
            onClick={onClick}
>
             LogOut
</Button> */}


<IconButton aria-label="delete" type="submit" onClick={onClick}> 
    <LogoutIcon sx={{color:"white", position:"absolute"}}></LogoutIcon>
</IconButton>
</form>

        </li>
    );
}

export default Logout;