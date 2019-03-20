import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Github Finder</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
