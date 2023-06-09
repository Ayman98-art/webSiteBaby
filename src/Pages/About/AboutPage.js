import ImgDetails from "../../components/row-img-details/ImgDetails";
import Footer from "../../components/footer/Footer";
import DataFeatures from "../../components/dateFeaturs/DataFeatures";
import BabyVideo from "../../components/baby-video/BabyVideo";
import SeparateImgs from "../../components/sec-about-img/SeparateImgs";
import TextAbout from "../../components/about-text/TextAbout";
import SubImgPage from '../../components/ContactImg/SubImgPage';

import './AboutPage.css';

function AboutPage() {
return (
    <>
        <div className="contanier-page">
            <div className='about-img '>
                <SubImgPage title={'about'}/>
            </div>
        </div>
        <TextAbout />
        <SeparateImgs />
        <DataFeatures />
        <BabyVideo />
        <ImgDetails />
        <Footer/>
    </>
)
}

export default AboutPage;