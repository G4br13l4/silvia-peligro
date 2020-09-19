import React from 'react';
import FixedNavbar from '../Common/FixedNavbar/FixedNavbar';
import MainBanner from '../HomePage/MainBanner';
import InstagramFeed from '../Common/InstagramFeed/InstagramFeed';
import Footer from '../Common/Footer/Footer';
  
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
