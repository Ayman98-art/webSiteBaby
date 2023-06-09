import { Button, Col, Form, Row } from 'react-bootstrap';
import './SectionForm.css';
import { useState } from 'react';


function SectionForm() {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [text,setText] = useState();

    function handleSubmit(e){
        e.preventDefault()
        alert(`
        This Is Name 😶:    ${name},
        This Is Email 📧:   ${email},
        This Is Text 💌:    ${text}`)
    }

return (
    <div className='contanier-page'>

    <Form
    onSubmit={handleSubmit}
    action='#'
    className='p-b-100'>
    

    <Row className='row-style'>

        <Col lg={6} className='px-0'>
            <Form.Group className="mb-3 mx-2">
                    <Form.Control required
                    onChange={(ele)=>setName(ele.target.value)}
                    className='radius-none'
                    type="text" 
                    placeholder="Your Name" />
            </Form.Group>
        </Col>

        <Col lg={6} className='px-0'>
            <Form.Group className="mb-3 mx-2">
                <Form.Control required
                onChange={(ele)=>setEmail(ele.target.value)}
                className='radius-none' 
                type="email" 
                placeholder="Enter email" />
            </Form.Group>
        </Col>

    </Row>

    <Row>
        <Col lg={12}>
            <Form.Group className="mb-3">
                <textarea
                onChange={(ele)=>setText(ele.target.value)}
                className='textarea-style radius-none form-control'
                cols={0} rows={8} 
                placeholder='Your Massage' />
            </Form.Group>
        </Col>
    </Row>

    <div className='text-center'>
        <Button type='submit'
                className='btn_main btn_main--form'
            >
            SEND
        </Button>
    </div>

    </Form>

    </div>
)
}
export default SectionForm;