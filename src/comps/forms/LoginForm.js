import React, { Component } from 'react';
import axios from 'axios';

export default class LoginForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        axios
            .post('/login', {
                username: event.target[0].value,
                password: event.target[1].value
            })
            .then(res => {
                this.props.changeKey(res.data.key);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="loginform">
                <label>
                    Username:
                    <input type="text" />
                </label>
                <label>
                    Password:
                    <input type="password" />
                </label>
                <button type="submit">Login</button>
            </form>
        );
    }
}
