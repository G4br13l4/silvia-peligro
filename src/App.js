import React from 'react';
import './App.scss';
import FixedNavbar from './components/common/FixedNavbar';
import MainBanner from './components/home/MainBanner';
import { Footer } from './components/common/Footer';
import { InstagramFeed } from './components/common/InstagramFeed/InstagramFeed';

function App() {
  return (
    <div className="content-wrap">
      <FixedNavbar/>
      <MainBanner/>
      <InstagramFeed/>
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
