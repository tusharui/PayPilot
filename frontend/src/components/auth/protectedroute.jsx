import { Navigate , Outlet } from "react-router-dom"
import Dashboardlayout from "../layout/dashboardlayout"
const Protectedroute = ({children }) => {
    //
    const isAuthenticated = true 
    const loading = false 

    if(loading){
        return <div>Loading.....</div>
    }

    if (!isAuthenticated){
        return<Navigate to ="/login" replace />;

    }

  return (
    <Dashboardlayout>{children? children:<Outlet/>}</Dashboardlayout>
  )
}

export default Protectedroute
