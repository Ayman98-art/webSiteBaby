import { Link } from 'react-router-dom'
import './BabyVideo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'

export default function BabyVideo() {
return (
    <div className='contanier-page'>
        <div className='BabyVideo-img'>
            <h3>Love Of Babies</h3>
            <Link to={"https://youtu.be/kwzysD78h2o"} target={'_blank'}>
            <FontAwesomeIcon
            icon={faVideo}
            fade
            size="2xl"
            style={{color: "#262627",}} />
            </Link>
        </div>
    </div>
)
}
