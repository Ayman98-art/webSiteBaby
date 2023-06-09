import CollapsingImg from '../../components/collapse-img/CollapsingImg';
import CollapseProducts from '../../components/collapseProducts/CollapseProducts';
import DataFeatures from '../../components/dateFeaturs/DataFeatures';
import Footer from '../../components/footer/Footer';
import MainImg from '../../components/main-home-img/MainImg';
import PropsTree from '../../components/props-tree-content/PropsTree';
import ImgDetails from '../../components/row-img-details/ImgDetails';


function HomePage() {
    return (
    <>
        <MainImg />
        <DataFeatures />
        <CollapsingImg />
        <PropsTree
        name_page={'NEW ARRIVALS'}
        content_name_page={'Morbi mattis leo nunc vel congue ante eu nam rutrumleo et mollis massa dictum tellus'}
        />
        <CollapseProducts />
        <ImgDetails />
        <PropsTree
        name_page={'INSTAGRAM'}
        content_name_page={'follow us'}
        />
        <Footer />
    </>
    )
}

export default HomePage;