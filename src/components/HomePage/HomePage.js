import React from 'react';
import FixedNavbar from '../Common/FixedNavbar/FixedNavbar';
import MainBanner from '../HomePage/MainBanner';
import InstagramFeed from '../Common/InstagramFeed/InstagramFeed';
import IGTV from '../Common/IGTV/IGTV';
import Footer from '../Common/Footer/Footer';

const HomePage = props => {
    return (
      <>
        <FixedNavbar />
        <MainBanner />
        <InstagramFeed 
          accountName="@speligro"
          accountLink="https://www.instagram.com/speligro/"
          token={process.env.REACT_APP_INSTA_TOKEN_SP}
        />
        <IGTV />
        <Footer />
      </>
    );
}       

export default HomePage;
