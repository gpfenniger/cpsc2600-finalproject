import React, { Component } from 'react';
import axios from 'axios';
import ResultView from './view/ResultView';
import SearchView from './view/SearchView';
import { decideContent } from './contentMethods';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Homepage',
            content: [{ title: '', content: '' }],
            single: true
        };
    }

    componentDidUpdate(prevProps) {
        /* sets state based on wether results are a search or specific */
        if (prevProps.page.link != this.props.page.link) {
            axios.get(this.props.page.link).then(res => {
                console.log(res.data);
                this.setState({
                    title: res.data[0].name,
                    content: res.data[0].content
                });
            });
        }
    }

    render() {
        let styles = {
            display: 'flex',
            flexDirection: 'column',
            flex: 4
        };

        let block = <></>;
        if (this.state.single) {
            block = (
                <ResultView
                    title={this.state.content[0].title}
                    content={this.state.content[0].content}
                    style={styles}
                />
            );
        } else {
            block = <SearchView res={this.state.content} style={styles} />;
        }

        return <>{block}</>;
    }
}
