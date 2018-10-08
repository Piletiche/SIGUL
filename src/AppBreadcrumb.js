import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AppBreadcrumb extends Component {

    static propTypes = {
        match: PropTypes.object
    }

    render() {
        const { location } = this.props;
        const paths = location.pathname.split('/');
        return (
            <div className="layout-breadcrumb">
                <ul>
                    <li><a><i className="fa fa-home"></i></a></li>
                    {
                        location.pathname === '/' ?  <li>/</li> : paths.map((path, index) => <li key={index}>{path === '' ? '/' : path}</li>)
                    }
                </ul>
    
                <div className="layout-breadcrumb-options">
                    <a title="Backup">
                        <i className="fa fa-cloud-upload"></i>
                    </a>
                    <a title="Bookmark">
                        <i className="fa fa-bookmark"></i>
                    </a>
                    <a title="Logout">
                        <i className="fa fa-sign-out"></i>
                    </a>
                </div>
            </div>
        );
    }
}