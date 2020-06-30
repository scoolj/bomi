import React from 'react';

const counterArea = () => {
    return ( 
        <div className="counter_area">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-4">
                    <div className="single_counter">
                        <h3> <span  className="counter" >200</span> <span>+</span> </h3>
                        <p>Properties for sale</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_counter">
                        <h3> <span className="counter" >300</span></h3>
                        <p>Properties for sale</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_counter">
                        <h3> <span className="counter" >15</span></h3>
                        <p>Properties for sale</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

     );
}
 
export default counterArea;