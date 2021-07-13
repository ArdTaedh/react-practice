import './Overlay.scss'

const Overlay = ({active, setActive}) => {
    //

    return (
        <div
            className={active ? 'overlay active' : 'overlay d-flex d-lg-none'}
            onClick={()=> setActive(false)}
        >
        </div>
    );
};

export default Overlay;