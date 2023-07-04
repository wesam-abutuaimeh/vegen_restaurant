import React, { Component } from "react";
import "./style.css";

class Image extends Component {

    render() {
        return (<img src={this.props.src} alt={this.props.title} title={this.props.title} />);
    }
}

export default Image;
