import './RowImg.css'


function RowImg(props){
return(
    <>
        <div className="bg-light-img">
            <div className="chracterImg">
                <img src={props.chracterImg} alt="Chracter-Img"/>
            </div>
        </div>
    </>
)
}

export default RowImg;