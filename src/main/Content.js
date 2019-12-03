import React, { Component } from 'react';
import ResultView from '../components/body/ResultView';
import SearchView from '../components/body/SearchView';
import AdminToolbar from '../components/body/AdminToolbar';
import LinkBar from './LinkBar';
import FloatingPanel from '../components/FloatingPanel';
import LoginForm from '../components/forms/LoginForm';
import { getLink } from '../services/Services';
import EditorView from '../components/body/EditorView';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: <ResultView info={{ name: '', content: '' }} />,
            key: undefined,
            sections: []
        };
        this.changeKey = this.changeKey.bind(this);
        this.adminAction = this.adminAction.bind(this);
    }

    componentDidMount() {
        getLink(this.props.page)
            .then(result =>
                this.setState({
                    view: <ResultView info={result.data} />,
                    sections: result.data.sections
                })
            )
            .catch(err => console.log(err));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.page != this.props.page) {
            getLink(this.props.page)
                .then(result => {
                    let view;
                    if (Array.isArray(result.data))
                        view = (
                            <SearchView
                                info={result.data}
                                changePage={this.props.changePage}
                            />
                        );
                    else view = <ResultView info={result.data} />;
                    this.setState({
                        view: view,
                        sections: result.data.sections
                    });
                })
                .catch(err => console.log(err));
        }
    }

    adminAction(action) {
        switch (action) {
            case 'new':
                this.setState({
                    view: (
                        <EditorView
                            loginkey={this.state.key}
                            page={this.props.page}
                        />
                    )
                });
                break;
            case 'edit':
                getLink(this.props.page).then(results => {
                    this.setState({
                        view: (
                            <EditorView
                                loginkey={this.state.key}
                                info={results.data}
                                page={this.props.page}
                            />
                        )
                    });
                });
                break;
        }
    }

    changeKey(key) {
        this.setState({ key: key });
    }

    render() {
        return (
            <>
                <div
                    style={{
                        filter: this.props.loginShow ? 'blur(5px)' : 'none'
                    }}
                >
                    <main>
                        {this.state.view}
                        <LinkBar sections={this.state.sections} />
                    </main>
                    {this.state.key != undefined ? (
                        <AdminToolbar
                            adminAction={this.adminAction}
                            article={this.state.view.type.name == 'ResultView'}
                        />
                    ) : (
                        <></>
                    )}
                </div>
                <FloatingPanel
                    width={this.props.width}
                    show={this.props.loginShow}
                    handleLogin={this.props.handleLogin}
                >
                    <LoginForm
                        handleLogin={this.props.handleLogin}
                        changeKey={this.changeKey}
                    />
                </FloatingPanel>
            </>
        );
    }
}
