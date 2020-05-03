import React from 'react';
import './App.scss';
import FixedNavbar from './components/shared/FixedNavbar';
import MainBanner from './components/home/MainBanner';

function App() {
  return (
    <div className="content-wrap">
      <FixedNavbar/>
      <MainBanner/>
    </div>
      
  );
}

export default App;
