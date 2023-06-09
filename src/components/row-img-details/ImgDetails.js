import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import RowImg from '../row-img/RowImg';

import astorant from '../../images/astorant.webp';
import baby from '../../images/baby.webp';
import bear from '../../images/bear.webp';
import cute from '../../images/cute.webp';
import jake from '../../images/jake.webp';
import meow from '../../images/meow.webp';

import './ImgDetails.css';

function ImgDetails() {
return (
    <div className='contanier-page p-b-50 pt-70'>
        <Container>
            <Row>
                <Col lg={2} sm={4} className='col-0'>
                    <RowImg chracterImg={astorant}/>
                </Col>
                <Col lg={2} sm={4} className='col-0'>
                    <RowImg chracterImg={baby}/>
                </Col>
                <Col lg={2} sm={4} className='col-0'>
                    <RowImg chracterImg={bear}/>
                </Col>
                <Col lg={2} sm={4} className='col-0'>
                    <RowImg chracterImg={cute}/>
                </Col>
                <Col lg={2} sm={4} className='col-0'>
                    <RowImg chracterImg={jake}/>
                </Col>
                <Col lg={2} sm={4} className='col-0'>
                    <RowImg chracterImg={meow}/>
                </Col>
            </Row>
        </Container>
    </div>
)
}

export default ImgDetails;