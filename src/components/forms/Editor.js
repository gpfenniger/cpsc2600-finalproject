import React, { Component } from 'react';
import { postPage, postArticle } from '../../services/Services';
import TurndownService from 'turndown';
let turndownService = new TurndownService();

export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.info ? this.props.info.name : '',
            content: this.props.info
                ? turndownService.turndown(this.props.info.content)
                : '',
            categories: [''],
            article: true,
            updating: this.props.info
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCategories = this.handleCategories.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.toggleType = this.toggleType.bind(this);
    }

    componentDidUpdate(oldProps) {
        if (
            this.props.info &&
            JSON.stringify(this.props.info) != JSON.stringify(oldProps.info)
        ) {
            this.setState({
                title: this.props.info.name,
                content: turndownService.turndown(this.props.info.content),
                article: true,
                updating: true,
                tags: []
            });
        }
    }

    handleChange(event) {
        let newState = {};
        if (event.target.attributes['mod'].value == 'title')
            newState = { title: event.target.value };
        else newState = { content: event.target.value };
        this.setState(newState);
    }

    handleCategories(event) {
        this.setState({
            categories: [event.target.value]
        });
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
                this.props.loginkey,
                this.state.updating,
                this.props.page.match(new RegExp('[a-z_]*$'))
            );
        else
            postPage(
                this.state.title,
                this.state.content,
                this.props.loginkey,
                this.state.updating,
                this.props.page.match(new RegExp('[a-z_]*$'))
            );
    }

    render() {
        let tagOptions;
        if (this.state.article) {
            tagOptions = (
                <>
                    <label>
                        Categories
                        <input
                            type="text"
                            className="rounded"
                            placeholder="category name"
                            onChange={this.handleCategories}
                            value={this.state.categories[0]}
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
                        value={this.state.title}
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
                        value={this.state.content}
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
