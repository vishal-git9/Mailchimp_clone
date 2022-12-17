import {Routes,Route} from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import CallToActionWithIllustration from "../Features/features"
import PricingPage from "../Pages/PricingPage"
import Dashboard from "../Features/Dashboard/dashboard"
import PrivateRoute from "./privateRoute"
import Checkout from "../Features/checkout/checkout"
import Confirmation from "../Features/checkout/confirmation"
import InfoForm from "../Features/InfoForm/InfoForm"
export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<CallToActionWithIllustration/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/pricing" element={<PricingPage/>}></Route>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="/checkout/confirmation" element={<Confirmation/>}></Route>
            <Route path="/infoForm" element={<PrivateRoute><InfoForm/></PrivateRoute>}></Route>
        </Routes>
    )
}