import React from 'react';

const propertyBanner = () => {
    return ( 
        <div className="col-xl-12">
        <div className="property_banner">
            <div className="property_banner_active owl-carousel">
                <div className="single_property">
                    <img src="/assets/img/banner/property_details.png" alt=""/>
                </div>
                <div className="single_property">
                    <img src="/assets/img/banner/property_details.png" alt=""/>
                </div>
                <div className="single_property">
                    <img src="/assets/img/banner/property_details.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default propertyBanner;