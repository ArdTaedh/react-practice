import React from 'react';

import './Home.scss'
import {CartState} from "../../context/Context";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import Filters from "../../components/Filters/Filters";

const Home = () => {

    const {state: {products}} = CartState()
    console.log(products)

    return (
        <div className="home">
            <Filters />
            <div className="productContainer">
                {
                    products.map((prod) => {
                        return (
                            <SingleProduct
                                prod={prod}
                                key={prod.id}

                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Home;
