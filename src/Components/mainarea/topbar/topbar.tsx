import "./topbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from './Login';
import Logout from './Logout';
import { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

function Topbar(): JSX.Element {
  const {token,error, isLogged,role} = useTypedSelector((state)=>state.loginRed);
  const log = isLogged;
  const userRole= role;

  // const jwt = localStorage.getItem("token") 

  // useEffect(()=>{
  //   if(jwt){
  //     setUser(true);
  //   }else{
  //     setUser(false);
  //   }
  // })

  

 

    return (
        <div className="top">
          <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
          </div>
          <div className="topCenter">
            <ul className="topList">

              <li className="topListItem">
                <Link id="GFG" to = "/" >Home</Link>
              </li>

              <li className="topListItem">
              {userRole==="ADMIN"&&<Link className="link" id="GFG" color="white" to="/adminMenu">Admin-Menu</Link>}
              {userRole==="COMPANY"&&<Link className="link" id="GFG" color="white" to="/companyMenu">Company-Menu</Link>}
              {userRole==="CUSTOMER"&&<Link className="link" id="GFG" color="white" to="/customerMenu">Customer-Menu</Link>}

                {(!userRole) && <Link className="link" id="GFG" color="white" to="/coupons"> Coupons </Link>}
                      
                 
                
                  
              </li>

              <li className="topListItem">
                <Link id="GFG" to="/contact">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>

          <div className="topRight">
            <ul className="topList">

              {log ? <Logout /> : <Login />}
              <li>
                  <Link id="GFG" to="/cart" >
                  <ShoppingCartIcon></ShoppingCartIcon>
                  </Link>
              </li>
              
              

            </ul>
          
            <i className="topSearchIcon fas fa-search"></i>
          </div>
      </div>
    );
    
    
}

export default Topbar;
