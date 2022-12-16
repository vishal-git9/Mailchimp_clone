
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Context/Authcontext"
export default function PrivateRoute({children}){
    const {AuthStatus} = useContext(AuthContext)
    const {isAuth} = AuthStatus
    if(!isAuth){
        return <Navigate to={"/login"}/>
    }

    return children
}