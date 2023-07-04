import { Component } from "react";
import restaurantServices from "../../mock/restaurantServices";
import Image from "../Image";
import "./style.css";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <div className="container">
          {restaurantServices.map((service) => {
            return (
              <div className="service" key={service.id}>
                <Image src={service.img} alt="Image" title="Image" />
                <div className="details">
                  <p className="count">{service.count} +</p>
                  <span className="trait">{service.trait}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Services;
