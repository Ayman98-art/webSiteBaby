import { Col, Container, Row } from 'react-bootstrap';
import CardBlog from '../../components/CardBlog/CardBlog'

import baby_face from '../../images/images-blog/baby-face.webp';
import fox_shirt from '../../images/images-blog/fox-shirt.webp';
import bear_paint from '../../images/images-blog/bear-paint.webp';
import fox_paint from '../../images/images-blog/fox-paint.webp';
import room_baby from '../../images/images-blog/room-baby.webp';
import CircelBlog from '../circel-img-blog/CircelBlog';
import RestContent from '../row-4-rest-of-content-blog/RestContent';

import './collapseCard.css';


function CollapseCard() {
return (
    <div className='contanier-page p-b-50'>
        <Container>

        <Row>
        <Col className='col-pb-32' lg={8} md={8} sm={12}>
        <CardBlog
        img={baby_face}
        title={'BABYSITTING'}
        description={'Aliquam accumsan leo a maximus sodales. Maecenas tellus lectus, vulputate sed rutrum non, risus nec eget neque. Nullam quis orci vestibulum, ultrices ligula id, pretium tellus. Nunc id magna a neque, ac blandit metus dui maximussed pretium eget dolor ac luctus. Nunc ut accumsan nulla.'}
        />
        </Col>

        <Col className='col-pb-32' lg={4} md={4} sm={12}>
            <CircelBlog />
        </Col>

        <Col className='col-pb-32' lg={8} md={8} sm={12}>
        <CardBlog
        img={fox_shirt}
        title={'FULL-TIME NANNY'}
        description={'Aliquam accumsan leo a maximus sodales. Maecenas tellus lectus, vulputate sed rutrum non, risus nec eget neque. Nullam quis orci vestibulum, ultrices ligula id, pretium tellus. Nunc id magna a neque, ac blandit metus dui maximussed pretium eget dolor ac luctus. Nunc ut accumsan nulla.'}
        />
        </Col>

        <Col className='col-pb-32' lg={8} md={8} sm={12}>
        <CardBlog
        img={bear_paint}
        title={'PARENTS TOMORROW'}
        description={'Aliquam accumsan leo a maximus sodales. Maecenas tellus lectus, vulputate sed rutrum non, risus nec eget neque. Nullam quis orci vestibulum, ultrices ligula id, pretium tellus. Nunc id magna a neque, ac blandit metus dui maximussed pretium eget dolor ac luctus. Nunc ut accumsan nulla.'}
        />
        </Col>

        <Col className='col-pb-32' lg={8} md={8} sm={12}>
        <CardBlog
        img={fox_paint}
        title={'KIDS CAN DANCE AND HAVE FUN'}
        description={'Aliquam accumsan leo a maximus sodales. Maecenas tellus lectus, vulputate sed rutrum non, risus nec eget neque. Nullam quis orci vestibulum, ultrices ligula id, pretium tellus. Nunc id magna a neque, ac blandit metus dui maximussed pretium eget dolor ac luctus. Nunc ut accumsan nulla.'}
        />
        </Col>

        <Col className='col-pb-32' lg={4} md={4} sm={12}>
            <RestContent />
        </Col>

        <Col className='col-pb-32' lg={8} md={8} sm={12}>
        <CardBlog
        img={room_baby}
        title={'ANOTHER NEW CHILD'}
        description={'Aliquam accumsan leo a maximus sodales. Maecenas tellus lectus, vulputate sed rutrum non, risus nec eget neque. Nullam quis orci vestibulum, ultrices ligula id, pretium tellus. Nunc id magna a neque, ac blandit metus dui maximussed pretium eget dolor ac luctus. Nunc ut accumsan nulla.'}
        />
        </Col>

        </Row>

        </Container>
    </div>
)
}

export default CollapseCard;