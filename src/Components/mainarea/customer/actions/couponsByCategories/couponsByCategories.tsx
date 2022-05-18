import "./couponsByCategories.css";
import { useState } from "react";
import { CouponModel } from "../../../../model/couponModel/couponModel";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import CouponBox from "../../../../style-box/couponBox/couponBox";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import ErrorMessage from "../../../../popupMessages/errorMessage/errorMessage";
import { Box, Collapse } from "@mui/material";
import { TextField } from "@mui/material";
import { Container, Typography, Grid } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";


function CouponsByCategory(): JSX.Element {
    const [couponss,setCoupons] = useState<CouponModel[]>([])
    const {token} = useTypedSelector((state)=>state.loginRed);
    const [isError,setError] = useState(false);
    const [myError,setMyError] = useState("")
    const [collapse,setCollapse] = useState(false);
    const [categoryID,setCategoryID] = useState(0);

    
    useEffect(()=>{
       
    },[couponss])

    useEffect(()=>{
        console.log(isError)
    },[isError])
    
    useEffect(()=>{
    
    },[collapse])

    const handleClick = ()=>{
        const url = `http://localhost:8080/customer/couponsCategory/${categoryID}`

        axios.get(url,{
            headers:{
                Authorization: token?token:"Bearer error"
            }
        }).then((response)=>{
            setCoupons(response.data);
            
    
        }).catch((error:AxiosError)=>{
            console.log(error)
            const err = error.response?.request.responseText
            const errMessage = JSON.stringify(err);
            setCoupons([])
            console.log(errMessage)
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

        <Grid item xs={12} sm={12}>
        <Typography variant="h3" style={{fontFamily:"Lora"}} >Show Coupon By Category</Typography>
        </Grid>

        <Grid item xs={12} sm ={12}>
        

        <div className="coupons">

        <ColorButton             sx={{mb:"1%"}}
 onClick={()=>{    
            setCollapse(!collapse)
            setCategoryID(0)

        }}>SHOW COUPONS BY CATEGORY</ColorButton>

</div>

        

<Collapse in={collapse} timeout={900}>
    <FormControl   sx={{ml:"0.4vw" ,  mt:"0.8%", width:"19%", mr:"0.7%"}} >
        <InputLabel  className="inputRounded" id="demo-simple-select-label"> Category </InputLabel>

            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                placeholder="Category"
                value={categoryID}
                onChange = {(e)=>{setCategoryID(Number(e.target.value))}}
                sx={{borderRadius:"15px", mt:"1%" , mb:"1%" , fontSize:"0.8rem"}}
            
            >
              <MenuItem value={"1"}>CARS</MenuItem>
              <MenuItem value={"2"}>PAINTING</MenuItem>
              <MenuItem value={"3"}>WHEELS</MenuItem>
              <MenuItem value={"4"}>YACHT</MenuItem>
              <MenuItem value={"5"}>MOTORCYCLE</MenuItem>
            </Select>
            <ColorButton onClick={handleClick}>submit</ColorButton>
     </FormControl>

     {couponss&&<CouponBox coupons={couponss}/>}


</Collapse>
</Grid>


<ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>

</Grid>


</Container>

    );
}

export default CouponsByCategory;
