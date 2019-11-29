import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Card from './Card';
import ReactHTMLParser from 'react-html-parser';

export default class SearchView extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.changePage(event.target.href);
    }

    render() {
        let style = {
            flexDirection: 'column'
        };
        return (
            <div style={style} className="view">
                <Card title="Search Results" desc="Search Results" />
                {this.props.info.map(result => {
                    return (
                        <Card title={result.name} key={uuid()}>
                            {ReactHTMLParser(result.content.substring(0, 250))}
                            <a
                                href={`/api/article/${result.slug}`}
                                onClick={this.handleClick}
                            >
                                read more...
                            </a>
                        </Card>
                    );
                })}
            </div>
        );
    }
}
