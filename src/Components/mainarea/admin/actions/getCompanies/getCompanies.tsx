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
import { TextField } from "@mui/material";
import { Container, Typography, Grid } from '@mui/material';




function GetCompanies(): JSX.Element {
const {token,error} = useTypedSelector(state=>state.loginRed);
const [companies,setCompanies] = useState<CompanyModel[]>([]);
const [isLoad,setLoad] = useState<boolean>(false);
const [isError,setError] = useState(false);
const [myError,setMyError] = useState("")
const [collapse,setCollapse] = useState(false);




 //get all companies
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

    setMyError(errMessage)
    
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
        <Container maxWidth="lg" sx={{display:"flex" , flexDirection:"column" , alignContent:"center"}}>

        <Grid container spacing={2} sx={{display:"flex" , flexDirection:"column" , mb:"10%"}}>

        <Grid item xs={12} sm={12} sx={{mb:"3%"}}>
        <Typography variant="h3" style={{fontFamily:"Lora"}} >Look At Your Companies</Typography>
        </Grid>
        <Grid item xs={12} sm={12} sx={{mb:"3%"}}>
        <div id="thisButton" className="getCompanies">


            <ColorButton
            onClick={()=>{    
            setCollapse(!collapse)
            setLoad(!isLoad)

        }}>Show Companies</ColorButton>
                </div>


            <Collapse in={collapse}>
            <div id="CompanyTable" >
			<CompanyTable company={companies}/>
            </div>
        </Collapse>
        </Grid>


        
        <ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>



            
                
        </Grid>


        </Container>
    );
}

export default GetCompanies;
