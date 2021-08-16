import './Header.scss'
import {Nav, Navbar} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Sidebar from "../Sidebar/Sidebar";
import {useState} from "react";

const Header = () => {

    const [setSidebar, setSidebarActive] = useState(false)

    const setSidebarActiveHandler = () => {
        setSidebarActive(!setSidebar)
    }

    return (
        <>
        <Navbar className="header py-3" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Header</Navbar.Brand>
            <Nav className="header-nav ml-auto">
                <Nav.Link>Link1</Nav.Link>
                <Nav.Link>Link2</Nav.Link>
            </Nav>
            <NavbarToggle
                className="burger"
                onClick={setSidebarActiveHandler}
            />
        </Navbar>
            {setSidebar && <Sidebar
                active={setSidebar}
                setActive={setSidebarActive}
            />}
        </>
    );
};

export default Header;
