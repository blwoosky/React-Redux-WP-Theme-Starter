import React, { Component,Children } from 'react';


export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mt30">
                <div className="wrap">
                    <div className="mainWrap fix">
                        <div className="l col-2-3">
                            <div>
                                <h1>Hello ,Welcome TO React Wordfdfld!</h1>
                                <div className="loadingContent">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
