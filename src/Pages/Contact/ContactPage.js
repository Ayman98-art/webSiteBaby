import Footer from '../../components/footer/Footer';
import PropsTree from '../../components/props-tree-content/PropsTree';
import SubImgPage from '../../components/ContactImg/SubImgPage';
import SectionForm from '../../components/form/SectionForm';
import MapPlusInfoContact from '../../components/mapPlusInfoContact/MapPlusInfoContact';

import'./ContactPage.css';


function ContactPage() {
return (
    <>

        <div className='contanier-page p-b-50'>
            <div className='conatct-img'>
                <SubImgPage title={'contact'}/>
            </div>
        </div>
        <PropsTree
        name_page={'CONTACT'}
        content_name_page={'Etiam congue nec purus ac porttitor class aptent taciti ad litora per conubia nostra'}
        />
        <SectionForm />
        <MapPlusInfoContact />
        <PropsTree
        name_page={'INSTAGRAM'}
        content_name_page={'follow us'}
        />
        <Footer />

    </>
)
}

export default ContactPage;