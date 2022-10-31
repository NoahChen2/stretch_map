import React, { useState, useEffect, useRef } from 'react';
import X from './X.js';

function TextBox(props) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [mName, setmName] = useState(null);
    const [topVal, settopVal] = useState(null);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.handleoutsideClick();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const ref = useRef(null);
  useOutsideAlerter(ref);

  const myStyle = {
    opacity: props.invis,
    zIndex: props.layer,
    left: props.x,
  };
  if (!(props.name === mName)){
    settopVal(props.y+scrollPosition);
    setmName(props.name);
  }
  Object.assign(myStyle, {top: topVal});
  return (
    <div className="TextBox" style={myStyle} ref={ref}>
      <div className="inTextBox">
        <X closeTB={props.hideTB}/>
        <h2 className="TextText">{props.name}</h2>
        <h3 className="TextText">
          <a className="TextText" href={props.searchLink} target="_blank" rel="noreferrer">Search</a> for stretches online
        </h3>
      </div>
    </div >
  )
}

export default TextBox;