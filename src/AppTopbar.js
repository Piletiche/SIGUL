import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {InputText} from 'primereact/inputtext';
import {InputSwitch} from 'primereact/inputswitch';

export class AppTopbar extends Component {

    static defaultProps = {
        onMenuButtonClick: null,
        onTopbarMenuButtonClick: null,
        onTopbarItemClick: null,
        topbarMenuActive: false,
        activeTopbarItem: null,
        darkTheme: null,
        onThemeChange: null
    }

    static propTypes = {
        onMenuButtonClick: PropTypes.func.isRequired,
        onTopbarMenuButtonClick: PropTypes.func.isRequired,
        onTopbarItemClick: PropTypes.func.isRequired,
        topbarMenuActive: PropTypes.bool.isRequired,
        activeTopbarItem: PropTypes.string,
        darkTheme: PropTypes.bool,
        onThemeChange: PropTypes.func
    }

    constructor() {
        super();
        this.state = {};
    }

    onTopbarItemClick(event, item) {
        if(this.props.onTopbarItemClick) {
            this.props.onTopbarItemClick({
                originalEvent: event,
                item: item
            });
        }
    }

    render() {
        let topbarItemsClassName = classNames('topbar-menu fadeInDown', {'topbar-menu-visible': this.props.topbarMenuActive});

        return <div className="topbar clearfix">

            <img className="logo" alt="apollo-layout" src="assets/layout/images/apollo_logo.png" />

            <a id="menu-button" onClick={this.props.onMenuButtonClick}>
                <i className="fa fa-align-left"></i>
            </a>

            <a className="profile" onClick={this.props.onTopbarMenuButtonClick}>
                <span className="username">Sarah Miller</span>
                <img src="assets/layout/images/avatar/avatar.png" alt="apollo-layout" />
                <i className="fa fa-angle-down"></i>
            </a>

            <span className="topbar-search">
                <InputText placeholder="Search"/>
                <span className="fa fa-search"></span>
            </span>

            <span className="topbar-themeswitcher">
                <InputSwitch checked={this.props.darkTheme} onChange={this.props.onThemeChange}></InputSwitch>
            </span>

            <ul className={topbarItemsClassName}>
                <li className={classNames({'menuitem-active': this.props.activeTopbarItem === 'profile'})}
                    onClick={(e) => this.onTopbarItemClick(e, 'profile')}>
                    <a>
                        <i className="topbar-icon fa fa-fw fa-user"></i>
                        <span className="topbar-item-name">Profile</span>
                    </a>

                    <ul>
                        <li role="menuitem">
                            <a>
                                <i className="fa fa-fw fa-user"></i>
                                <span>Profile</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a>
                                <i className="fa fa-fw fa-user-secret"></i>
                                <span>Privacy</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a>
                                <i className="fa fa-fw fa-cog"></i>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a>
                                <i className="fa fa-fw fa-sign-out"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className={classNames({'menuitem-active': this.props.activeTopbarItem === 'settings'})}
                    onClick={(e) => this.onTopbarItemClick(e, 'settings')}>
                    <a>
                        <i className="topbar-icon fa fa-fw fa-cog"></i>
                        <span className="topbar-item-name">Settings</span>
                    </a>
                    <ul>
                        <li role="menuitem">
                            <a>
                                <i className="fa fa-fw fa-paint-brush"></i>
                                <span>Change Theme</span>
                                <span className="topbar-badge">1</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a>
                                <i className="fa fa-fw fa-star-o"></i>
                                <span>Favorites</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a>
                                <i className="fa fa-fw fa-lock"></i>
                                <span>Lock Screen</span>
                                <span className="topbar-badge">3</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a>
                                <i className="fa fa-fw fa-picture-o"></i>
                                <span>Wallpaper</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className={classNames({'menuitem-active': this.props.activeTopbarItem === 'messages'})}
                    onClick={(e) => this.onTopbarItemClick(e, 'messages')}>
                    <a>
                        <i className="topbar-icon fa fa-fw fa-envelope-o"></i>
                        <span className="topbar-item-name">Messages</span>
                        <span className="topbar-badge">5</span>
                    </a>
                    <ul>
                        <li role="menuitem">
                            <a className="topbar-message">
                                <img alt="Avatar 1" src="assets/layout/images/avatar/avatar1.png" width="35"/>
                                <span>Give me a call</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a className="topbar-message">
                                <img alt="Avatar 2" src="assets/layout/images/avatar/avatar2.png" width="35"/>
                                <span>Sales reports attached</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a className="topbar-message">
                                <img alt="Avatar 3" src="assets/layout/images/avatar/avatar3.png" width="35"/>
                                <span>About your invoice</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a className="topbar-message">
                                <img alt="Avatar 4" src="assets/layout/images/avatar/avatar2.png" width="35"/>
                                <span>Meeting today at 10pm</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a className="topbar-message">
                                <img alt="Avatar 5" src="assets/layout/images/avatar/avatar4.png" width="35"/>
                                <span>Out of office</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className={classNames({'menuitem-active': this.props.activeTopbarItem === 'notifications'})}
                    onClick={(e) => this.onTopbarItemClick(e, 'notifications')}>
                    <a>
                        <i className="topbar-icon fa fa-fw fa-bell-o"></i>
                        <span className="topbar-item-name">Notifications</span>
                        <span className="topbar-badge">2</span>
                    </a>
                    <ul>
                        <li role="menuitem">
                            <a>
                                <i className="fa fa-fw fa-tasks"></i>
                                <span>Pending tasks</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a>
                                <i className="fa fa-fw fa-calendar-check-o"></i>
                                <span>Meeting today</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a>
                                <i className="fa fa-fw fa-download"></i>
                                <span>Download documents</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a>
                                <i className="fa fa-fw fa-plane"></i>
                                <span>Book flight</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>;
    }
}