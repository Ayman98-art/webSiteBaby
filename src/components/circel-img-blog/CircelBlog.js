import circle from '../../images/images-blog/circle.webp';
import './CircelBlog.css';

export default function CircelBlog() {
return (
    <div className='all-CircelBlog'>
        <div className='CircelBlog'>
            <img src={circle} alt='CircelBlog-img'/>
        </div>

        <div className='CircelBlog_text'>
            <h3>ABOUT AUTOR</h3>
            <p>Proin rhoncus ex dui vel lupus urna ex vitae ac et.</p>
        </div>

        <div className='CircelBlog_text'>
            <h3>CATEGORIES</h3>
            <ul>
                <li>Baby (5)</li>
                <li>Babysitting (5)</li>
                <li>Learning (3)</li>
                <li>Nurturing (4)</li>
                <li>Parents (3)</li>
            </ul>
        </div>

    </div>
)
}