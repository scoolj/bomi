import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BradcamArea from "../components/BradcamArea";
import BlogSection from "../components/BlogSection";

class Blog extends Component {
    state = {  }
    render() { 
        return ( 
            <frameElement>
                <BradcamArea />
                <BlogSection />
            </frameElement>
         );
    }
}
 
export default Blog;