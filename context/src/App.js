import React, {useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

const App = () => {

    return (
        <BrowserRouter>
          <Header />
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/cart'>
                <Cart/>
            </Route>
        </BrowserRouter>
    );
}

export default App;
