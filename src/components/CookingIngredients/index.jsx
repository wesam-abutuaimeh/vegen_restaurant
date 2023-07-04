import { Component } from "react";
import Container from "../Container";
import SectionHeader from '../SectionHeader';
import CTA from '../CTA';
import Image from '../Image';
import "./style.css";

class CookingIngredients extends Component {
    render() {
        return <div className='cooking__ingredients__section'>
            <Container>
                <div className="left__side">
                    <SectionHeader header="Cooking ingredients" subHeader="What goes in" />
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.</p>
                    <CTA title="Read more" />
                </div>
                <div className="right__side"><Image src='/imgs/cooking_shape.png' alt='Food IMAGE' title="Food IMAGE" /> </div>
            </Container>
        </div>;
    }
}

export default CookingIngredients;
