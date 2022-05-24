import "./coupons.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { CouponModel } from "../../model/couponModel/couponModel";
import CouponBox from "../../style-box/couponBox/couponBox";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import { Box, ButtonGroup, Collapse, Container , FormControl, Grid, MenuItem, TextField } from "@mui/material";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface couponsToCompareProps{
    couponsCompare?:CouponModel[];
    onClick?:()=>void;
}

function Coupons(props:couponsToCompareProps): JSX.Element {
    const url = "http://localhost:8080/guest/allAvailableCoupons"
    const [couponss,setCoupons] = useState<CouponModel[]>([])
    const [refresh,setRefresh] = useState(true);
    const {coupons} = useTypedSelector(state=>state.couponsReducer);
    
    

    //try from here
    const [maxPrice, setMaxPrice] = useState(0);
    const [maxPriceFilter, setMaxPriceFilter] = useState(false);
    const [minPrice, setMinPrice] = useState(0);
    const [minPriceFilter, setMinPriceFilter] = useState(false);
    const [renMe,setRenMe] = useState(false);
    const [couponsAfterFilter, setCouponsAfterFilter] = useState<CouponModel[]>([]);
    const [categoryInt, setCategoryInt] = useState(0);
    const [categoryFilter,setCategoryFilter] = useState(false);


    useEffect(()=>{
        
        if(maxPriceFilter && minPriceFilter && categoryFilter){
            setCouponsAfterFilter(couponss.filter((c)=> (c.price >= minPrice && c.price <=maxPrice  && c.category_id_bynum === categoryInt)))

        }
        else if(maxPriceFilter && !minPriceFilter && categoryFilter){
            setCouponsAfterFilter(couponss.filter((c)=> (c.price <=maxPrice  && c.category_id_bynum === categoryInt)))
        }
        else if(!maxPriceFilter && minPriceFilter && categoryFilter){
            setCouponsAfterFilter(couponss.filter((c)=> (c.price >= minPrice  && c.category_id_bynum === categoryInt)))
        }
        else if(!maxPriceFilter && !minPriceFilter && categoryFilter){
            console.log("im suppose to behere")
            setCouponsAfterFilter(couponss.filter((c)=> (c.category_id_bynum === categoryInt)))
            console.log(couponsAfterFilter)
        }
        else if(maxPriceFilter && minPriceFilter){
            setCouponsAfterFilter(couponss.filter((c)=> (c.price >= minPrice && c.price <=maxPrice )))
            console.log("im in true true")
        }
        else if(maxPriceFilter && !minPriceFilter){
            console.log("im in true false")

            setCouponsAfterFilter(couponss.filter((c)=> (c.price <= maxPrice )))
            console.log()
            console.log(couponsAfterFilter)

        }
        else if(minPriceFilter && !maxPriceFilter){
            console.log("im in false true")

            setCouponsAfterFilter(couponss.filter((c)=> (c.price >= minPrice )))

        }
        

    },[renMe])

 

    const handleSubmit = ()=>{
        if(maxPrice > 0){
            setMaxPriceFilter(true);
        }else{
            setMaxPriceFilter(false);
        }

        if(minPrice > 0 ){
            setMinPriceFilter(true);
        }
        else{
            setMinPriceFilter(false);
        }

        if(categoryInt > 0){
            setCategoryFilter(true)
        }else{
            setCategoryFilter(false)
        }


        setRenMe(!renMe);


    }


    //end here

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setCoupons(response.data);
        }).catch(error=>console.log(error))
    },[refresh])


    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        
        color: theme.palette.getContrastText(grey[800]),
        backgroundColor: grey[800],
        '&:hover': {
          backgroundColor: grey[600],
          
        },
      }));



    return (
        <Container maxWidth="xl" sx={{mt:"5%"}}>

            <Grid container spacing={2} sx={{display:"flex", flexDirection:"column"}}>


                <Grid item xs={12} sm ={12} >    

                <ColorButton  onClick={()=>{
                    setRefresh(!refresh);

                }}>{refresh? "Hide Coupon" : "Show Coupons"}
                
                </ColorButton>



                <Collapse in={refresh} timeout={900}>

                    {/* try from here */}

                    <Box
                        component="form"
                         sx={{
                         '& > :not(style)': { m: 1.5, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField
                        variant="filled"
                        sx={{backgroundColor:"white"}}
                        fullWidth={false}
                        size="small"
                        id="maxPrice"
                        placeholder="Max price"
                        label="Max Price"
                        value={maxPrice}
                        onChange={(e)=>{
                            setMaxPrice(Number(e.target.value))
                            console.log("im hereeeee")
                        }}
                        >
                            MaxPrice
                        </TextField>

                        <TextField
                        variant="filled"
                        sx={{backgroundColor:"white"}}
                        size="small"
                        fullWidth={false}
                        id="minPrice"
                        placeholder="Min price"
                        label="Min Price"
                        value={minPrice}
                        onChange={(e)=>{
                            setMinPrice(Number(e.target.value))
                        }}
                        >
                            MinPrice
                        </TextField>


                        <TextField 
                        id="select-category"
                        sx={{backgroundColor:"white"}}
                        select
                        size="small"
                        label="Category"
                        variant="filled"
                        value={categoryInt}
                        onChange={(e)=> setCategoryInt(Number(e.target.value))}

                        >
                            <MenuItem key={0} value={0}>
                            No Category
                            </MenuItem>
                            <MenuItem key={1} value={1} >
                                Cars
                            </MenuItem>
                            <MenuItem key={2} value={2} >
                                Painting
                            </MenuItem>
                            <MenuItem key={3} value={3} >
                                WHEELS
                            </MenuItem>
                            <MenuItem key={4} value={4} >
                                YACHT
                            </MenuItem>
                            <MenuItem key={5} value={5} >
                                MOTORCYCLES
                            </MenuItem>

                        </TextField>

                        <ButtonGroup
                        disableElevation variant="contained"
                        
                        >
                        <Button
                         onClick={handleSubmit}
                         variant="contained"
                         sx={{
                             borderRadius:"15px",
                             background:"#"
                            
                            }}

                        >
                            Submit
                        </Button>

                        <Button 
                        variant="contained"
                        sx={{borderRadius:"15px"}}

                        onClick = {()=>{
                            setCategoryFilter(false);
                            setCategoryInt(0);
                            setMinPriceFilter(false);
                            setMinPrice(0);
                            setMaxPriceFilter(false);
                            setMaxPrice(0);
                            setRenMe(!renMe)
                        }}>
                            Reset
                        </Button>

                        </ButtonGroup>

                        



                    </Box>

                    
                    
                    
                     {/* end from here */}


                
            
                { (maxPriceFilter ||minPriceFilter|| categoryFilter)?<CouponBox coupons={couponsAfterFilter} compare={coupons} onClick={props.onClick}/>:   <CouponBox coupons={couponss} compare={coupons} onClick={props.onClick}/>    }

                </Collapse>
                </Grid>    


            </Grid>
        </Container>
    );
}

export default Coupons;
