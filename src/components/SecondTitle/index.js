import './SecondTitle.css';

import React from 'react';

const SecondTitle = (props) => {
    return ( 
        <h1 className={props.classNameSecond}>{props.secondtitle}</h1>
     );
}
 
export default SecondTitle;