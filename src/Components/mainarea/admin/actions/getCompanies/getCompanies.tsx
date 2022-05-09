import { CompanyModel } from "../../../../model/companyModel/companyModel";
import CompanyTable from "../../../../style-box/companyTable/companyTable";
import "./getCompanies.css";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import ErrorMessage from "../../../../popupMessages/errorMessage/errorMessage";
import { Collapse } from "@mui/material";



function GetCompanies(): JSX.Element {
const {token,error} = useTypedSelector(state=>state.loginRed);
const [companies,setCompanies] = useState<CompanyModel[]>([]);
const [isLoad,setLoad] = useState<boolean>(false);
const [isError,setError] = useState(false);
const [myError,setMyError] = useState("")
const [collapse,setCollapse] = useState(false);
 
useEffect(()=>{
const url ="http://localhost:8080/admin/allCompanies";
axios.get(url,{
    headers:{
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Authorization': token ? token : "Bearer error"    
}
}).then((response)=>{
    console.log(response)
    setCompanies(response.data)
    console.log(companies)
    if(response.data){
        setLoad(true);
    }

}).catch((error:AxiosError)=>{
    const err = error.response?.request.responseText
    const errMessage = JSON.stringify(err);
    console.log(errMessage)

    setMyError(errMessage.slice(22,66)
    )
    
    setError(true);

})
},[isLoad,token])



useEffect(()=>{
    console.log(isError)
},[isError])

useEffect(()=>{

},[collapse])

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(grey[800]),
    backgroundColor: grey[800],
    '&:hover': {
      backgroundColor: grey[600],
      
    },
  }));

    return (
        <div id="thisButton" className="getCompanies">
            <ColorButton onClick={()=>{    
            setCollapse(!collapse)
            setLoad(!isLoad)

        }}>Show Companies</ColorButton>


            <Collapse in={collapse}>
            <div id="CompanyTable" >
			<CompanyTable company={companies}/>
            </div>
        </Collapse>
        <ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>


            
        </div>
    );
}

export default GetCompanies;
