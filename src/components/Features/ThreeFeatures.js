import './ThreeFeatures.css'


export default function ThreeFeatures(props) {
return (
    <div className='feature'>
            <div className='feature_icon'>
                {props.icon}
            </div>
            <h4 className='feature_heading3'>
                {props.heading3}
            </h4>
            <p className='feature_paregraf'>
                {props.para}
            </p>
    </div>
)
}