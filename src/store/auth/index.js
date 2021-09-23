import { REDUCER_CONSTANTS } from "../constants"
import { customerDetails } from "../../constants/customers";
const initialState = {
    profile: {},
    isLoggedIn: false,
    token:"",
    Message: ""
}
export const Auth = (state = initialState, action) => {
    switch (action.type) {
        case REDUCER_CONSTANTS.LOGIN:
            const check = validateLogin(action.data);
            if (check) {
                return { ...state, isLoggedIn: true,token:window.sessionStorage.getItem("token"), message: "", profile: action.data }
            }
            else {
                return { ...state, message: "Invalid user ID or password", profile: {}, isLoggedIn: false };
            }
        case REDUCER_CONSTANTS.LOGOUT:
            return { ...state, initialState };
        default:
            return { ...state }
    }
}
const validateLogin = (userDetails) => {
    // let user = customerDetails.find(x => (x.customerName === userDetails.userId &&
    //     userDetails.password == '1234'))
    // return user;
    let data=fetch("http://localhost:8081/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails)
    });
    data=data.data
    window.sessionStorage.setItem("token", data.token
);
}


