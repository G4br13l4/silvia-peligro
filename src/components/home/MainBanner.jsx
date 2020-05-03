import React from 'react';
import '../../styles/home/MainBanner.scss';
import mainSlideBanner_1 from './../../assets/imgs/mainSlideBanner_1.jpg';
import mainSlideBanner_2 from './../../assets/imgs/mainSlideBanner_2.jpg';
import mainSlideBanner_3 from './../../assets/imgs/mainSlideBanner_3.jpg';
import rhombusIcon from './../../assets/icons/rhombus-icon.svg';

class MainBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
  
    render() {
        return (
            <div className="mainSlideBanner">
                <div style={{backgroundImage: `url(${mainSlideBanner_1})` }} className="mainSlideBanner__boxImg"> 
                </div>
                <div className="mainSlideBanner__txtBox">
                    <h1 className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque finibus lacus sit amet auctor. Proin et purus nulla. </p>
                    <div>
                        <button className="see-more-btn"><span>Ver más</span></button>
                    </div>
                </div>
                <div className="mainSlideBanner__icons">
                    <div className="rhombus">
                        <img src={rhombusIcon}/>
                        <img src={rhombusIcon}/>
                        <img src={rhombusIcon}/>
                    </div>
                    <div className="arrows">
                        <i class="material-icons">navigate_before</i>
                        <i class="material-icons">navigate_next</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;