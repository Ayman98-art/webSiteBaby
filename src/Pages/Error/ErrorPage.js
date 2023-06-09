import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ErrorPage.css';


function ErrorPage() {
return (
    <div className='contanier-page'>
        <div className='text-center'>
            <div className='error-img'>
                <img
                    src='https://img.freepik.com/free-vector/404-error-abstract-concept-illustration_335657-2243.jpg?w=740&t=st=1685454731~exp=1685455331~hmac=c9f725a20fff1b0055bd0b9616dd8c12fe0b071a154814d16fc20fc738182c20'
                    alt='Error Page Return back To Home'
                />
            </div>
            <Link>
                <Button className='btn-error btn-danger'>
                    Return Home
                </Button>
            </Link>
        </div>
    </div>
)
}

export default ErrorPage;