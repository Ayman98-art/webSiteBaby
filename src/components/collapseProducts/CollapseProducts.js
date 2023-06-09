import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../rtk/slice/ProductSlice';
import CardProduct from '../productsHome/CardProduct';
import RotateLoader from "react-spinners/RotateLoader";


function CollapseProducts() {

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const products = useSelector((state) => state.products);

    useEffect(() => {
        setLoading(true)
        dispatch(fetchProducts());
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [dispatch]);


    return (

        <>
        {
        loading ?
            <div className='loading contanier-page p-b-50'>
                < RotateLoader
                color={'#959595'}
                loading={loading}
                size={20}
                />
            </div>
        :
        <div className='contanier-page p-b-100'>
            <Container>
                <Row>
                        {products.map((product) => (
                        <Col className='mb-3' lg={3} key={product.id}>
                            <CardProduct product={product} />
                        </Col>
                        ))}
                </Row>
            </Container>
        </div>
        }
        </>



    );
}

export default CollapseProducts;