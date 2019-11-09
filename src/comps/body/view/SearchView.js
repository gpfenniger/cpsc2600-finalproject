import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Card from './Card';

export default class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: `Search Results for ${this.props.linktype}`
        };
    }

    render() {
        return (
            <div style={this.props.style}>
                <Card title={this.props.linktype} desc={this.state.desc} />
                {this.props.res.map(result => {
                    return (
                        <Card
                            title={result.name}
                            desc={result.desc}
                            key={uuid()}
                        />
                    );
                })}
            </div>
        );
    }
}
