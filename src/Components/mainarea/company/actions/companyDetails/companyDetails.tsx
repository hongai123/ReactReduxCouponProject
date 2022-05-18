import "./companyDetails.css";
import axios, { AxiosError } from "axios";
import {useState, useEffect} from "react";
import { CompanyModel } from "../../../../model/companyModel/companyModel";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { Box, TextField } from "@mui/material";
import ErrorMessage from '../../../../popupMessages/errorMessage/errorMessage';
import { Container,Grid,Typography } from "@mui/material";
import CompanyTable from "../../../../style-box/companyTable/companyTable";


function CompanyDetails(): JSX.Element {
const [company,setCompany] = useState<CompanyModel[]>([])
const {token} = useTypedSelector(state=>state.loginRed);
const [load,setLoad] = useState(false)
const [isError,setError] = useState(false);
const [myError,setMyError] = useState("")

useEffect(()=>{
    const url = "http://localhost:8080/company/getCompanyDetails"
    axios.get(url,{
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': token ? token : "Bearer error"
        }
    }).then((response)=>{
        setCompany([...[],response.data])
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
        <div>

        <CompanyTable company={company}/>
        <ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>


        </div>

    );
}

export default CompanyDetails;
