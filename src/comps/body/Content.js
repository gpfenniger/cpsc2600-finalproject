import React, { Component } from 'react';
import axios from 'axios';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Homepage',
            content: []
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.pageLink != this.props.pageLink) {
            axios.get(this.props.pageLink).then(res => {
                console.log(res);
                this.setState({ title: res.data[0].name });
            });
        }
    }

    render() {
        return (
            <div className="container content" style={{ flex: 4 }}>
                <h2>{this.state.title}</h2>
            </div>
        );
    }
}
