import NavBar from "../components/NavBar"
import { useContext } from "react";
import { AuthContext } from "../context/authContext";




function HomePage(){

    const {user,logout}=useContext(AuthContext)

    return (
        <div>
            <NavBar></NavBar>
            {user?
            <>
                <h1>this is home page</h1>
                <p>{user.email} is logged in</p>
            </>
            :
            <>
                <h1>  Login to access the data</h1>
            </>}
            
        </div>
    )
}

export default HomePage