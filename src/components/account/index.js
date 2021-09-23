import React from "react";
import { useSelector, useDispatch } from "react-redux";
const UserDetails=()=>{
    const dispatch = useDispatch();
    const auth = useSelector(x => {
        return x.Auth;
    })
    return(
        <div>
            <p>{auth.profile.userId}</p>
                 <h1>Paymnet</h1>

        </div>
    )
}
export default UserDetails