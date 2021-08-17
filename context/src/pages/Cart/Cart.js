import React, {useContext, useEffect, useState} from 'react';
import Product from "../../components/Product/Product";
import {Cart} from '../../context/Context'

const CartPage = () => {

    const [total, setTotal] = useState()

    const { cart } = useContext(Cart)

    useEffect(()=> {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    }, [cart])

    return (
        <div>
            <span style={{ fontSize: 30 }}>My Cart</span>
            <br/>
            <span style={{ fontSize: 30 }}>My Total: {total}</span>
            <div className="product-container">
                {cart.map(prod => (
                    <Product
                        prod={prod}
                        key={prod.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default CartPage;
