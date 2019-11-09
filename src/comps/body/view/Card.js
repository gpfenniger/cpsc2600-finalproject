import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div className="container content" style={this.props.style}>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}
