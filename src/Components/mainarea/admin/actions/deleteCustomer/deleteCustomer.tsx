import "./deleteCustomer.css";
import { Box,TextField,Button } from "@mui/material";
import {useEffect, useState} from "react"
import axios, { AxiosError } from "axios"
import {useTypedSelector} from "../../../../../hooks/useTypedSelector"
import SuccsessMessage from "../../../../popupMessages/succsessMessage/succsessMessage";
import ErrorMessage from "../../../../popupMessages/errorMessage/errorMessage";
import { Container,Grid,Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

interface customerDeleteProps{
    id: number
}

function DeleteCustomer(): JSX.Element {
 const[customerId,setCustomerId] = useState(0);
 const {token} = useTypedSelector(state=> state.loginRed);
 const [isSuccesses, setIsSuccesses] = useState(false)
 const [sucMessage, setSucMessage] = useState("");
 const [isLoad,setLoad] = useState<boolean>(false);
 const [isError,setError] = useState(false);
 const [myError,setMyError] = useState("")

 useEffect(()=>{

},[isSuccesses])
useEffect(()=>{

},[isError])

const onClickHandle = ()=>{
    const url = `http://localhost:8080/admin/deleteCustomer/${customerId}`

    axios.delete(url,{
        headers:{
            'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': token ? token : "Bearer error"

        }
    })
    .then((response)=>{
        if(response.status == 200)
        setIsSuccesses(true)
        setSucMessage("Customer Deleted!")
            }).catch((error:AxiosError) => {
        const err = error.response?.request.responseText
        const errMessage = JSON.stringify(err);
        console.log(errMessage)
        setMyError(errMessage)
        setError(true);     })

}


    return (
        <Container maxWidth="lg" sx={{display:"flex" , flexDirection:"column" , alignContent:"center"}}>

        <Grid container spacing={2} sx={{display:"flex" , flexDirection:"column"}}>

        <Grid item xs={12} sm={12}>
        <Typography variant="h3" style={{fontFamily:"Lora"}} >Delete Customer</Typography>
        </Grid>

        <Grid item xs={12} sm ={12}>

        
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <br/>
                <TextField
                className="inputRounded"
                required
                type="number"
                id="customerID"
                label="ID"
                placeholder="CUSTOMER ID"
                value={customerId}
                onChange={ (e) => { setCustomerId(Number(e.target.value))}}
            />
            <br/>
            <Button sx={{ml:"1vw" , mt:"5vh"}} style={{borderRadius:"15px"}} variant="contained" onClick={onClickHandle} >
                submit
            </Button>
            </Box>

            <Box 
         className='SomeInfo'
         width="100%"
         height="50%"
         sx={{
            borderLeft:1,
            borderColor:"divider"
        }}>
        <Typography variant="body1" style={{fontFamily:"Lora"}} className='SomeInfoText' >
            <ClearIcon fontSize="large"/>
            <br/>
             Welcome to the place where we Delete Customers :)
        </Typography>
        </Box>
        </Grid>



            <SuccsessMessage isSuccesses={isSuccesses} sucMessage={sucMessage} onClickHandle={()=>setIsSuccesses(false)}/>
            <ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>

                                        
        </Grid>


</Container>
    );
}

export default DeleteCustomer;
