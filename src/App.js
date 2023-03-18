import { useState, useEffect } from 'react';

import Header from './components/header';
import Content from './components/content';
import Language from './components/language';
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
      <Content count={count} openPopup={handleOpenPopup} handleAddContainer={handleAddContainer} />
      <Language
        handleOpenPopup={handleOpenPopup}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
    </div>
  );
}

export default App;
