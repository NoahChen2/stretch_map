import './App.css';
import MusclesRender from './muscles/MusclesRender';
import React, { useState } from 'react';
import TextBox from ".//muscles/TextBox.js";
import SideButton from ".//muscles/SideButton.js";

function App() {
  const [elementState, setElementState] = useState([false, null, null, null, null, null]);
  const [cClick, setcClick] = useState(false);
  const [cName, setcName] = useState(null);
  const [frontSide, setFrontSide] = useState(true);

  const [tbOpacity, settbOpacity] = useState(0);
  function outsideClick() {
    setcClick(false);
    settbOpacity(0);
  }

  const SBclick = fSideC => {
    if (fSideC) {
      if (!frontSide) {
        setFrontSide(true);
      }
    }
    else {
      if (frontSide) {
        setFrontSide(false);
      }
    }
  }

  const child2Click = (name, description, mPos, webLink, searchLink) => {
    setElementState([true, name, description, mPos.x, mPos.y, webLink, searchLink]);
    settbOpacity(1);
    setcClick(true);
    setcName(name);
  }
    return (
      <div>
        <TextBox hideTB={outsideClick} layer={(tbOpacity - .5) * 1000000000} invis={tbOpacity} name={elementState[1]} description={elementState[2]}
          x={elementState[3]} y={elementState[4]} webLink={elementState[5]}
          searchLink={elementState[6]} handleoutsideClick={outsideClick} />
        <div className="container">
          <div className="title">
            <h1><span style={{color: "#410076"}}>S</span><span>tretch&nbsp;</span><span style={{color: "#197278"}}>M</span><span>ap</span></h1>
          </div>
          <div className="content">
            <div className="SideButtonContainer">
              <SideButton side={"front"} fSide={true} currentFside={frontSide} handleSBclick={SBclick} />
              <SideButton side={"back"} fSide={false} currentFside={frontSide} handleSBclick={SBclick} />
            </div>
            <MusclesRender handleChildClick={child2Click} isClicked={cClick} clName={cName} fSide={frontSide} />
          </div>
        </div>
      </div>
    );
  }


export default App;