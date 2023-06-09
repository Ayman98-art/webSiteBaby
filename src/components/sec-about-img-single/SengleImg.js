import './SengleImg.css';

function SengleImg(props) {
return (
        <div className='SengleImg'>
            <div className='sengle-img'>
                <img src={props.img} alt='about-img'/>
            </div>
        </div>
)
}

export default SengleImg;