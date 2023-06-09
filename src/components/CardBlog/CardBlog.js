import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CardBlog.css'

function CardBlog(props) {
return (
    <div className='CardBlog'>

        <div className='CardBlog-img'>
            <img src={props.img} alt='Card-Blog-Img'/>
        </div>

        <div className='CardBlog-head'>
        <Link to={'/blog'}><h1>{props.title}</h1></Link>
        </div>

        <div className='CardBlog-para'>
        <article>{props.description}</article>
        </div>

            <Button className='btn_main--blog'>
                READ MORE
            </Button>

    </div>
)
}

export default CardBlog