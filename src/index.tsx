import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Components/mainarea/layout/layout';
import {Provider} from "react-redux"
import {store} from "./redux-state"
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


let persistor = persistStore(store);


root.render(
  <Provider store={store}>
  <PersistGate loading="wait" persistor={persistor}>
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>
  </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
