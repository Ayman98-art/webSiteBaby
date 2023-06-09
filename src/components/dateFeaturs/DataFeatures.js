import { Row, Col, Container } from 'react-bootstrap'
import ThreeFeatures from '../Features/ThreeFeatures'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseFire } from "@fortawesome/free-solid-svg-icons";
import { faBabyCarriage } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

import '../Features/ThreeFeatures.css';



export default function DataFeatures() {
return (
    <div className='contanier-page p-t-120 p-lr-28 p-b-50'>
        <Container>
            <Row>
                <Col lg={4} className='col-mb'>
                    <ThreeFeatures 
                    icon={<FontAwesomeIcon icon={faHouseFire} 
                    bounce size="2xl" 
                    style={{color: "#292929",}} />}
                    heading3={'OPEN SESSIONS'} 
                    para={'Donec ornare enim eu velit non purus tempor nullam justo lorem'} />
                </Col>
                <Col lg={4} className='col-mb'>
                    <ThreeFeatures 
                    icon={<FontAwesomeIcon icon={faBabyCarriage} 
                    bounce size="2xl" 
                    style={{color: "#292929",}} />}
                    heading3={'BABY ACTIVITIES'} 
                    para={'Donec ornare enim eu velit non purus tempor nullam justo lorem'} />
                </Col>
                <Col lg={4} className='col-mb'>
                    <ThreeFeatures 
                    icon={<FontAwesomeIcon icon={faRocket} 
                    bounce size="2xl" 
                    style={{color: "#292929",}} />}
                    heading3={'BIRTHDAY PARTIES'} 
                    para={'Donec ornare enim eu velit non purus tempor nullam justo lorem'} />
                </Col>
            </Row>
        </Container>
    </div>
)
}
