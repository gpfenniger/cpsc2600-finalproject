import React, { Component } from 'react';
import axios from 'axios';
import ResultView from './view/ResultView';
import SearchView from './view/SearchView';
import FloatingLogin from '../forms/FloatingLogin';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Homepage',
            content: [{ title: '', content: '' }],
            single: true,
            loginkey: undefined
        };
        this.changeKey = this.changeKey.bind(this);
    }

    componentDidUpdate(prevProps) {
        /* sets state based on wether results are a search or specific */
        if (prevProps.page.link != this.props.page.link) {
            axios.get(this.props.page.link).then(res => {
                if (res.data.length > 1)
                    this.setState({
                        title: 'Search Results',
                        content: res.data,
                        single: false
                    });
                else
                    this.setState({
                        title: res.data[0].name,
                        content: res.data[0].content,
                        single: true
                    });
            });
        }
    }

    changeKey(loginkey) {
        this.setState({ loginkey: loginkey });
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
                    content={this.state.content[0].content}
                    style={styles}
                />
            );
        } else {
            block = <SearchView res={this.state.content} style={styles} />;
        }

        return (
            <>
                {block}
                <FloatingLogin
                    handleLogin={this.props.handleLogin}
                    changeKey={this.changeKey}
                    show={this.props.loginShow}
                />
            </>
        );
    }
}
