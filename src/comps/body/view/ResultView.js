import React, { Component } from 'react';
import ReactHTMLParser from 'react-html-parser';
import Card from './Card';
import Editor from '../../forms/Editor';

export default class ResultView extends Component {
    render() {
        return (
            <Card title={this.props.title} style={this.props.style}>
                {ReactHTMLParser(this.props.content)}
                <Editor loginkey={this.props.loginkey} />
            </Card>
        );
    }
}
