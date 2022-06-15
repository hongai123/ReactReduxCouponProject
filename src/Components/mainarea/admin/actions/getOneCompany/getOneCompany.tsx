import "./getOneCompany.css";
import { CompanyModel } from "../../../../model/companyModel/companyModel";
import CompanyTable from "../../../../style-box/companyTable/companyTable";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import ErrorMessage from "../../../../popupMessages/errorMessage/errorMessage";
import { Box, Collapse } from "@mui/material";
import { TextField } from "@mui/material";
import { Container, Typography, Grid } from '@mui/material';



function GetOneCompany(): JSX.Element {
    const {token,error} = useTypedSelector(state=>state.loginRed);
    const [companies,setCompanies] = useState<CompanyModel[]>([]);
    const [oneCompany,setOneCompany] = useState<CompanyModel[]>([]);
    const [isLoad,setLoad] = useState<boolean>(false);
    const [isError,setError] = useState(false);
    const [myError,setMyError] = useState("")
    const [collapse,setCollapse] = useState(false);
    const [getOneCompany,setGetOneCompany] = useState(false);
    const [singleCid,setSingleID] = useState(0);
    const [collapse2,setCollapse2] = useState(false);

    //get one Company
useEffect(()=>{
 
},[getOneCompany])

useEffect(()=>{

},[collapse2])

const handleOneCompany = ()=>{
    const url = `http://localhost:8080/admin/getCompanyByID/${singleCid}`

    axios.get(url,{
        headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': token ? token : "Bearer error"    
    }
    }).then((response)=>{
        console.log(response)
        setOneCompany([...[],response.data]);
        console.log(oneCompany)
        if(response.data){
            setCollapse2(true)
            setGetOneCompany(true);
        }
    
    }).catch((error:AxiosError)=>{
        const err = error.response?.request.responseText
        const errMessage = JSON.stringify(err);
        console.log(errMessage)
        setCollapse2(false)
        setMyError(errMessage)
        
        setError(true);
    
    })
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(grey[800]),
    backgroundColor: grey[800],
    '&:hover': {
      backgroundColor: grey[600],
      
    },
  }));






    return (
        <Container maxWidth="lg" sx={{display:"flex" , flexDirection:"column" , alignContent:"center"}}>

        <Grid container spacing={2} sx={{display:"flex" , flexDirection:"column"}}>
            <Box sx={{borderTop:1 ,borderColor:"divider"}}/>

        <Grid item xs={12} sm={12} sx={{mb:"3%"}}>
        <Typography variant="h3" style={{fontFamily:"Lora"}} >Find Single Company</Typography>
        </Grid>

        <Grid item xs={12} sm={12} sx={{mb:"0"}}>
        <Typography variant="body1" style={{fontFamily:"Lora"}} >Please enter company ID</Typography>
        </Grid>

        <Grid item xs={12} sm={12} sx={{mb:"3%"}}>

        <Box>
        <TextField
                required
                className="inputRounded"
                type="number"
                id="id"
                label="id"
                placeholder="id"
                value={singleCid}
                onChange={ (e) => { setSingleID(Number(e.target.value)) } }
            />
            <br/>
            <br/>
        <ColorButton onClick={handleOneCompany}>get one company</ColorButton>
        <br/>
        <br/>
        <ColorButton onClick={()=>setCollapse2(false)}>close</ColorButton>

        <br/>
        <br/>

        <div>
        <Collapse in={collapse2}>
            <div>
			<CompanyTable company={oneCompany}/>
            </div>
        </Collapse>
        </div>
        </Box>

    </Grid>

        <ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>

        </Grid>


</Container>

    );
}

export default GetOneCompany;
