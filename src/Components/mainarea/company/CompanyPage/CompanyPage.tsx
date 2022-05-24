import "./CompanyPage.css";
import * as React from 'react';
import Tabs , {tabsClasses} from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import GetCompanyCoupons from "../actions/getCompanyCoupons/getCompanyCoupons";
import {useTypedSelector} from "../../../../hooks/useTypedSelector"
import {useNavigate} from "react-router-dom"
import {useEffect} from "react";
import AddCoupon from "../actions/addCoupon/addCoupon";
import DeleteCoupon from "../actions/deleteCoupon/deleteCoupon";
import UpdateCoupon from "../actions/updateCompany/updateCompany";
import CouponsByCategory from "../actions/couponsByCategory/couponsByCategory";
import CouponsByMaxPrice from "../actions/couponsByMaxPrice/couponsByMaxPrice";
import CompanyDetails from "../actions/companyDetails/companyDetails";
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
        if(role !== "COMPANY"){
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



function CompanyPage(): JSX.Element {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <Container maxWidth="xl" sx={{mt:"5vh"}}>
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
            <Tab label="Get Company Coupons" {...a11yProps(0)} />
            <Tab label="Add Coupon" {...a11yProps(1)} />
            <Tab label="Delete Coupon" {...a11yProps(2)} />
            <Tab label="Update Coupon" {...a11yProps(3)} />
            <Tab label="Company Details" {...a11yProps(4)} />
            <Tab label="Coupons By Cateogry" {...a11yProps(5)} />
            <Tab label="Coupons By MaxPrice" {...a11yProps(6)} />

          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
            <GetCompanyCoupons/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AddCoupon/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DeleteCoupon/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <UpdateCoupon/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <CompanyDetails/>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <CouponsByCategory/>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <CouponsByMaxPrice/>
        </TabPanel>
        

        </Container>
    );
}

export default CompanyPage;
