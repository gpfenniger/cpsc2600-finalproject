import React, { Component } from 'react';
import axios from 'axios';
import contentState from './contentMethods';

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
                if (Array.isArray(res.data)) {
                    if (this.props.page.linktype == 'faction') {
                        this.setState(
                            contentState.searchFaction(
                                res.data,
                                this.props.page
                            )
                        );
                    }
                } else {
                    if (this.props.page.linktype)
                        this.setState(contentState.singleFaction(res.data));
                }
            });
        }
    }

    render() {
        let block = <></>;
        if (this.state.single) {
            block = (
                <div className="container content" style={{ flex: 4 }}>
                    <h2>{this.state.title}</h2>
                    <p>{this.state.content}</p>
                </div>
            );
        } else {
            block = (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 4
                    }}
                >
                    <div className="container content">
                        <h2>{this.state.title}</h2>
                    </div>
                    {this.state.content.map(block => {
                        return (
                            <div className="container content">
                                <h2>{block.name}</h2>
                                <p>{block.desc}</p>
                            </div>
                        );
                    })}
                </div>
            );
        }

        return <>{block}</>;
    }
}
