import React from 'react';
import './App.scss';
import FixedNavbar from './components/shared/FixedNavbar';
import MainBanner from './components/home/MainBanner';
import { Footer } from './components/shared/Footer';

function App() {
  return (
    <div className="content-wrap">
      <FixedNavbar/>
      <MainBanner/>
      <div style={{width: '100vw', height: '50vh', gridRow: '13/auto'}}>
         
      </div>
      {/* <div>
        <h3>Talleres</h3>
        <div className="workshops-cards">
          
        </div>
        <div>
          <button>Ver todo</button>
        </div>
      </div> */}
      <Footer/>
    </div>
      
  );
}

export default App;
