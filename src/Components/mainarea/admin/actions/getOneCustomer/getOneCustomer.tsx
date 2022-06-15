import "./getOneCustomer.css";
import CompanyTable from "../../../../style-box/companyTable/companyTable";
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
import { Box } from "@mui/material";
import { customerModel } from "../../../../model/customerModel/customerModel";
import CustomerTable from "../../../../style-box/customerTable/customerTable";
import { Container, Typography, Grid } from '@mui/material';



function GetOneCustomer(): JSX.Element {
    const {token,error} = useTypedSelector(state=>state.loginRed);
    const [oneCustomer,setOneCustomer] = useState<customerModel[]>([]);
    const [isError,setError] = useState(false);
    const [myError,setMyError] = useState("")
    const [getOneCustomer,setGetOneCustomer] = useState(false);
    const [singleCid,setSingleID] = useState(0);
    const [collapse2,setCollapse2] = useState(false);

        //get one Company
useEffect(()=>{
 
},[getOneCustomer])

useEffect(()=>{

},[collapse2])

const handleOneCompany = ()=>{
    const url = `http://localhost:8080/admin/get-one-customer/${singleCid}`

    axios.get(url,{
        headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': token ? token : "Bearer error"    
    }
    }).then((response)=>{
        console.log(response)
        setOneCustomer([...[],response.data]);
        console.log(oneCustomer)
        if(response.data){
            setCollapse2(true)
            setGetOneCustomer(true);
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
        <Typography variant="h3" style={{fontFamily:"Lora"}} >Find Single Customer</Typography>
        </Grid>

        <Grid item xs={12} sm={12} sx={{mb:"0"}}>
        <Typography variant="body1" style={{fontFamily:"Lora"}} >Please enter customer ID</Typography>
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
        <ColorButton onClick={handleOneCompany}>get one customer</ColorButton>
        <br/>
        <br/>
        <ColorButton onClick={()=>setCollapse2(false)}>close</ColorButton>

        <br/>
        <br/>

        <div>
        <Collapse in={collapse2}>
            <div>
                <CustomerTable customer = {oneCustomer}/>
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

export default GetOneCustomer;
