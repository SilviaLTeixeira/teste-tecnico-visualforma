import Hora from '../../assets/Hora.png';
import Local from '../../assets/Localizaçao.png';

import './Events.css';

const Events = (props) => {
    return ( 
        <div>
            <div className={props.classNameContainer}>
                <img id= "date_events" src={props.ImageEvents} alt="eventos"/>
            </div>
            <div className={props.classNameContainer2}>
                <h1 className={props.classNameColor}>{props.titulo}</h1>
                <h1 className='text_events'>Concurso de Poesia Versos Entrelaçados</h1>
                <img id = "local" src={Local} alt = "Localizaçao"/>
                <h3 className='local'>Local do Evento</h3>
                <img id="hora" src={Hora} alt="hora"/>
                <h3 className='hora'>10h30</h3>
            </div>
        </div>
     );
}
 
export default Events;