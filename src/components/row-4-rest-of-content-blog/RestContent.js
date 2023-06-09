import SocialMedia from '../social-media/SocialMedia';
import './RestContent.css';


export default function RestContent() {
return (
    <div>
        <div className='RestContent_content'>
            <h4 className='m-change-1'>READ TEXT</h4>

            <p className='m-change-2'>MAY 17, 2021</p>
            <h5 className='m-change-3'>BABYSITTING</h5>

            <p className='m-change-4'>MAY 17, 2021</p>
            <h5 className='m-change-5'>FULL-TIMENANNY</h5>
        </div>

        <div className='RestContent_content RestContent_content--none mt-05'>
            <h4 className='m-change-1'>Tags</h4>
            <span>Baby</span>,
            <span>Comfort</span>,
            <span>Craft</span>,
            <span>Girl</span>,
            <span>Learning</span>,
            <span>Play</span>,<br />
            <span>Toy</span>
        </div>

        <div className='RestContent_Social'>
            <h4 className='RestContent_content-h4'>Social Media</h4>
            <SocialMedia />
        </div>

        <div className='RestContent_content mt-05'>
            <input type='search' name='search' placeholder='search'/>
        </div>
    </div>
)
}
