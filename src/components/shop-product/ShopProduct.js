import { Button } from 'react-bootstrap';
import { addToCart } from '../../rtk/slice/CartSlice';
import { useDispatch } from 'react-redux';


import './ShopProduct.css';


function ShopProduct(product) {


const dispatch = useDispatch();

return (
<>
    <div className='CardProduct'>
    
        <div className='CardProduct_img'>
            <img src={product.image} alt={product.title} />
        </div>
    
        <div className='CardProduct_addToCart'>
            <Button className='btn_main btn_addToCart'
            onClick={()=>{dispatch(addToCart(product))}}
        >
            ADD
            </Button>
        </div>
    
        <div className='CardProduct_head pt-4'>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
        </div>
    
    </div>
</>
)
}

export default ShopProduct;