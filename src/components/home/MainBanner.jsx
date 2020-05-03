import React from 'react';
import '../../styles/home/MainBanner.scss';
import mainSlideBanner_1 from './../../assets/imgs/mainSlideBanner_1.jpg';
import mainSlideBanner_2 from './../../assets/imgs/mainSlideBanner_2.jpg';
import mainSlideBanner_3 from './../../assets/imgs/mainSlideBanner_3.jpg';

class MainBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
  
    render() {
        return (
            <div className="mainSlideBanner">
                <div className="mainSlideBanner__boxImg"> 
                </div>
                
                <div className="mainSlideBanner__boxText">
                    <h1 className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque finibus lacus sit amet auctor. Proin et purus nulla. </p>
                    <div>
                        <button>Ver más</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;