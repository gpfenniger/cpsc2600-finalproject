import React, { Component } from 'react';
import Card from './Card';

export default class ResultView extends Component {
    render() {
        return (
            <Card
                title={this.props.title}
                desc={this.props.content}
                style={this.props.style}
            />
        );
    }
}
