import thunk from "redux-thunk"
import reducers from "./reducers"
import { configureStore } from "@reduxjs/toolkit";
import { persistCombineReducers, persistStore } from 'redux-persist';
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
const persistConfig ={
  key:'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
})




