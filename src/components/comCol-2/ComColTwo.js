import { Form } from 'react-bootstrap'
import sendData from '../../images/eveloen.svg';
import './ComColTwo.css';

export default function ComColTwo() {
return (
    <div className='ComColTwo'>
        <h5>NEWSLETTER</h5>
        <p>Subscribe to our newsletter!</p>

        <div className='news'>

            <div className='input-E'>
                <Form.Control
                className='input-email'
                type="email"
                name='email'
                required
                placeholder="Your Email"
                />
            </div>

            <div className='submit'>
                <img src={sendData} alt='send-data'/>
            </div>

        </div>
    </div>
)
}
