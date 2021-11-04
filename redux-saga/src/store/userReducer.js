const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const GET_CUSTOMERS = 'GET_CUSTOMERS'

const defaultState = {
    users: []
}

const SET_USERS = 'SET_USERS'
export const FETCH_USERS = 'FETCH_USERS'

export default function userReducer (state = defaultState, action)  {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload }
        default:
            return state
    }
}

export const setUserAction = (payload) => ({ type: SET_USERS, payload })
export const fetchUserAction = (payload) => ({ type: FETCH_USERS, payload })