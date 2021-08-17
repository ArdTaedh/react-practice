import './App.scss';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/cart" exact>
                <Cart/>
            </Route>
        </BrowserRouter>
    );
}

export default App;
