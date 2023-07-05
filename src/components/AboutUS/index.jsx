import React, { Component } from 'react';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import CTA from '../CTA';
import Image from '../Image';
import './style.css'

class AboutUs extends Component {
    render() {
        return <div className='about__us__section'>
            <Container>
                <div className="left__side">
                    <SectionHeader header="About Us" subHeader="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.</p>
                    <CTA title="Read more" />
                </div>
                <div className="right__side"> <Image src='/assets/about_us_desc.png' alt='Food IMAGE' title="Food IMAGE" /> </div>
            </Container>
        </div>;
    }
}

export default AboutUs;
