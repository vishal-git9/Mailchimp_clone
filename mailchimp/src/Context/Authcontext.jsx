import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext()

export default function AuthContextProvider({children}){
    const [AuthStatus,setAuthStatus] = useState({
        isAuth:false,
        data:null
    })
    return(
        <AuthContext.Provider value={{AuthStatus,setAuthStatus}}>
            {children}
        </AuthContext.Provider>
    )
}