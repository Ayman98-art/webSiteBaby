import './LogoFooter.css'
import logo from'../../images/logo-footer.webp';
import { Link } from 'react-router-dom';


function LogoFooter() {
return (
    <div className='LogoFooter'>
        <div className='logofooter_img'>
            <Link to={'/'}>
                <img src={logo} alt='logo-footer'/>
            </Link>
        </div>
    </div>
)
}

export default LogoFooter;