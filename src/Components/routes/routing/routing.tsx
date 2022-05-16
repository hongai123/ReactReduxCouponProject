import "./routing.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../../mainarea/main/main";
import Notfound from "../../mainarea/notfound/notfound";
import Coupons from "../../mainarea/coupons/coupons";
import SignInSide from "../../mainarea/LogMeIn";
import AdminPage from "../../mainarea/admin/adminPage/adminPage";
import CompanyPage from "../../mainarea/company/CompanyPage/CompanyPage";
import CustomerPage from "../../mainarea/customer/CustomerPage/CustomerPage";
import CheckMain from "../../mainarea/main/checkMain";


function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<CheckMain/>} />
            <Route path="/coupons"  element={<Coupons/>}/>
            <Route path="/login" element={<SignInSide/>}/>
            <Route path="'coupons" element={<Coupons/>}/>
            <Route path="/adminMenu" element={<AdminPage/>}/>
            <Route path="companyMenu" element={<CompanyPage/>}/>
            <Route path="/customerMenu" element={<CustomerPage/>}/>
            <Route path="/shop" element={<Coupons/>}/>
            <Route path="/*" element={<Notfound/>}/>


        </Routes>

    );
}

export default Routing;
