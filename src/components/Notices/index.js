import React from 'react';
import Plantio from '../../assets/plantio.png';
import {BsArrowRightShort} from 'react-icons/bs';
import './Notices.css';

const Notices = (props) => {
    return (  
        <div>
        <div className='plantio'>
            {props.children}
            <img src={Plantio} alt="plantio" />
        </div>
        <div className='container_notices'>
            <h1 className='data'>27 - 07 - 2020</h1>
            <h1 className='notice_title'>{props.noticetitle}</h1>
            <h1 className='ver_mais'>Ver mais</h1>
            <BsArrowRightShort className='arrow'></BsArrowRightShort>
        </div>
        </div>
    );
}
 
export default Notices;