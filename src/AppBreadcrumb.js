import React from 'react';
import { useHistory, useLocation, withRouter } from 'react-router-dom';


const AppBreadcrumb = () => {

    const location = useLocation();
    const history = useHistory();

    const paths = location.pathname.split('/');

    return (
        <div className="layout-breadcrumb">
            <ul>
                <li><button type="button" className="p-link" onClick={() => history.push('/')}><i className="pi pi-home"></i></button></li>
                {
                    location.pathname === '/' ? <li>/</li> : paths.map((path, index) => <li key={index}>{path === '' ? '/' : path}</li>)
                }
            </ul>

            <div className="layout-breadcrumb-options">
                <button type="button" className="p-link" title="Backup">
                    <i className="pi pi-cloud-upload"></i>
                </button>
                <button type="button" className="p-link" title="Bookmark">
                    <i className="pi pi-bookmark"></i>
                </button>
                <button type="button" className="p-link" title="Logout">
                    <i className="pi pi-power-off"></i>
                </button>
            </div>
        </div>
    );

}

export default withRouter(AppBreadcrumb);
