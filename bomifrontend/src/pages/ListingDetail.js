import React from 'react';
import PropertyDetailsBanner from "../components/PropertyDetailsBanner";
import PropertyDetails from "../components/PropertyDetails";
import ContactActionArea from "../components/ContactActionArea";
const listingDetail = () => {
    return ( 
        <frameElement>
            <PropertyDetailsBanner />
            <PropertyDetails />
            <ContactActionArea />
        </frameElement>
     );
}
 
export default listingDetail;