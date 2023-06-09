import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './LookFor.css';


function LookFor() {
return (
    <>
    <div className='contanier-page'>
        <div className='text-center'>
            <img src="https://img.freepik.com/free-vector/business-team-looking-new-people-allegory-searching-ideas-staff-woman-with-magnifier-man-with-spyglass-flat-illustration_74855-18236.jpg?w=740&t=st=1685295230~exp=1685295830~hmac=37d6549a4d0930043594d37e39c53f6410768c92199d3883349f17f0a59c877b" alt='Looking for products'/>
        </div>
        <div className='text-center p-t-50 p-b-100'>
            <Button className='goHome'>
                <Link to={'/'}>
                    <h1 className='goHome'>Home Page</h1>
                </Link>
            </Button>
        </div>
    </div>
    </>
)
}

export default LookFor;