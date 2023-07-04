import React, { Component } from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import CTA from "../CTA";
import Image from "../Image";
import "./style.css"

class BookTable extends Component {
    render() {
        return <div className="book__table__section">
            <Container>
                <Image src='/imgs/shape__cooking.png' alt="image__shape" title="image__shape" />
                <div className="book__table__info">
                    <SectionHeader header="Come join us for a lunch this weekend and enjoy" subHeader="FLAT 10% OFF" className='center' />
                    <CTA title="Book Table" className="center" />
                </div>
                <Image src='/imgs/shape__cooking.png' alt="image__shape" title="image__shape" />
            </Container>
        </div>;
    }
}

export default BookTable;
