import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import tree from '../../images/tree-page.webp';
import singture from '../../images/formal-about.webp';

import './TextAbout.css';


function TextAbout() {
return (
    <div className='contanier-page text-center'>
        <Container>
            <div className='p-t-50 p-b-50'>

            <div className='about-img-tree'>
                <img src={tree} alt='about-img-tree'/>
            </div>

            <div className='about-head mt-2
                            animate__animated 
                            animate__flipInY 
                            animate__repeat-3'
                >
                <Link to={'/about'}><h2>About US</h2></Link>
            </div>

            <div className='about-article my-5'>
                <article className='about-article_first'>
                Nam nisi dui, laoreet sit amet nunc ut, lobortis tristique quam. Aenean ac commodo quis velit, quis ultricies tellus. Aenean tincidunt sit amet urna eget aliquet. Sed a id velit ultricies enim. Donec dignissim blandit massa nec maximus fusce eu risus nisl.
                </article>

                <article className='about-article_second'>
                Nam nisi dui, laoreet sit amet nunc ut, lobortis tristique quam. Aenean ac commodo quis velit, quis ultricies tellus. Aenean tincidunt sit amet urna eget aliquet. Sed a id velit ultricies enim. Donec dignissim blandit massa nec maximus fusce eu risus nisl.
                </article>
            </div>

            <div className='about-singture'>
                <img src={singture} alt='about-singture'/>
            </div>

            </div>

        </Container>
    </div>
)
}

export default TextAbout;