import { Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../rtk/slice/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CardProduct.css';

export default function CardProduct({product}) {
    const dispatch = useDispatch();

    return (
    <>
<div className='CardProduct cursour'>

    <div className='CardProduct_img'>
        <img src={product.img} alt='product' />
    </div>

    <div className='CardProduct_addToCart'>
        <Button className='btn_main btn_addToCart'
        onClick={
            ()=>{
                dispatch(addToCart(product))
                toast.success('Product Added Successfully', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }}>
        ADD
        </Button>
    </div>

    <div className='CardProduct_head pt-4'>
        <h3>{product.title}</h3>
        <p>{product.price} $$</p>
    </div>

</div>
<ToastContainer limit={8}/>

    </>
)
}