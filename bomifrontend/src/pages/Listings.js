import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import SliderArea from "../components/SliderArea";
import PopularPropertyPlusPadding from "../components/PopularPropertyPlusPadding";
import ContactActionArea from "../components/ContactActionArea";

const listings = () => {
    return ( 
      <frameElement>
            <SliderArea />
            <PopularPropertyPlusPadding />
            <ContactActionArea />
      </frameElement>
     );
}
 
export default listings;