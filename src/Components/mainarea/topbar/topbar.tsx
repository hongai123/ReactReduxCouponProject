import "./topbar.css";
import { Link } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Cart from "../../shop/cart/cart";


function Topbar(): JSX.Element {
  const globalState= useTypedSelector((state)=>state.loginRed);
  const userRole = globalState.role
  let isLogged = false;
  

  useEffect(()=>{
    isLogged = true;

  })

    return (

        <div className="top">
         
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

              {userRole === "CUSTOMER"&&<li className="topListItem">
                <Link id="GFG" to="/shop">
                  Shop
                </Link>
              </li>}
              
            </ul>
          </div>

          <div className="topRight">
            <ul className="topList">

              <li className="topList">
             {globalState.isLogged ? <Logout /> : <Login />}
             </li>
              {userRole==="CUSTOMER"&&
              <li className="topListItem">

                  <Cart/>

              </li>
              }
              
              

            </ul>
          
            <i className="topSearchIcon fas fa-search"></i>
          </div>
      </div>
    );
    
    
}

export default Topbar;
