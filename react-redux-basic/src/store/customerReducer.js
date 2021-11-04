const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const GET_CUSTOMERS = 'GET_CUSTOMERS'

const defaultState = {
    customers: []
}

const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_CUSTOMERS:
            return {
                ...state,
                customers: [...state.customers, ...action.payload]
            }
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.payload]
            }
        case REMOVE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(customer => customer.id !== action.payload)
            }
        default:
            return state
    }
}

export default customerReducer

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload })
export const getCustomersAction = (payload) => ({ type: GET_CUSTOMERS, payload })