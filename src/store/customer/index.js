import { REDUCER_CONSTANTS } from "../constants"

const initialState = {
    customerDetails:[],
    transactionHistory:[]
}
export const Customer = (state = initialState, action) => {
    switch (action.type) {
        case REDUCER_CONSTANTS.GET_CUSTOMER_SUCCESS:
            return {...state,customerDetails:action.data}
        case REDUCER_CONSTANTS.GET_CUSTOMER_FAILURE:
            return {...state,customerDetails:[],ErrorMessage:action.data}  
        case REDUCER_CONSTANTS.GET_TRANSACTION_HISTORY_SUCCESS:
            return {...state,transactionHistory:action.data}
        case REDUCER_CONSTANTS.GET_TRANSACTION_HISTORY_FAILURE:
            return {...state,transactionsHistory:[],ErrorMessage:action.data}       
        default:
            return { ...state }
    }
}


