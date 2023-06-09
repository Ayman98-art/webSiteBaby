import SocialMedia from '../social-media/SocialMedia';

import './RestShop.css';


function RestShop() {
return (
<div className='RestShop'>
    <div className='RestShop_CATEGORIES mb-35'>
        <h3>CATEGORIES</h3>
        <ul>
            <li>Baby (5)</li>
            <li>Babysitting (5)</li>
            <li>Learning (3)</li>
            <li>Nurturing (4)</li>
            <li>Parents (3)</li>
        </ul>
    </div>

    <div className='RestShop_Read mb-35'>
        <h4 className='m-change-1'>READ TEXT</h4>

        <p className='m-change-2'>MAY 17, 2021</p>
        <h5 className='m-change-3'>BABYSITTING</h5>

        <p className='m-change-4'>MAY 17, 2021</p>
        <h5 className='m-change-5'>FULL-TIMENANNY</h5>
    </div>

    <div className='RestShop_social mb-35'>
        <h4 className='RestShop_social--h4'>Social Media</h4>
        <SocialMedia />
    </div>

    <div className='mt-5 RestContent_content RestShop_sreach mb-35'>
        <input type='search' name='search' placeholder='search'/>
    </div>

</div>
)
}

export default RestShop;