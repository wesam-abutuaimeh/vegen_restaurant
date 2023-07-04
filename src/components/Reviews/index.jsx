import { Component } from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import ourFoodLovers from '../../mock/ourFoodLovers.js'
import Image from "../Image";
import "./style.css";

class Reviews extends Component {
    render() {
        return <div className="testimonials__and__reviews">
            <Container>
                <SectionHeader header="Reviews" subHeader="words from our food lovers" className='center' />
            </Container>
            <div className="reviews">
                {ourFoodLovers.map((lover, index) => {
                    return <div className="testimonial__card" key={lover.id} style={index === 0 ? { transform: 'translateX(-50%)' } : index === 2 ? { transform: 'translateX(50%)' } : null}>
                        <div className="card__header">
                            <Image src={lover.avatar} alt="Client Image" title="Client Image" />
                            <div className="our__food__lover__info">
                                <p className="name">{lover.lover}</p>
                                <div className="rate">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="star">
                                            <path id="Vector" d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z" fill="#FFFFFC" stroke="#FFFFFC" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="star">
                                            <path id="Vector" d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z" fill="#FFFFFC" stroke="#FFFFFC" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="star">
                                            <path id="Vector" d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z" fill="#FFFFFC" stroke="#FFFFFC" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="star">
                                            <path id="Vector" d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z" fill="#FFFFFC" stroke="#FFFFFC" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="star">
                                            <path id="Vector" d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z" fill="#FFFFFC" stroke="#FFFFFC" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial">{lover.description}</div>
                    </div>
                })}
            </div>
        </div>
    }
}

export default Reviews;
