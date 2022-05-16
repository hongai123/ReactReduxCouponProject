import "./CustomerPage.css";
import * as React from 'react';
import Tabs , {tabsClasses} from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useTypedSelector} from "../../../../hooks/useTypedSelector"
import {useNavigate} from "react-router-dom"
import {useEffect} from "react";
import CustomerCoupons from "../actions/customerCoupons/customerCoupons";
import Coupons from "../../coupons/coupons";
import CouponsByMaxPrice from "../actions/couponsByMaxPrice/couponsByMaxPrice";
import CouponsByCategory from "../actions/couponsByCategories/couponsByCategories";
import CustomerDetails from "../actions/customerDetails/customerDetails";
import { Container,Grid } from "@mui/material";



interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    const {token, isLogged, role} = useTypedSelector(state=>state.loginRed)
    const nav = useNavigate();

    useEffect(()=>{
        if(role !== "CUSTOMER"){
            nav("/")
        }


    },[role,isLogged,token])
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }




function CustomerPage(): JSX.Element {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <Container maxWidth="lg" sx={{mt:"5vh"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' , maxWidth:"100%" }}>
        <Tabs 
        variant="scrollable"
         scrollButtons
         value={value}
          onChange={handleChange} 
          aria-label="basic tabs example"
           sx={{
        [`& .${tabsClasses.scrollButtons}`]: {
          '&.Mui-disabled': { opacity: 0.3 },
        },
      }} >
            <Tab label= "All Coupons" {...a11yProps(0)} />
            <Tab label="Coupons By Max Price" {...a11yProps(1)} />
            <Tab label="Coupons By Category" {...a11yProps(2)} />
            <Tab label="Customer Details" {...a11yProps(3)} />

          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
            <CustomerCoupons/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <CouponsByMaxPrice/>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <CouponsByCategory/>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <CustomerDetails/>
        </TabPanel>
        
      </Container>
    );
}

export default CustomerPage;
