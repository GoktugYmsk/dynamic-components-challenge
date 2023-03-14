import React from 'react';
import './App.css';
import Language from './components/Language';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='ustBar'>
          <p>1</p>
          <hr className='usthr' />
        </div>
        <div className='altBar' >

          <hr className='lefthr' />
          <p className='term' >TERİM</p>
          <hr className='righthr' />
          <p className='description' >TANIM</p>
          <p className='languageLeft' >Dil seç</p>
          <p className='languageRight' >Dil seç</p>
        </div>
      </div>
      <Language/>
    </div>
  );
}

export default App;
