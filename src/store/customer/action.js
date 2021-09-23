
import { REDUCER_CONSTANTS } from "../constants";
//import { transactionsHistory} from '../../constants/transactions.js';
//import {customerDetails} from '../../constants/customers.js'
import axios from "axios";

export const customerApiSuccess = (data) => {
    return {
        type: REDUCER_CONSTANTS.GET_CUSTOMER_SUCCESS,
        data: data
        
    }
};
export const customerApiFailure = () => {
    return {
        type: REDUCER_CONSTANTS.GET_CUSTOMER_FAILURE,
        errorMessage: 'Unable to fetch your details rightnow try after some time!!'
    }
};
export const transactionHistoryApiSuccess = (data) => {
    return {
        type: REDUCER_CONSTANTS.GET_TRANSACTION_HISTORY_SUCCESS,
        data: data
        
    }
};
export const transactionHistoryApiFailure = () => {
    return {
        type: REDUCER_CONSTANTS.GET_TRANSACTION_HISTORY_FAILURE,
        errorMessage: 'Unable to fetch your details rightnow try after some time!!'
    }
};


export const getCustomerDetails=()=>{
   
    return async (dispatch) => {

        try {
            let url="http://localhost:8080/customer/A%20KRISHNA%20MOHAN";
            let data = await axios.get(url)
            data=data.data
            console.log(data)
            return dispatch(customerApiSuccess(data));
        
        } 
        catch(ex){
            return dispatch(customerApiFailure());
        }
    }

      
}

export const getTransactionHistory=()=>{
    return async (dispatch)=>{
   
    try{
        let url="http://localhost:8080/transaction"
        let data=await axios.get(url)
        data=data.data
       return  dispatch(transactionHistoryApiSuccess(data)); 
    }
    catch(ex)
    {
       return dispatch(transactionHistoryApiFailure());

    }
}
}
