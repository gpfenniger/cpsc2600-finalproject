import React, { Component } from 'react';
import ReactHTMLParser from 'react-html-parser';
import Card from './Card';

export default class ResultView extends Component {
    render() {
        return (
            <Card title={this.props.info.name} className="view">
                {ReactHTMLParser(this.props.info.content)}
            </Card>
        );
    }
}
