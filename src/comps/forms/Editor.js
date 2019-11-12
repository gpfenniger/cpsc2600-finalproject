import React, { Component } from 'react';
import axios from 'axios';

export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            article: true,
            tags: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(event) {
        let newState = {};
        if (event.target.attributes['mod'].value == 'title')
            newState = { title: event.target.value };
        else newState = { content: event.target.value };
        this.setState(newState);
    }

    handleSave() {
        console.log({
            name: this.state.title,
            content: this.state.content
        });
    }

    render() {
        let tagOptions;
        if (this.state.article) {
            tagOptions = (
                <>
                    <input type="text" />
                </>
            );
        }

        return (
            <form>
                <input type="text" mod="title" onChange={this.handleChange} />
                <textarea mod="content" onChange={this.handleChange} />
                <input type="button" value="preview" />
                <input type="button" onClick={this.handleSave} value="save" />
                <input type="radio" name="model" value="article" />
                <input type="radio" name="model" value="page" />
                {tagOptions}
            </form>
        );
    }
}
