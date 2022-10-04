import Box from "@mui/material/Box";
import { Navigate, Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import CheckoutFeatures from "./pages/CheckoutFeatures";
import Customers from "./pages/Customers";
import CustomerSupport from "./pages/CustomerSupport";
import Dashboard from "./pages/Dashboard";
import DiscountCodes from "./pages/DiscountCodes";
import ExitIntent from "./pages/ExitIntent";
import Extensions from "./pages/Extensions";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import PromotionalPackages from "./pages/PromotionalPackages";
import ViewYourShop from "./pages/ViewYourShop";


function MainComponent(): JSX.Element {

    return ( 
        <Routes>
            <Route path='/' element={<Navigate to="/Dashboard" replace/>} />
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path='/Orders' element={<Orders/>} />
            <Route path='/Customers' element={<Customers/>} />
            <Route path='/Catalogue/Products' element={<Products/>} />
            <Route path='/Catalogue/Categories' element={<Categories/>} />
            <Route path='/Catalogue/Promotional-Packages' element={<PromotionalPackages/>} />
            <Route path='/Marketing/Discount-codes' element={<DiscountCodes/>} />
            <Route path='/Marketing/Exit-intent' element={<ExitIntent/>} />
            <Route path='/Marketing/Checkout-Features' element={<CheckoutFeatures/>} /> 
            <Route path='/Extensions' element={<Extensions/>} />
            <Route path='/View-your-shop' element={<ViewYourShop/>} />
            <Route path='/Customer-Support' element={<CustomerSupport/>} />  
            <Route path='*' element={<Box>404, NOT FOUND</Box>} />  
        </Routes>
    );
}

export default MainComponent;