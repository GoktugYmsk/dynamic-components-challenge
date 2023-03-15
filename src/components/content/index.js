import React, { useState } from 'react';
import { AiOutlinePicture } from 'react-icons/ai';
import './index.css';

function Content({ count, openPopup }) {
  const [inputActiveStates, setInputActiveStates] = useState(Array.from({ length: count }, () => false));

  const setInputActive = (index, value) => {
    setInputActiveStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = value;
      return newStates;
    });
  };

  return (
    <>
      {Array.from({ length: count }, (_, i) => {
        const isLeftInputActive = inputActiveStates[i * 2];
        const isRightInputActive = inputActiveStates[i * 2 + 1];

        return (
          <div className="container" key={`container-${i}`}>
            <div className="ustBar">
              <p className="containerNumber">{i + 1}</p>
              <hr className="usthr" />
            </div>
            <div className="altBar">
              <input
                className="leftInput"
                onClick={() => setInputActive(i * 2, true)}
                onBlur={() => setInputActive(i * 2, false)}
              />
              <hr className={`lefthr ${isLeftInputActive ? 'hrColor' : ''}`} />
              <p className="term">TERİM</p>
              <hr className={`righthr ${isRightInputActive ? 'hrColor' : ''}`} />
              <p className="description">TANIM</p>
              <p onClick={openPopup} className="languageLeft">
                Dil seç
              </p>
              <p onClick={openPopup} className="languageRight">
                Dil seç
              </p>
              <input
                className="rightInput"
                onClick={() => setInputActive(i * 2 + 1, true)}
                onBlur={() => setInputActive(i * 2 + 1, false)}
              />
              <div className="picturePart">
                <AiOutlinePicture className="pictureIcon" />
                <p>Resim</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Content;
