import { Col, Container, Row } from 'react-bootstrap';
import GroupImgs from '../sec-imgs/GroupImgs';
import NoteBear from '../../images/grow-bear.webp';
import Babycolthes from '../../images/colthes-baby.webp';
import babySeting from '../../images/baby-seting.webp';
import BabyToy from '../../images/toys-baby.webp';

import './collapsingImg.css';


function CollapsingImg() {
return (
<div className='contanier-page p-t-50'>
<Container>
<Row>

<Col lg={6}>
    <GroupImgs img={NoteBear} btn={'GROW WITH US'}/>
</Col>

<Col>
<div className= 'flex-direction'>
        <Col lg={12}>
            <GroupImgs img={babySeting} btn={'Baby Sitting'} />
        </Col>

        <Col lg={12}>
            <div className= 'mar-bot'>
            <GroupImgs img={Babycolthes} btn={'Nurturing'} />
            </div>
        </Col>
</div>
</Col>


<Col lg={12}>
<div className='mar-bot'>
    <GroupImgs img={BabyToy} btn={'PERFECT TOYS'} />
</div>
</Col>

</Row>
</Container>
</div>
)
}

export default CollapsingImg