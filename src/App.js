import { useState } from 'react';

import Language from './components/Language';

import './App.css';


function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [count, setCount] = useState(1);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleAddContainer = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      {Array.from({ length: count }, (_, i) => (
        <div className="container" key={`container-${i}`}>
          <div className="ustBar">
            <p className='containerNumber' >{i + 1}</p>
            <hr className="usthr" />
          </div>
          <div className="altBar">
            <input className="leftInput" placeholder="yaz" />
            <hr className="lefthr" />
            <p className="term">TERİM</p>
            <hr className="righthr" />
            <p className="description">TANIM</p>
            <p onClick={handleOpenPopup} className="languageLeft">
              Dil seç
            </p>
            <p onClick={handleOpenPopup} className="languageRight">
              Dil seç
            </p>
            <input className="rightInput" placeholder="yaz" />
          </div>
        </div>
      ))}
      <div className='addButton' >
        <p className='buttonCount' >{count + 1}</p>
        <div className='addPart' >
          <button className="add" onClick={handleAddContainer}>
            + Kart Ekle
          </button>
          <hr className='buttonHr' />
        </div>
      </div>
      <Language
        handleOpenPopup={handleOpenPopup}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
    </div>
  );
}
export default App;