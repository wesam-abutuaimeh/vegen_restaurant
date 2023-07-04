import React, { Component } from 'react';
import './style.css'
class SectionHeader extends Component {
    render() {
        return (
            <div className='section__header__container' style={this.props.className === 'center' ? { textAlign: 'center', margin: "0 auto" } : null}>
                <div className='section__header'>{this.props.header}</div>
                <div className='section__sub__header'>{this.props.subHeader}</div>
            </div >
        )
    }
}
export default SectionHeader;
