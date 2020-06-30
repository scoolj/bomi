import React, { Component } from "react";
import SliderArea from "../components/SliderArea";
import Accordion from "../components/Accordion";
import CounterAreas from "../components/CounterAreas";
import TestimonialAreaOverlay from "../components/TestimonialAreaOverlay";
import TeamArea from "../components/TeamArea";
import BradcamArea from "../components/BradcamArea";
import MissionSection from "../components/MissionSection";

class About extends Component {
  state = {};
  render() {
    return (
      <frameElement>
        <SliderArea />
        <BradcamArea />
        <MissionSection />
        <Accordion />
        <CounterAreas />
        <TestimonialAreaOverlay />
        <TeamArea />
      </frameElement>
    );
  }
}

export default About;
