import React, { Component } from 'react';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header-area ">
            <div className="header-top_area d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-5 ">
                            <div className="header_left">
                                <p>Welcome to Bomi Africa</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-7">
                            <div className="header_right d-flex">
                                    <div className="short_contact_list">
                                            <ul>
                                                <li><a href="#"> <i className="fa fa-envelope"></i>bomiafrica@gmail.com</a></li>
                                                <li><a href="#"> <i className="fa fa-phone"></i>+2347034756746</a></li>
                                            </ul>
                                        </div>
                                        <div className="social_media_links">
                                            <a href="#">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id="sticky-header" className="main-header-area">
                <div className="container">
                    <div className="header_bottom_border">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-2">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="/assets/img/logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a className="active" href="index.html">home</a></li>
                                            <li><a href="#">pages <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                        <li><a href="about.html">about</a></li>
                                                        <li><a href="property_details.html">property details</a></li>
                                                        <li><a href="elements.html">elements</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="Property.html">Property</a></li>
                                            <li><a href="#">blog <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="single-blog.html">single-blog</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href=".html">Login</a></li>
                                            <li><a href="contact.html">Signup</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="Appointment">
                                    <div className="search_btn">
                                        <a href="#">
                                            <i className="ti-search"></i>
                                        </a>
                                    </div>
                                    <div className="book_btn d-none d-lg-block">
                                        <a  href="#">Add Property</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
         );
    }
}
 
export default Header;
