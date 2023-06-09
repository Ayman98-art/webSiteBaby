import { Col, Row } from 'react-bootstrap';

import SengleImg from '../sec-about-img-single/SengleImg';

import smallBAby from '../../images/images-about/cute-baby.webp';
import babyChlothe from '../../images/images-about/chothes.webp';
import fox from '../../images/images-about/fox-about.webp';

import '../../Pages/About/AboutPage.css';

export default function RowOne() {
return (
<>
    <Row>
        <Col lg={6}>
            <div className='smallBAby'>
                <SengleImg img={smallBAby} />
            </div>
        </Col>
        <Col lg={3}>
            <SengleImg img={babyChlothe} />
        </Col>
        <Col lg={3}>
            <SengleImg img={fox} />
        </Col>
    </Row>
</>
)
}
