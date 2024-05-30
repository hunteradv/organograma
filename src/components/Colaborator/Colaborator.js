import './Colaborator.css';

export const Colaborator = ({name, image, role, backgroundColor }) => {
    return (
        <div className='colaborator'>
            <div className='header' style={{ backgroundColor: backgroundColor }}>
                <img src={image} alt={name}/>
            </div>

            <div className='footer'>
                <h4>{ name }</h4>
                <h5>{ role }</h5>
            </div>    
        </div>
    )
}