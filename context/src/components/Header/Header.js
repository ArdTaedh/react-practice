import React, {useContext} from 'react';
import {Link} from "react-router-dom";

import './Header.scss'
import {Cart} from "../../context/Context";

const Header = () => {
    const { cart } = useContext(Cart)

    return (
        <div>
            <span className="sub-header">React Context API</span>
            <ul className="nav">
                <li className="prod">
                    <Link to="/">Home Page</Link>
                </li>
                <li className="prod1">
                    <Link to="/cart">Cart ({cart.length})</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
