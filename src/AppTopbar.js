import React from 'react';
import classNames from 'classnames';
import { InputText } from 'primereact/inputtext';
import { CSSTransition } from 'react-transition-group';

const AppTopbar = (props) => {

    const onTopbarItemClick = (event, item) => {
        if (props.onTopbarItemClick) {
            props.onTopbarItemClick({
                originalEvent: event,
                item: item
            });
        }
    };

    let topbarItemsClassName = classNames('topbar-menu fadeInDown', { 'topbar-menu-visible': props.topbarMenuActive });

    return (
        <div className="topbar clearfix">

            <div className="logo-link">
                <img className="logo" alt="apollo-layout" src="assets/layout/images/apollo_logo.png" />
            </div>

            <button type="button" className="p-link menu-button" id="menu-button" onClick={props.onMenuButtonClick}>
                <i className="pi pi-align-left"></i>
            </button>

            <button type="button" className="p-link profile" onClick={props.onTopbarMenuButtonClick}>
                <span className="username">Sarah Miller</span>
                <img src="assets/layout/images/avatar/avatar.png" alt="apollo-layout" />
                <i className="pi pi-angle-down"></i>
            </button>

            <span className="topbar-search">
                <InputText placeholder="Search" />
                <span className="pi pi-search"></span>
            </span>


            <ul className={topbarItemsClassName}>
                <li className={classNames({ 'menuitem-active': props.activeTopbarItem === 'profile' })}
                    onClick={(e) => onTopbarItemClick(e, 'profile')}>
                    <button type="button" className="p-link">
                        <i className="topbar-icon pi pi-fw pi-user"></i>
                        <span className="topbar-item-name">Profile</span>
                    </button>

                    <CSSTransition classNames="layout-submenu-container" timeout={{ enter: 400, exit: 400 }} in={props.activeTopbarItem === 'profile'} unmountOnExit>
                        <ul>
                            <li role="menuitem">
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-user-edit"></i>
                                    <span>Account</span>
                                </button>
                            </li>
                            <li role="menuitem">
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-eye"></i>
                                    <span>Privacy</span>
                                </button>
                            </li>
                            <li role="menuitem">
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-cog"></i>
                                    <span>Settings</span>
                                </button>
                            </li>
                            <li role="menuitem">
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-power-off"></i>
                                    <span>Logout</span>
                                </button>
                            </li>
                        </ul>
                    </CSSTransition>
                </li>

                <li className={classNames({ 'menuitem-active': props.activeTopbarItem === 'settings' })}
                    onClick={(e) => onTopbarItemClick(e, 'settings')}>
                    <button type="button" className="p-link">
                        <i className="topbar-icon pi pi-fw pi-cog"></i>
                        <span className="topbar-item-name">Settings</span>
                    </button>

                    <CSSTransition classNames="layout-submenu-container" timeout={{ enter: 400, exit: 400 }} in={props.activeTopbarItem === 'settings'} unmountOnExit>
                        <ul>
                            <li role="menuitem">
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-palette"></i>
                                    <span>Change Theme</span>
                                    <span className="topbar-badge">1</span>
                                </button>
                            </li>
                            <li role="menuitem">
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-bookmark"></i>
                                    <span>Favorites</span>
                                </button>
                            </li>
                            <li role="menuitem">
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-lock"></i>
                                    <span>Lock Screen</span>
                                    <span className="topbar-badge">3</span>
                                </button>
                            </li>
                            <li role="menuitem">
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-image"></i>
                                    <span>Wallpaper</span>
                                </button>
                            </li>
                        </ul>
                    </CSSTransition>
                </li>
                <li className={classNames({ 'menuitem-active': props.activeTopbarItem === 'messages' })}
                    onClick={(e) => onTopbarItemClick(e, 'messages')}>
                    <button type="button" className="p-link">
                        <i className="topbar-icon pi pi-fw pi-envelope"></i>
                        <span className="topbar-item-name">Messages</span>
                        <span className="topbar-badge">5</span>
                    </button>
                    <CSSTransition classNames="layout-submenu-container" timeout={{ enter: 400, exit: 400 }} in={props.activeTopbarItem === 'messages'} unmountOnExit>
                        <ul>
                            <li role="menuitem">
                                <button type="button" className="p-link topbar-message">
                                    <img alt="Avatar 1" src="assets/layout/images/avatar/avatar1.png" width="35" />
                                    <span>Give me a call</span>
                                </button>
                            </li>
                            <li role="menuitem">
                                <button type="button" className="p-link topbar-message">
                                    <img alt="Avatar 2" src="assets/layout/images/avatar/avatar2.png" width="35" />
                                    <span>Sales reports attached</span>
                                </button>
                            </li>
                            <li role="menuitem">
                                <button type="button" className="p-link topbar-message">
                                    <img alt="Avatar 3" src="assets/layout/images/avatar/avatar3.png" width="35" />
                                    <span>About your invoice</span>
                                </button>
                            </li>
                            <li role="menuitem">
                                <button type="button" className="p-link topbar-message">
                                    <img alt="Avatar 4" src="assets/layout/images/avatar/avatar2.png" width="35" />
                                    <span>Meeting today at 10pm</span>
                                </button>
                            </li>
                            <li role="menuitem">
                                <button type="button" className="p-link topbar-message">
                                    <img alt="Avatar 5" src="assets/layout/images/avatar/avatar4.png" width="35" />
                                    <span>Out of office</span>
                                </button>
                            </li>
                        </ul>
                    </CSSTransition>
                </li>
                <li className={classNames({ 'menuitem-active': props.activeTopbarItem === 'notifications' })}
                    onClick={(e) => onTopbarItemClick(e, 'notifications')}>
                    <button type="button" className="p-link">
                        <i className="topbar-icon pi pi-fw pi-bell"></i>
                        <span className="topbar-item-name">Notifications</span>
                        <span className="topbar-badge">2</span>
                    </button>

                    <CSSTransition classNames="layout-submenu-container" timeout={{ enter: 400, exit: 400 }} in={props.activeTopbarItem === 'notifications'} unmountOnExit>
                        <ul>
                            <li role="menuitem">
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-list"></i>
                                    <span>Pending tasks</span>
                                </button>
                            </li>
                            <li role="menuitem">
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-calendar"></i>
                                    <span>Meeting today</span>
                                </button>
                            </li>
                            <li role="menuitem">
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-download"></i>
                                    <span>Download documents</span>
                                </button>
                            </li>
                            <li role="menuitem">
                                <button type="button" className="p-link">
                                    <i className="pi pi-fw pi-ticket"></i>
                                    <span>Book flight</span>
                                </button>
                            </li>
                        </ul>
                    </CSSTransition>
                </li>
            </ul>
        </div>
    );

}

export default AppTopbar;
