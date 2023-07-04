import React from "react";
import "./style.css";
import Image from "../../Image";
import features from "../../../mock/features";

class Features extends React.Component {
    render() {
        return (features.map((feature) => (
            <div className="feature" key={feature.id}>
                <Image src={feature.img} />
                <p className="title">{feature.title}</p>
                <p className="desc">{feature.desc}</p>
            </div>
        )));
    }
}


export default Features;
