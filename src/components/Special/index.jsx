import React from "react";
import SectionHeader from "../SectionHeader";
import Features from "./Features";
import "./style.css";

class Special extends React.Component {
  render() {
    return (
      <div className="special">
        <div className="container">
          <SectionHeader
            className="center"
            header="Special"
            subHeader="What makes us special"
          />
          <div className="features__container">
            <Features />
          </div>
        </div>
      </div>
    );
  }
}
export default Special;
