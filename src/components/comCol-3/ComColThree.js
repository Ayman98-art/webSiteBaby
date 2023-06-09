import { Link } from "react-router-dom";
import '../comCol-1/ComColOne.css';

export default function ComColThree() {
return (
    <div className='ComColOne'>
        <h5>HELP</h5>
        <Link to={'/about'}>Our Story</Link>
        <Link to={'/contact'}>Contact Us</Link>
        <Link to={'/shop'}>Delivery</Link>
    </div>
)
}