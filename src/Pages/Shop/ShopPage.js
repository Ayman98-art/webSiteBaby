import React, { useEffect, useState } from 'react';
import { Basic_Url, urlProducts} from '../../api/ApiUrl';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { addToCart } from '../../rtk/slice/CartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RestShop from '../../components/half-shop/RestShop';
import Footer from '../../components/footer/Footer';
import RotateLoader from "react-spinners/RotateLoader";
import './ShopPage.css';



function ShopPage() {

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const [product, setProduct] = useState([]);

    useEffect(()=>{
        fetch(urlProducts).then((res)=>res.json())
        .then((data)=> {
            setProduct(data)
        })
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    },[]);


return (
<>
    <div className='contanier-page p-b-100 p-lr-28'>
    <Container>
        <Row>

        <Col className='mb-3 w-auto-xScreen' lg={3} sm={4} xs={12}>
                    <div className='p-t-50'>
                        <RestShop />
                    </div>
        </Col>

        {
            loading ?
            <div className='loading loading_height contanier-page p-b-50'>
                < RotateLoader
                color={'#959595'}
                loading={loading}
                size={20}
                />
            </div>
        :
        <Col className='mb-3' lg={9} sm={8} xs={12}>
            <Row>
            {
            product.map((product)=>{
                return(
                    <Col lg={4} key={product.id}>
                        <div className='CardProduct p-t-50'>
                        
                        <div className='CardProduct_img '>
                        <img src={product.img}
                            alt={product.title} />
                        </div>
                        
                        <div className='CardProduct_addToCart CardProduct_addToCart--top'>
                        <Button 
                        className='btn_main btn_addToCart'
                        onClick={
                            ()=>{
                                dispatch(addToCart(product))
                                toast.success('Product Added Successfully', {
                                    position: "bottom-right",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    })
                            }
                            
                            }>
                        ADD
                        </Button>
                        </div>
                        
                        <div className='CardProduct_head pt-4'>
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        </div>
                        
                        </div> 
                    </Col>
                    )
                })
            }
            </Row>
        </Col>
        }

        </Row>
    </Container>
    </div>
    <Footer />
    <ToastContainer />
</>
)
}

export default ShopPage;

