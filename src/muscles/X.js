import React from "react";

const X = (props) => {
    const handleClick = () => {
        props.closeTB();
    }
    return (
        <button className="X" onClick={handleClick}><span className="center">X</span></button>
    );
};

export default X;