import "./updateCompany.css";


import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios, { AxiosError } from "axios";
import { CouponModel } from "../../../../model/couponModel/couponModel";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import SuccsessMessage from "../../../../popupMessages/succsessMessage/succsessMessage";
import ErrorMessage from "../../../../popupMessages/errorMessage/errorMessage";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Container, Typography, Grid } from '@mui/material';

function UpdateCoupon(): JSX.Element {
    
    const {token} = useTypedSelector((state)=>state.loginRed);
    const [amount, setAmount] = useState(0)
    const [categoryId, setCategoryId] = useState(0)
    const [companyId, setCompanyId] = useState(0)
    const [couponId, setCouponId] = useState(0)
    const [description, setDescription] = useState("")
    const [endDate, setEndDate] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState(0)
    const [startDate, setStartDate] = useState("")
    const [title, setTitle] = useState("")
    const [isSuccesses, setIsSuccesses] = useState(false)
    const [sucMessage, setSucMessage] = useState("");
    const [isLoad,setLoad] = useState<boolean>(false);
    const [isError,setError] = useState(false);
    const [myError,setMyError] = useState("");

    const url = "http://localhost:8080/company/updateCoupon"

    const handleClick = () => {
        const user: CouponModel = {
            amount: amount,
            category_id_bynum: categoryId,
            companyId: companyId,
            coupon_id: couponId,
            description: description,
            end_date: endDate,
            image: image,
            price: price,
            start_date: startDate,
            title: title,
            categoryString:"CARS",
            company_string:""

        };

        axios.put(url, user, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': token ? token : "Bearer error"
            }
        }).then((resp) => {

            if(resp.status == 202)
            setIsSuccesses(true)
            setSucMessage("Coupon Updated!")
                }).catch((error:AxiosError) => {
                    const err = error.response?.request.responseText
                    const errMessage = JSON.stringify(err);
                    console.log(errMessage)
                    setMyError(errMessage)
                    
                    setError(true);   
            
        })
    }

    return (
        <Container maxWidth="lg" sx={{display:"flex" , flexDirection:"column" , alignContent:"center"}}>

        <Grid container spacing={2} sx={{display:"flex" , flexDirection:"column"}}>

        <Grid item xs={12} sm={12}>
        <Typography variant="h3" style={{fontFamily:"Lora"}} >Update Coupon</Typography>
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
                <br/> <TextField
                required
                className="inputRounded"
                id="title"
                label="Title"
                placeholder="Title"
                value={title}
                onChange={ (e) => { setTitle(e.target.value) } }
            />
               <TextField
                required
                className="inputRounded"
                type="number"
                id="amount"
                label="Amount"
                placeholder="Amount"
                value={amount}
                onChange={ (e) => { setAmount(Number(e.target.value)) } }
            />
            <br/><TextField
                required
                className="inputRounded"
                type="number"
                id="couponId"
                label="Coupon Id"
                placeholder="Coupon Id"
                value={couponId}
                onChange={ (e) => { setCouponId(Number(e.target.value)) } }
            /> 
            <TextField
                required
                className="inputRounded"
                type="date"
                id="startDate"
               
                value={startDate}
                onChange={ (e) => { setStartDate(e.target.value) } }
            />
            <br/> <TextField
                required
                className="inputRounded"
                id="description"
                label="Description"
                placeholder="Description"
                value={description}
                onChange={ (e) => { setDescription(e.target.value) } }
            />
             <TextField
                required
                className="inputRounded"
                type="date"
                id="endDate"
                
                value={endDate}
                onChange={ (e) => { setEndDate(e.target.value) } }
            />
            <br/> <TextField
                required
                className="inputRounded"
                id="image"
                label="Image"
                placeholder="Image"
                value={image}
                onChange={ (e) => { setImage(e.target.value) } }
            />
            <TextField
                required
                className="inputRounded"
                type="number"
                id="price"
                label="Price"
                placeholder="Price"
                value={price}
                onChange={ (e) => { setPrice(Number(e.target.value)) } }
            />
             <br/>
             <FormControl sx={{ml:"0.4vw" ,  mt:"1%",width:"19%", mr:"0.7%", height:"100%"}} >
            <InputLabel  className="inputRounded" id="demo-simple-select-label"> Category </InputLabel>

            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                placeholder="Category"
                value={categoryId}
                onChange = {(e)=>{setCategoryId(Number(e.target.value))}}
                sx={{borderRadius:"15px", mt:"1%" , mb:"1%" , fontSize:"0.8rem"}}

            
            >
             <MenuItem value={"1"}>CARS</MenuItem>
             <MenuItem value={"2"}>PAINTING</MenuItem>
             <MenuItem value={"3"}>WHEELS</MenuItem>
             <MenuItem value={"4"}>YACHT</MenuItem>
             <MenuItem value={"5"}>MOTORCYCLE</MenuItem>
            </Select>
            </FormControl>
            <br/>
            <Button sx={{ml:"1vw" , mt:"5vh"}} style={{borderRadius:"15px"}} variant="contained" onClick={handleClick} >
                submit
            </Button>
        </Box>
        </Grid>


        <Box 
         className='SomeInfo'
         width="100%"
         height="50%"
         sx={{
            borderLeft:1,
            borderColor:"divider"
        }}>
        <Typography variant="body1" style={{fontFamily:"Lora"}} className='SomeInfoText' >
            <br/>
             Welcome to the place where we update coupons :)
        </Typography>
        </Box>

        <SuccsessMessage isSuccesses={isSuccesses} sucMessage={sucMessage} onClickHandle={()=>setIsSuccesses(false)}/>
        <ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>

                
        </Grid>


        </Container>
    );
}

export default UpdateCoupon;