import EndPage from '../EndOfPage/EndPage';
import ComColOne from '../comCol-1/ComColOne';
import ComColThree from '../comCol-3/ComColThree';
import ComColTwo from '../comCol-2/ComColTwo';
import LogoFooter from '../logo-footer/LogoFooter';
import SocialMedia from '../social-media/SocialMedia';
import { Col, Container, Row } from 'react-bootstrap';
import BtnTop from '../btn-to-top/BtnTop';
import './Footer.css';


function Footer() {
return (
    <>
    <div className='contanier-page Footer p-t-50'>

        <Container>

            <LogoFooter />

            <Row>
                <Col lg={4} sm={12} className='col-mb-15'>
                    <ComColOne />
                </Col>
                <Col lg={4} sm={12} className='col-mb-15'>
                    <ComColTwo />
                </Col>
                <Col lg={4} sm={12} className='col-mb-15'>
                    <ComColThree />
                </Col>
            </Row>

            <SocialMedia />
            <EndPage />
            <BtnTop />
        </Container>
    </div>
    </>
)
}

export default Footer;