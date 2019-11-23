import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer
                style={{
                    filter: this.props.loginShow ? 'blur(5px)' : 'none'
                }}
            >
                <p>made with the MERN Stack and hosted by Heroku</p>
            </footer>
        );
    }
}
