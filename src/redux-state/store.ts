import thunk from "redux-thunk"
import reducers from "./reducers"
import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import loginReducer from "./reducers"
import { createStore } from "redux";


const persistConfig ={
  key:'root',
  storage
}

const persistedReducer = persistReducer(persistConfig,reducers );

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
})






