import "./CompanyPage.css";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
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
      <Box sx={{ width: '100%', position:"absolute" , top:"5%" }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Get Company Coupons" {...a11yProps(0)} />
            <Tab label="Add Coupon" {...a11yProps(1)} />
            <Tab label="Delete Coupon" {...a11yProps(2)} />
            <Tab label="Update Coupon" {...a11yProps(3)} />
            <Tab label="Company Details" {...a11yProps(4)} />

          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
            <GetCompanyCoupons/>
            <br/><br/>
            <CouponsByCategory/>
            <br/><br/>
            <CouponsByMaxPrice/>

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
      </Box>
    );
}

export default CompanyPage;
