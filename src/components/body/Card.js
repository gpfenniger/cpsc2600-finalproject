import React, { Component } from 'react';
import ReactHTMLParser from 'react-html-parser';

export default class Card extends Component {
    render() {
        let classes = 'container content';
        if (this.props.className) classes += ` ${this.props.className}`;
        return (
            <div className={classes} style={this.props.style}>
                <div className="internal">
                    <h2>{this.props.title}</h2>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
