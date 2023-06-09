import { Col, Row } from 'react-bootstrap'
import SengleImg from '../sec-about-img-single/SengleImg'

import bearNote from '../../images/grow-bear.webp';
import roomBaby from '../../images/baby-seting.webp';
import meatRoom from '../../images/images-about/meat.webp';

import '../../Pages/About/AboutPage.css';

export default function RowTwo() {
return (
    <>
            <Row>
                <Col lg={3}>
                    <SengleImg img={bearNote} />
                </Col>
                <Col lg={6}>
                    <SengleImg img={roomBaby} />
                </Col>
                <Col lg={3}>
                    <div className='meatRoom'>
                        <SengleImg img={meatRoom} />
                    </div>
                </Col>
            </Row>
    </>
)
}
