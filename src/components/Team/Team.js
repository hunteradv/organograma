import Colaborator from '../Colaborator';
import './Team.css';

export const Team = (props) => {
    console.log();
    return (
        (props.contributors.length > 0) ? <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{ props.name }</h3>
            <div className='contributors'>
            {props.contributors.map(contributor => <Colaborator key={contributor.name} name={ contributor.name } role={ contributor.role } image={ contributor.image } backgroundColor={ props.primaryColor }/>)}
            </div>        
        </section> 
        : ''
    );
}