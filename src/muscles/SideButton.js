import React from 'react';

const SideButton = (props) =>{
    var clicked = props.currentFside === props.fSide;
    const cName = "SideButton unselectable";
    const handleClick = () =>{
        props.handleSBclick(props.fSide);
    };
    return (
        <div className={cName+(clicked ? " clicked" : "")} onClick={handleClick}>
            <h4 unselectable="on">{props.fSide ? "front" : "back"}</h4>
        </div>
    )
}

export default SideButton;