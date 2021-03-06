import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import FixedNavbar from '../Common/FixedNavbar/FixedNavbar';
import { SmartModal } from '../Common/SmartModal';
import Footer from '../Common/Footer/Footer';
import HomePage from '../HomePage';
import ProductsPage from '../ProductsPage/ProductsPage';
import KitsPage from '../ProductsPage/Kits/KitsPage';
import KitsDetail from '../ProductsPage/Kits/KitsDetail';
import ShippingPage from '../Shipping/ShippingPage';
import LocalShipping from '../Shipping/Local/LocalShipping';
import NationalShipping from '../Shipping/National/NationalShipping';
import CoursesPage from '../CoursesPage/CoursesPage';
import EventsPage from '../EventsPage/EventsPage';
import ClubPage from '../ClubPage/ClubPage';
import IGTV_Page from '../IGTV_Page/IGTV_Page';
import NotFound from '../ErrorPages/NotFoundPage';
import { ModalInterface } from '../../interfaces';
import { closeModalAction } from '../../redux/actions';
import './MainContainer.scss';

export interface MainContainerProps {
  //Own Props
  t: any;
  location: any;
  //State
  modalState: ModalInterface;
  //Actions
  closeModal: closeModalAction;
}

export const MainContainer = (props: MainContainerProps) => {
  const {
    //Own Props
    t,
    location,
    //State
    modalState: { modalVisible },
    //Actions
    closeModal
  } = props;

  useEffect(() => {
    scrollTop();
  },[location]);

  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="homePage">
      <FixedNavbar />
      {modalVisible ? <SmartModal/> : null}
      <div className="content-wrap">
      <Switch>
        <Route exact path="/silvia-peligro" component={HomePage} />
        <Route exact path="/"  component={HomePage} />
        <Route path="/products/kits/:type" component={KitsDetail} />
        <Route path="/products/kits" component={KitsPage} />
        <Route path="/products" component={ProductsPage}/>
        <Route path="/shipping/cdmx" component={LocalShipping}/>
        <Route path="/shipping/national" component={NationalShipping}/>
        <Route path="/shipping" component={ShippingPage}/>
        <Route path="/courses" component={CoursesPage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/club" component={ClubPage} />
        <Route path="/igtv" component={IGTV_Page} />
        <Route component={NotFound} />
      </Switch>
    </div>
      <Footer />
    </div>
  );
} 


 

