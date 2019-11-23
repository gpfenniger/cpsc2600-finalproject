import React, { Component } from 'react';
import ReactHTMLParser from 'react-html-parser';
import Card from './Card';

export default class ResultView extends Component {
    render() {
        let style = {
            display: 'flex',
            flex: 4
        };
        return (
            <Card title={this.props.info.name} style={style}>
                {ReactHTMLParser(this.props.info.content)}
            </Card>
        );
    }
}
