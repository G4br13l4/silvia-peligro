import React from 'react';
import './App.scss';
import FixedNavbar from './components/shared/FixedNavbar';
import MainBanner from './components/home/MainBanner';

function App() {
  return (
    <div className="content-wrap">
      <FixedNavbar/>
      <MainBanner/>
      <div>
        <h3>Talleres</h3>
        <div className="workshops-cards">
          
        </div>
        <div>
          <button>Ver todo</button>
        </div>
      </div>
    </div>
      
  );
}

export default App;
