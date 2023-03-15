import { useState } from 'react';


import Language from './components/Language';
import Content from './components/content';
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
   <Content count={count} openPopup={handleOpenPopup}/>
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