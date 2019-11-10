import React, { Component } from 'react';
import Card from './Card';

export default class ResultView extends Component {
    render() {
        return (
            <Card title={this.props.title} style={this.props.style}>
                {this.props.content}
            </Card>
        );
    }
}
