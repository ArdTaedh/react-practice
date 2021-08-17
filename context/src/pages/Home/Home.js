import React, {useContext, useState} from 'react';
import faker from 'faker'

import './Home.scss'
import Product from "../../components/Product/Product";
import {Cart} from "../../context/Context";

faker.seed(150)

const Home = () => {

    const { cart, setCart } =useContext(Cart)

    console.log(useContext(Cart))

    const productsArray = [...Array(20)].map(() =>  ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image()
    }))

    const [products] = useState(productsArray)

    return (
        <div className="product-container">
            {products.map((prod)=>(
                <Product
                    key={prod.id}
                    prod={prod}
                />
            ))}
        </div>
    );
};

export default Home;
