import './group-img.css';

function GroupImgs(props) {
return (
    <>
        <div className="group-content">

            <div className="group-content_img">
                < img src={props.img} alt="grow-with-us-img"/>
            </div>
            
            <button type="submit" className='btn_main btn-img'>
                {props.btn}
            </button>

        </div>
    </>
)
}

export default GroupImgs;