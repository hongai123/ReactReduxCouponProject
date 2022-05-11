import "./addCoupon.css";
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./addCoupon.css";
import axios, { AxiosError } from "axios";
import { CouponModel } from "../../../../model/couponModel/couponModel";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import SuccsessMessage from '../../../../popupMessages/succsessMessage/succsessMessage';
import {useEffect} from "react";
import ErrorMessage from '../../../../popupMessages/errorMessage/errorMessage';

function AddCoupon(): JSX.Element {
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
    const [myError,setMyError] = useState("")

    useEffect(()=>{
        console.log("im here")
        console.log(isSuccesses)

    },[isSuccesses])

    useEffect(()=>{

},[isLoad])

    const url = "http://localhost:8080/company/addCoupon"

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
            title: title
        };

        axios.post(url, user, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': token ? token : "Bearer error"
            }
        }).then((resp) => {
            if(resp.status == 202)
                setIsSuccesses(true)
                setSucMessage("Coupon Added!")
        }).catch((error:AxiosError) => {
            const err = error.response?.request.responseText
            const errMessage = JSON.stringify(err);
            console.log(errMessage)
        
            setMyError(errMessage.slice(22,66)
            )
            
            setError(true);        })
    }

    return (
       <div>
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
                id="title"
                label="Title"
                placeholder="Title"
                value={title}
                onChange={ (e) => { setTitle(e.target.value) } }
            />
            <TextField
                required
                type="number"
                id="amount"
                label="Amount"
                placeholder="Amount"
                value={amount}
                onChange={ (e) => { setAmount(Number(e.target.value)) } }
            />
            <br/> <TextField
                required
                type="number"
                InputProps={{inputProps:{min:0, max:5}}}
                id="categoryId"
                label="Category Id"
                placeholder="Category Id"
                value={categoryId}
                onChange={ (e) => { setCategoryId(Number(e.target.value)) } }
            />
             <TextField
                required
                id="description"
                label="Description"
                placeholder="Description"
                value={description}
                onChange={ (e) => { setDescription(e.target.value) } }
            />
            <br/> <TextField
                required
                id="startDate"
                label="Start date"
                placeholder="yyyy-mm-dd"
                value={startDate}
                onChange={ (e) => { setStartDate(e.target.value) } }
            />
             <TextField
                required
                id="endDate"
                label="End date"
                placeholder="yyyy-mm-dd"
                value={endDate}
                onChange={ (e) => { setEndDate(e.target.value) } }
            />
            <br/> <TextField
                required
                id="image"
                label="Image"
                placeholder="Image"
                value={image}
                onChange={ (e) => { setImage(e.target.value) } }
            />
            <TextField
                required
                id="price"
                label="Price"
                placeholder="Price"
                value={price}
                onChange={ (e) => { setPrice(Number(e.target.value)) } }
            />
            <br/> 
            <br/> 

            <Button variant="contained" onClick={handleClick} sx={{position:"absolute" , left:"10.2%" ,display:"flow"}} >
                submit
            </Button>
        </Box>

        <SuccsessMessage isSuccesses={isSuccesses} sucMessage={sucMessage} onClickHandle={()=>setIsSuccesses(false)}/>
        <ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>
       </div>

    );
}

export default AddCoupon;