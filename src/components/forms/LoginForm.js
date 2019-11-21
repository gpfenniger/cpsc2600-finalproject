import React, { Component } from 'react';
import { login } from '../../services/Services';

export default class LoginForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        login(event.target[0].value, event.target[1].value)
            .then(key => this.props.changeKey(key))
            .catch(err => {
                //TODO Login Failed
                console.log(err);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="loginform rounded">
                <label>
                    Username:
                    <input type="text" className="rounded" />
                </label>
                <label>
                    Password:
                    <input type="password" className="rounded" />
                </label>
                <button type="submit" className="rounded">
                    Login
                </button>
            </form>
        );
    }
}
