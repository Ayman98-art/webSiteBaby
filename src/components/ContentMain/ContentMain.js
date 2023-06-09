import { Link } from 'react-router-dom';
import tree from '../../images/tree-page.webp';
import './content-main.css'


function ContentMain() {
    
    return (
        <>
        <div className='content_main'>

            <div className="tree_img">
                <img src={tree} alt="tree-img"/>
            </div>

            <div className='text_main 
                animate__animated 
                animate__swing 
                animate__repeat-2'
            >
                <h1>SMART TOYS & BABY BOOKS</h1>
            </div>

            <div className='paragraf_main'>
                <p>
                A space for curious, creative and inquisitive young minds <br/> that love to create and play
                </p>
            </div>

            <div className='main'>
                <Link to={'/shop'}>
                <button className='btn btn_main btn_main--unipue'>Shop All</button>
                </Link>
            </div>
        </div>
    </>
    )
}

export default ContentMain