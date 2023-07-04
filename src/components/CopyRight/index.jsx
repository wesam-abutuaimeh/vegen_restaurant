import { Component } from "react";
import "./style.css";
import Container from "../Container";

class Copyright extends Component {

    render() {
        return <div className="copyright">
            <Container>
                <div className="copyright__container">
                    <p className="copyright__year">Copyright &copy; {new Date().getFullYear()} Golden Dine website</p>
                    <p>All rights reserved</p>
                </div>
            </Container>
        </div>;
    }
}

export default Copyright;
