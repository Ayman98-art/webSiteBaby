import { Link } from 'react-router-dom'
import './ComColOne.css'


export default function ComColOne() {
return (
    <div className='ComColOne'>
        <h5>CONTACT</h5>
        <Link to={'/'} target={'_blank'}>Copenhagen CA 90291</Link>
        <Link to={'tel:12-344-546-7657'} target={'_blank'}>12-344-546-7657</Link>
        <Link to={'mailto:qi87@example.com'} target={'_blank'}>qi87@example.com</Link>
    </div>
)
}
