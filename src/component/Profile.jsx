import React, {useContext} from "react";
import UserContext from "../context/UserContex";

function profile(){
    const {user} = useContext(UserContext)
    if(!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
  
}
export default profile