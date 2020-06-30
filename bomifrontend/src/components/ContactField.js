import React from 'react';

const contactField = () => {
    return ( 
        <div className="contact_field">
        <h3>Contact Us</h3>
        <form action="#">
                <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="col-xl-12">
                            <input type="number" placeholder="Phone no." />
                        </div>
                        <div className="col-xl-12">
                           <textarea name="" id="" cols="30" rows="10" placeholder="Message" ></textarea>
                        </div>
                        <div className="col-xl-12">
                            <div className="send_btn">
                                <button type="submit" className="send_btn">Send</button>
                            </div>
                        </div>
                    </div>
        </form>
    </div>
     );
}
 
export default contactField;