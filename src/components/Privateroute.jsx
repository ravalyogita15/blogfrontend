import { Navigate } from "react-router-dom"
import { useCookies } from 'react-cookie';

const PrivateRoutes=({children})=>{


    const [cookies]=useCookies(["verificationToken"])
    const isAuth=cookies.verificationToken

    if(!isAuth)
    {
        return <Navigate to="/sign-in" />
    }

    return children
}

export default PrivateRoutes