import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomer} from "./asyncActions/customers";

const App = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
        dispatch({
            type: 'ADD_CASH',
            payload: cash
        })
    }

    const getCash = (cash) => {
        dispatch({
            type: 'GET_CASH',
            payload: cash
        })
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }

        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (id) => {
        dispatch(removeCustomerAction(id))
    }

    // const getCustomer = (cash) => {
    //
    //
    //     dispatch({
    //         type: 'GET_CUSTOMER',
    //         payload: customer
    //     })
    // }

    return (
        <>
            <div className="cash">
                <span>Cash: {cash}</span>
                <div style={{marginTop: '0.3rem'}}>
                    <button onClick={() => addCash(Number(prompt('Add Cash')))}>Add</button>
                    <button onClick={() => getCash(Number(prompt('Get Cash')))}>Get</button>
                </div>
            </div>
            <div className="customers" style={{marginTop: '0.5rem'}}>
                <div>
                    <button onClick={() => addCustomer(prompt('Add Customer'))}>Add</button>
                    <button onClick={() => dispatch(fetchCustomer())}>Get</button>
                </div>
                {
                    customers.length > 0
                        ? <div>{customers.map(customer =>
                            <div
                                key={customer.id}
                                onClick={() => removeCustomer(customer.id)}
                            >
                                {customer.name}
                            </div>
                                )}
                            </div>
                        : <div>None of customers</div>
                }
            </div>
        </>
    );
};

export default App;