import { useState } from "react";
import { createContext } from "react";

export const DashboardContext = createContext()

export default function DashboardContextProvider({children}){
    const [Dashboard,setDashboard] = useState(false)
    return(
        <DashboardContext.Provider value={{Dashboard,setDashboard}}>
            {children}
        </DashboardContext.Provider>
    )
}