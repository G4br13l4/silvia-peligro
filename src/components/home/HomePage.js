import React from 'react';
import FixedNavbar from '../common/FixedNavbar/FixedNavbar';
import MainBanner from '../home/MainBanner';
import InstagramFeed from '../common/InstagramFeed/InstagramFeed';
import Footer from '../common/Footer/Footer';
  
const HomePage = props => {
    return (
      <>
        <FixedNavbar />
        <MainBanner />
        <InstagramFeed />
        <Footer />
      </>
    );
}       

export default HomePage;
