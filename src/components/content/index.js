import React, { useState } from 'react';

import Explanation from '../explanation';
import Ustbar from './ustBar/İndex';
import AltBar from './altBar/İndex';
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
      <Explanation />
      {Array.from({ length: count }, (_, i) => {
        const isLeftInputActive = inputActiveStates[i * 2];
        const isRightInputActive = inputActiveStates[i * 2 + 1];

        return (
          <div className="container" key={`container-${i}`}>
            <Ustbar i={i} />
           <AltBar setInputActive={setInputActive} openPopup={openPopup} i={i} isLeftInputActive={isLeftInputActive} isRightInputActive={isRightInputActive} />
          </div>
        );
      })}
    </>
  );
}

export default Content;
