import React, { Component } from "react";
import Container from "../Container";
import Nav from "../Nav";
import CTA from "../CTA";
import "./style.css";

class LandingSection extends Component {
    render() {
        return (
            <div className="landing__section">
                <Container>
                    <Nav />
                    <div className="hero">
                        <p className="hero__paragraph">Welcome To Golden View Dine</p>
                        <p className="sub__paragraph">Explore the authentic vegan dishes with your friends and family</p>
                        <CTA title="Read more" />
                    </div>
                </Container>
            </div>
        );
    }
}

export default LandingSection;
