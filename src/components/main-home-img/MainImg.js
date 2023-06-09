import mainImg from '../../images/main-home.webp';
import ContentMain from '../ContentMain/ContentMain';
import './mainImg.css';


function MainImg() {
  return (
    <>
    <div className='mainImg'>
      <img className='subImg' src={mainImg} alt='main-home'/>
    </div>
    <ContentMain />
    </>
  )
}

export default MainImg;