import './Sidebar.scss'
import Overlay from "../Overlay/Overlay";

const Sidebar = ({ active, setActive}) => {

    return (
        <>
            <div className='d-lg-flex sidebar pb-3 pb-lg-0' >
                <ul className="sidebar-nav mb-2">
                    <li className="nav-item">
                        <a
                            className="nav-link px-3 px-lg-2 active"
                            aria-current="page"
                            href="#"
                        >Home</a
                        >
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-3 px-lg-2" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-3 px-lg-2" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-3 px-lg-2" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-3 px-lg-2" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-3 px-lg-2" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-3 px-lg-2" href="#">Link</a>
                    </li>
                </ul>
            </div>
            <Overlay active={active} setActive={setActive} />
        </>
    );
};

export default Sidebar;
