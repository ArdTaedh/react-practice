import './Overlay.scss'

const Overlay = ({setActive}) => {

    return (
        <div
            className='overlay d-flex d-lg-none'
            onClick={()=> setActive(false)}
        >
        </div>
    );
};

export default Overlay;
