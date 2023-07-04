import { Component } from "react";
import "./style.css";

class Input extends Component {
    render() {
        return <input type={this.props.type} placeholder={this.props.placeholder} />
    }
}

export default Input;
