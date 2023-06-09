import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { clearCart, decreaseProduct, increaseProduct, removeFromCart } from '../../rtk/slice/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LookFor from '../../components/looking-for/LookFor';


import './CartPage.css';


function CartPage() {

    const dispatch = useDispatch();

    const cart = useSelector((state)=>state.cart)

    const total = cart.reduce((acc, product)=>{
        acc+=product.price * product.qt;
        return acc;
    },0)


    if (cart.length === 0) {
        return (
            <LookFor />
        )
    }



    return (
    <div className='contanier-page p-t-100'>

    <div className='text-center mb-70'>
    <Button className='btn-danger'
        onClick={()=>{dispatch(clearCart())}}>
        Clear Products
    </Button>
    </div>

    <Table striped bordered hover>
    <thead>
        <tr className='text-center trTable-product'>
            <th>id</th>
            <th>price</th>
            <th>total price for product</th>
            <th>brand</th>
            <th>Qt</th>
            <th>remove product</th>
        </tr>
    </thead>

    <tbody>
    {
    cart.map((element)=>{
    return(
    <tr key={element.id} className='trTable'>

    <td>{element.id}</td>
    <td>{element.price}</td>
    <td><img style={{width:"215px",height:"215px"}} src={element.img} alt={element.title} /></td>
    <td>{element.price * element.qt}</td>
    <td>{element.title}</td>
        <td className='tdBtn'>
        <Button 
        onClick={()=>{
            dispatch(increaseProduct(element))
            toast.success("Your Product Increas One Successfully",
            {
                position:'bottom-right'
            }
            )
        }} 
        className='bg-success'
        >+</Button>
        <h4 className='py-3 h4_style'>{element.qt}</h4>
        <Button 
        onClick={()=>{
            dispatch(decreaseProduct(element))
            toast.warn("Your Product Dencreas One Successfully",
            {
                position:'bottom-right'
            })
        }} 
        className='bg-dark'
        >-</Button>
        </td>

    <td>
    <Button className='bg-danger mt-30'
    onClick={()=>{dispatch(removeFromCart(element))}}>
    Delete
    </Button>
    </td>

    </tr>
    )
    })
    }
    </tbody>
    </Table>

    <div className='Total_Price text-center p-b-100 mt-70'>
        <h2>Total Price: <span>{total}</span></h2>
    </div>

    <ToastContainer limit={8}/>
    </div>
)
}

export default CartPage;
