import {Routes,Route} from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import CallToActionWithIllustration from "../Features/features"
import PricingPage from "../Pages/PricingPage"
export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<CallToActionWithIllustration/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/pricing" element={<PricingPage/>}></Route>
        </Routes>
    )
}