import "./customerDetails.css";
import axios, { AxiosError } from "axios";
import {useState, useEffect} from "react";
import { customerModel } from "../../../../model/customerModel/customerModel";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { Box, TextField } from "@mui/material";
import ErrorMessage from '../../../../popupMessages/errorMessage/errorMessage';
import CustomerCoupons from "../customerCoupons/customerCoupons";
import CustomerTable from "../../../../style-box/customerTable/customerTable";



function CustomerDetails(): JSX.Element {
const [customer,setCustomer] = useState<customerModel[]>([])
const {token} = useTypedSelector(state=>state.loginRed);
const [load,setLoad] = useState(false)
const [isError,setError] = useState(false);
const [myError,setMyError] = useState("")

useEffect(()=>{
    const url = "http://localhost:8080/customer/customerDetails"
    axios.get(url,{
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': token ? token : "Bearer error"
        }
    }).then((response)=>{
        setCustomer([...[],response.data])
        setLoad(true);


    }).catch((error:AxiosError)=>{
        console.log(error)
        const err = error.response?.request.responseText
        const errMessage = JSON.stringify(err);
        console.log(errMessage)
        setMyError(errMessage)           
        setError(true);
        setLoad(false)
    })
},[load])


    return (
        <div className="customerDetails">

        <CustomerTable customer={customer} />
            
        </div>
    );
}

export default CustomerDetails;
