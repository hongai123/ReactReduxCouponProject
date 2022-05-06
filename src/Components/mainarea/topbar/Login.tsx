import "./topbar.css";
import * as React from 'react';
import { Link } from 'react-router-dom';

function Login() : JSX.Element  {
    return (      
        <React.Fragment>
            <li className="topListItem">
                <Link id="GFG" className="link" to="/login">
                Login
                </Link>
            </li>
            <li className="topListItem">
                <Link id="GFG" className="link" to="/register">
                Register
                </Link>
            </li>
        </React.Fragment>
    );
}

export default Login;