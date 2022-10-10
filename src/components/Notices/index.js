import React from 'react';
import Plantio from '../../assets/plantio.png';
import {BsArrowRightShort} from 'react-icons/bs';
import './Notices.css';

const Notices = (props) => {
    return (  
        <div>
        <div className={props.classNamePlantio}>
            {props.children}
            <img id = "plantio" src={Plantio} alt="plantio" />
        </div>
        <div className={props.classNameNotices}>
            <h1 className={props.classNameData}>27 - 07 - 2020</h1>
            <h1 className='notice_title'>{props.noticetitle}</h1>
            <h1 className={props.classNameVer}>Ver mais</h1>
            <BsArrowRightShort className='arrow'></BsArrowRightShort>
        </div>
        </div>
    );
}
 
export default Notices;