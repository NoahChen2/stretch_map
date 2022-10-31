import React/*  , { useState }  */from 'react';

function RenderM(props) {

    function handleClick(e) {
        const mPos = {
            x: e.clientX,
            y: e.clientY,
        }
        props.handleClick(props.mName, props.description, mPos);
    }

    return (
        React.createElement(
            props.pic,
            {style: props.mStyle,
                alt: props.mName,
                onClick: handleClick},
            null
        )
    );
}

export default RenderM;