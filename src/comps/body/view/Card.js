import React, { Component } from 'react';
import ReactHTMLParser from 'react-html-parser';

export default class Card extends Component {
    render() {
        return (
            <div className="container content" style={this.props.style}>
                <h2>{this.props.title}</h2>
                {ReactHTMLParser(this.props.children)}
            </div>
        );
    }
}
