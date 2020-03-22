import React from 'react';
import './ToggleHandler.css';

const ToggleHandler = (props) => {
    return (
        <div onClick={props.clicked} className="DrawerToggle" >
            <div></div>
            <div></div>
            <div></div>
        </div >
    )
}

export default ToggleHandler;
