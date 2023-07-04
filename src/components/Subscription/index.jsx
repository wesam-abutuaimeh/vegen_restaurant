import { Component } from "react";
import Container from "../Container";
import "./style.css";
import Input from "../Input";

class Subscription extends Component {
    render() {
        return <div className="subscription">
            <Container>
                <div className="col-1">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6L16 16L30 6M2 26H30V6H2V26Z" stroke="#A08040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>Subscribe to our Newsletter</p>
                </div>
                <div className="subscribe">
                    <Input type="email" placeholder="Your Email id" />
                    <button>Subscribe</button>
                </div>

            </Container>
        </div>;
    }
}

export default Subscription;
