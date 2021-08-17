import React, {useContext} from 'react';

import './Product.scss'
import {Cart} from "../../context/Context";

const Product = ({ prod }) => {

    const { cart, setCart } = useContext(Cart)

    return (
        <div className="product">
            <img src={prod.image} alt={prod.name} />
            <div className="product-description">
                <span style={{ fontWeight: 700 }}>{prod.name}</span>
                <span>₴{prod.price.substring(0, 3)}</span>
            </div>
            {cart.includes(prod) ? (
                <button
                className="remove"
                onClick={()=> {
                    setCart(cart.filter(c=>c.id !== prod.id))
                }}
            >
                Remove from Cart
            </button>
                )
            : (
                <button
                    className="add"
                    onClick={()=> {
                        setCart([...cart, prod])
                    }}
                >
                    Add to Cart
                </button>
                )}
        </div>
    );
};

export default Product;
