import React, { Component } from 'react';
import ReactHTMLParser from 'react-html-parser';
import Card from './Card';

export default class ResultView extends Component {
    render() {
        return (
            <Card title={this.props.title} style={this.props.style}>
                {this.props.content.map((item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        {ReactHTMLParser(item.content)}
                    </div>
                ))}
            </Card>
        );
    }
}
