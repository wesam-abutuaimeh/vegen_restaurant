import React from "react";
import "./style.css";

class CTA extends React.Component {
    render() {
        return <button className="cta__btn" style={this.props.className === "center" ? { display: 'block', textAlign: "center", margin: "0 auto" } : null } >{this.props.title}</button>;
    }
}

export default CTA;
