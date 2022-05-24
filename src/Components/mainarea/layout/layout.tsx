import "./layout.css";
import { BrowserRouter } from "react-router-dom";
import Topbar from "../topbar/topbar";
import Routing from "../../routes/routing/routing";
import {Provider} from "react-redux"
import {store} from "../../../redux-state"
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Foot from "../foot/foot";


function Layout(): JSX.Element {
 


    return (
 


        <BrowserRouter>
            
        
        <div className="layout">
            <header>
                <Topbar/>
            </header>

            <main>

            <Routing/>

            </main>

            <footer>
                <Foot/>
            </footer>

        </div>
        
        </BrowserRouter>
   
    )
    
    
}

export default Layout;
