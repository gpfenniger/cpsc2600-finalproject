import React, { Component } from 'react';
import { postPage, postArticle } from '../../services/Services';

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
        this.toggleType = this.toggleType.bind(this);
    }

    handleChange(event) {
        let newState = {};
        if (event.target.attributes['mod'].value == 'title')
            newState = { title: event.target.value };
        else newState = { content: event.target.value };
        this.setState(newState);
    }

    toggleType(event) {
        this.setState({ article: !this.state.article });
    }

    handleSave() {
        if (this.state.article)
            postArticle(
                this.state.title,
                this.state.content,
                this.state.tags,
                this.state.categories,
                this.props.loginkey
            );
        else
            postPage(this.state.title, this.state.content, this.props.loginkey);
    }

    render() {
        let tagOptions;
        if (this.state.article) {
            tagOptions = (
                <>
                    <label>
                        Tags:
                        <input
                            type="text"
                            className="rounded"
                            placeholder="#mytag"
                        />
                    </label>
                    <label>
                        Categories
                        <input
                            type="text"
                            className="rounded"
                            placeholder="category name"
                        />
                    </label>
                </>
            );
        }

        return (
            <form className="editor">
                <label>
                    Title
                    <br />
                    <input
                        type="text"
                        mod="title"
                        onChange={this.handleChange}
                        className="rounded"
                        placeholder="Unique Title Name"
                    />
                </label>
                <label>
                    Content
                    <br />
                    <textarea
                        mod="content"
                        onChange={this.handleChange}
                        className="rounded"
                        placeholder="
                            <p>For regular text</p>
                            <b>For bold</b>
                            <i>For italics</i>
                            <h1-4>For headers</h1>
                        "
                    />
                </label>
                <div className="options">
                    <input
                        type="button"
                        onClick={this.handleSave}
                        value="Save"
                        className="rounded"
                    />
                    <input
                        type="button"
                        onClick={this.toggleType}
                        value={this.state.article ? 'Article' : 'Page'}
                        className="rounded"
                    />
                </div>

                {tagOptions}
            </form>
        );
    }
}
