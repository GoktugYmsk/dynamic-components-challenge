import { useState, useEffect } from 'react';
import Header from './components/header';
import Content from './components/content';
import Language from './components/Language';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [count, setCount] = useState(1);
  const [headerActive, setHeaderActive] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleAddContainer = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const headerVisible = currentScrollY > 0;
      setHeaderActive(headerVisible);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {headerActive && <Header />}
      <Content count={count} openPopup={handleOpenPopup} />
      <div className="addButton">
        <p className="buttonCount">{count + 1}</p>
        <div className="addPart">
          <button className="add" onClick={handleAddContainer}>
            + Kart Ekle
          </button>
          <hr className="buttonHr" />
        </div>
      </div>
      <Language
        handleOpenPopup={handleOpenPopup}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
      <button className="create">Oluştur</button>
    </div>
  );
}

export default App;
