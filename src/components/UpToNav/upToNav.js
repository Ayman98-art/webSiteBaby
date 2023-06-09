import { Container, Navbar } from "react-bootstrap"

import facebook from '../../images/facebook.svg';
import instgram from '../../images/instgram.svg';
import twitter from '../../images/twitter.svg';
import { Link } from "react-router-dom";

import './upToNav.css';


function UpToNav() {
return (
    <>
<Navbar className="Nav-upTo">
    <Container>
        <span>Free shipping orders over $99
        </span>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Link to={'https://www.facebook.com/QodeInteractive/'} target="_blank"><img src= {facebook} alt="icon-social"/></Link>
        <Link to={'https://www.instagram.com/qodeinteractive/'} target="_blank" className="mx-4"><img src= {instgram} alt="icon-social"/></Link>
        <Link to={'https://twitter.com/QodeInteractive'} target="_blank" ><img src= {twitter} alt="icon-social"/></Link>
        </Navbar.Collapse>
    </Container>
</Navbar>
    </>
)
}

export default UpToNav;