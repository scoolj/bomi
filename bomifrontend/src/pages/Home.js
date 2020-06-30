import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SliderArea from "../components/SliderArea";
import CardPopularProperty from "../components/CardPopularProperty";
import HomeDetails from "../components/HomeDetails";
import Accordion from "../components/Accordion";
import CounterAreas from "../components/CounterAreas";
import TestimonialAreaOverlay from "../components/TestimonialAreaOverlay";
import TeamArea from "../components/TeamArea";

class Home extends Component {
  state = {};
  render() {
    return (
      <div >
        <SliderArea />
        <CardPopularProperty />
        <HomeDetails />
        <Accordion />
        <CounterAreas />
        <TestimonialAreaOverlay />
         </div>
    );
  }
}

export default Home;
