import "./layout.css";
import { BrowserRouter } from "react-router-dom";
import Topbar from "../topbar/topbar";
import Routing from "../../routes/routing/routing";
import {Provider} from "react-redux"
import {store} from "../../../redux-state"
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';



let persistor = persistStore(store);




function Layout(): JSX.Element {
    return <Provider store={store}>
                    <PersistGate persistor={persistor}>



        <BrowserRouter>
        
        <div className="layout">
            <header>
                <Topbar/>
            </header>

            <main>

            <Routing/>

            </main>

        </div>
        </BrowserRouter>
        </PersistGate>

        </Provider>
    
    
}

export default Layout;
