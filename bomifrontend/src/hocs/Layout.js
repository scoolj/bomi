import React from 'react';
import Header from  '../components/Header'
import Footer from '../components/Footer'
const layout = (props) => {
    return ( 
        <div>
         <Header />
        {props.children}
        <Footer/>  
        </div>
        
     );
}
 
export default layout;