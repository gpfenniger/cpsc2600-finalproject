import React, { Component } from 'react';
import Editor from '../forms/Editor';
import Card from './Card';

export default class EditorView extends Component {
    render() {
        return (
            <Card title="Editor" className="view">
                <Editor loginkey={this.props.loginkey} />
            </Card>
        );
    }
}
