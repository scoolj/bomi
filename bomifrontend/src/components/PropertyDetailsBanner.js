import React from 'react';

const propertyDetailsBanner = () => {
    return ( 
        <div className="property_details_banner">
        <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-8 col-lg-6">
                        <div className="comfortable_apartment">
                            <h4>Comfortable Apartment in Palace</h4>
                            <p> <img src="/assets/img/svg_icon/location.svg" alt=""/> 200/A, Greenland, Texaro, USA</p>
                            <div className="quality_quantity d-flex">
                                <div className="single_quantity">
                                    <img src="/assets/img/svg_icon/color_box.svg" alt=""/>
                                    <span>1200 Sqft</span>
                                </div>
                                <div className="single_quantity">
                                    <img src="/assets/img/svg_icon/color_bed.svg" alt=""/>
                                    <span>2 Bed</span>
                                </div>
                                <div className="single_quantity">
                                    <img src="/assets/img/svg_icon/color_bath.svg" alt=""/>
                                    <span>2 Bath</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-4 col-lg-6">
                        <div className="prise_quantity">
                            <h4>$4567</h4>
                            <a href="#">+10 367 457 735</a>
                        </div>
                    </div>
                </div>
            </div>
</div>
     );
}
 
export default propertyDetailsBanner;