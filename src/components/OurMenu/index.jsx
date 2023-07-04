import React, { Component } from "react";
import SectionHeader from "../SectionHeader";
import Image from "../Image";
import menuInfo from "../../mock/menuInfo";
import "./style.css";

class OurMenu extends Component {
    render() {
        return (
            <div className="our__menu">
                <div className="container">
                    <SectionHeader header="Straight From Kitchen" subHeader="Our Menu" className="center" />
                    <div className="menu">
                        {menuInfo.map((mealInfo) => {
                            return <div className="meal__information" key={mealInfo.id}>
                                <Image src={mealInfo.src} alt="Meal Info" title="Meal Info" />
                                <div className="info">
                                    <p>{mealInfo.title}</p>
                                    <span>{mealInfo.subTitle}</span>
                                </div>
                                <svg width="123" height="2" viewBox="0 0 123 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1H123" stroke="#FFCE6D" />
                                </svg>
                                <span className="rs">Rs {mealInfo.rs}</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default OurMenu;
