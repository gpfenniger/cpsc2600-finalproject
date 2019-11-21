import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Card from './Card';

export default class SearchView extends Component {
    render() {
        let style = {
            display: 'flex',
            flexDirection: 'column',
            flex: 4
        };
        return (
            <div style={style}>
                <Card title="Search Results" desc="Search Results" />
                {this.props.info.map(result => {
                    return (
                        <Card
                            title={result.name}
                            desc={result.content}
                            key={uuid()}
                        />
                    );
                })}
            </div>
        );
    }
}
