import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import tree from '../../images/tree-page.webp';
import'./PropsTree.css'


function PropsTree(props) {
return (
    <>
    <div className='FollowUs contanier-page text-center p-t-100 p-b-100'>
        <Container>

        <div className='FollowUs_img'>
            <img src={tree} alt='FollowUs-img'/>
        </div>
    
        <h2 className='
                animate__animated 
                animate__flipInY 
                animate__repeat-3'
        ><Link
        to={'/'}
        target='_blank'>{props.name_page}</Link></h2>
        <p>{props.content_name_page}</p>

        </Container>
    
    </div>
    </>
)
}

export default PropsTree;