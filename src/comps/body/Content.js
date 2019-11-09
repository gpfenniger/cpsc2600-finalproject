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
            content: [],
            single: true
        };
    }

    componentDidUpdate(prevProps) {
        /* sets state based on wether results are a search or specific */
        if (prevProps.page.link != this.props.page.link) {
            axios.get(this.props.page.link).then(res => {
                this.setState(decideContent(res.data, this.props.page));
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
                    title={this.state.title}
                    content={this.state.content}
                    style={styles}
                />
            );
        } else {
            block = (
                <SearchView
                    res={this.state.content}
                    linktype={this.props.page.linktype}
                    style={styles}
                />
            );
        }

        return <>{block}</>;
    }
}
