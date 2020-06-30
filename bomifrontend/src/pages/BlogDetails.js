import React, { Component } from 'react';
import BradcamArea from "../components/BradcamArea";
import SinglePostSection from "../components/SinglePostSection";

class BlogDetails extends Component {
    state = {  }
    render() { 
        return ( 
            <frameElement>
            <BradcamArea />
            <SinglePostSection />
        </frameElement>
         );
    }
}
 
export default BlogDetails;