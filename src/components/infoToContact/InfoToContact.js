import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './InfoToContact.css'

export default function InfoToContact() {
return (
<div className='contanier-page'>
    <Container>
        <Row className='text-center'>

            <Col lg={4}>
                <div className='mb-04'>
                    <h5>ADDRESS:</h5>
                    <Link className='MODE' to={'/contact'}>11 Old Fulton St, Brooklyn,<br /> NY 11201, USA</Link>
                </div>
            </Col>

            <Col lg={4}>
                <div className='mb-04'>
                    <h5>WORK MODE:</h5>
                    <p className='WORK_MODE'>Mon-Fri 11:00 - 19:00 <br />
                        Sat-Sun 11:00 - 17:00
                    </p>
                </div>
            </Col>

            <Col lg={4}>
                <div className='mb-04'>
                    <h5>CONTACT:</h5>
                    <Link className='d-block MODE' to={'tel:+381 99 486 66 09'}>+381 99 486 66 09</Link>
                    <Link className='MODE' to={'mailto:qi87@qodeinteractive.com'}>qi87@qodeinteractive.com</Link>
                </div>
            </Col>

        </Row>
    </Container>
</div>
)
}
