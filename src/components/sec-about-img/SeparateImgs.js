import { Container } from 'react-bootstrap'

import RowOne from '../sec-about-img-row-1/RowOne';
import RowTwo from '../sec-about-img-row-2/RowTwo';


export default function SeparateImgs() {
return (
    <div className='contanier-page p-t-50'>
        <Container>
            <RowOne/>
            <RowTwo />
        </Container>
    </div>
)
}

