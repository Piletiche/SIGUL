import React, { Component } from 'react';
import classNames from 'classnames';
import { AppTopbar } from './AppTopbar';
import { AppBreadcrumb } from './AppBreadcrumb';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';
import { withRouter } from 'react-router';
import 'primereact/resources/primereact.min.css';
import 'fullcalendar/dist/fullcalendar.css';
import 'font-awesome/css/font-awesome.css';
import 'primeicons/primeicons.css';
import './App.css';
import { Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { FormsDemo } from './components/FormsDemo';
import { SampleDemo } from './components/SampleDemo';
import { DataDemo } from './components/DataDemo';
import { PanelsDemo } from './components/PanelsDemo';
import { OverlaysDemo } from './components/OverlaysDemo';
import { MenusDemo } from './components/MenusDemo';
import { MessagesDemo } from './components/MessagesDemo';
import { ChartsDemo } from './components/ChartsDemo';
import { MiscDemo } from './components/MiscDemo';
import { EmptyPage } from './components/EmptyPage';
import { Documentation } from './components/Documentation';
import { ScrollPanel } from 'primereact/components/scrollpanel/ScrollPanel';
import { ProgressBar } from 'primereact/components/progressbar/ProgressBar';

class App extends Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            overlayMenuActive: false,
            staticMenuDesktopInactive: false,
            staticMenuMobileActive: false,
            topbarMenuActive: false,
            activeTopbarItem: null,
            darkTheme: false,
            menuActive: false,
        };

        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
        this.onTopbarMenuButtonClick = this.onTopbarMenuButtonClick.bind(this);
        this.onThemeChange = this.onThemeChange.bind(this);
        this.onTopbarItemClick = this.onTopbarItemClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.onRootMenuItemClick = this.onRootMenuItemClick.bind(this);
        this.createMenu();
    }

    onMenuClick(event) {
        this.menuClick = true;

        if(!this.isHorizontal()) {
            setTimeout(() => {this.layoutMenuScroller.moveBar(); }, 500);
        }
    }

    onMenuButtonClick(event) {
        this.menuClick = true;
        this.setState(({
            topbarMenuActive: false
        }));

        if(this.state.layoutMode === 'overlay') {
            this.setState({
                overlayMenuActive: !this.state.overlayMenuActive
            });
        }
        else {
            if(this.isDesktop())
                this.setState({staticMenuDesktopInactive: !this.state.staticMenuDesktopInactive});
            else
                this.setState({staticMenuMobileActive: !this.state.staticMenuMobileActive});
        }

        event.preventDefault();
    }

    onTopbarMenuButtonClick(event) {
        this.topbarItemClick = true;
        this.setState({topbarMenuActive: !this.state.topbarMenuActive});
        this.hideOverlayMenu();
        event.preventDefault();
    }

    onTopbarItemClick(event) {
        this.topbarItemClick = true;

        if(this.state.activeTopbarItem === event.item)
            this.setState({activeTopbarItem: null});
        else
            this.setState({activeTopbarItem: event.item});

        event.originalEvent.preventDefault();
    }

    onMenuItemClick(event) {
        if(!event.item.items) {
            this.hideOverlayMenu();
        }
        if(!event.item.items && (this.isHorizontal() || this.isSlim())) {
            this.setState({
                menuActive: false
            })
        }
    }

    onRootMenuItemClick(event) {
        this.setState({
            menuActive: !this.state.menuActive
        });

        event.originalEvent.preventDefault();
    }

    onDocumentClick(event) {
        if(!this.topbarItemClick) {
            this.setState({
                activeTopbarItem: null,
                topbarMenuActive: false
            });
        }

        if(!this.menuClick) {
            if(this.isHorizontal() || this.isSlim()) {
                this.setState({
                    menuActive: false
                })
            }

            this.hideOverlayMenu();
        }

        this.topbarItemClick = false;
        this.menuClick = false;
    }

    hideOverlayMenu() {
        this.setState({
            overlayMenuActive: false,
            staticMenuMobileActive: false
        })
    }

    isTablet() {
        let width = window.innerWidth;
        return width <= 1024 && width > 640;
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    isMobile() {
        return window.innerWidth <= 640;
    }

    isOverlay() {
        return this.state.layoutMode === 'overlay';
    }

    isHorizontal() {
        return this.state.layoutMode === 'horizontal';
    }

    isSlim() {
        return this.state.layoutMode === 'slim';
    }

    changeTheme(theme) {
        this.changeStyleSheetUrl('layout-css', theme, 'layout');
        this.changeStyleSheetUrl('theme-css', theme, 'theme');
    }

    changeStyleSheetUrl(id, value, prefix) {
        let element = document.getElementById(id);
        let urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css';
        let newURL = urlTokens.join('/');
        element.setAttribute('href', newURL);

        if (value.indexOf('dark') !== -1) {
            this.setState({darkTheme : true});
        } else {
            this.setState({darkTheme : false});
        }
    }

    onThemeChange(){
        const themeLink = document.getElementById('theme-css');
        const href = themeLink.href;
        const themeFile = href.substring(href.lastIndexOf('/') + 1, href.lastIndexOf('.'));
        const themeTokens = themeFile.split('-');
        const themeName = themeTokens[1];
        const themeMode = themeTokens[2];
        const newThemeMode = (themeMode === 'dark') ? 'light' : 'dark';

        this.changeTheme(themeName + '-' + newThemeMode);

    }

    createMenu() {
        this.menu = [
            {label: 'Dashboard', icon: 'fa fa-fw fa-dashboard', command: () => { window.location = '#/'}},
            {
                label: 'Menu', icon: 'fa fa-fw fa-bars' ,
                items: [
                    {label: 'Horizontal Menu', icon: 'fa fa-fw fa-arrows-h',  command: () => this.setState({layoutMode: 'horizontal'}) },
                    {label: 'Overlay Menu', icon: 'fa fa-fw fa-arrows-v',  command: () => this.setState({layoutMode: 'overlay'}) },
                    {label: 'Static Menu', icon: 'fa fa-fw fa-bars',  command: () => this.setState({layoutMode: 'static'}) },
                    {label: 'Slim Menu', icon: 'fa fa-fw fa-window-restore',  command: () => this.setState({layoutMode: 'slim'}) }
                ]
            },
            {
                label: 'Dark', icon: 'fa fa-fw fa-circle', badge: '8',
                items: [
                    {label: 'Blue', icon: 'fa fa-fw fa-paint-brush', styleClass: 'blue-theme',command: (event) => {this.changeTheme('blue-dark')}},
                    {label: 'Green', icon: 'fa fa-fw fa-paint-brush', styleClass: 'green-theme', command: (event) => {this.changeTheme('green-dark')}},
                    {label: 'Cyan', icon: 'fa fa-fw fa-paint-brush', styleClass: 'cyan-theme', command: (event) => {this.changeTheme('cyan-dark')}},
                    {label: 'Purple', icon: 'fa fa-fw fa-paint-brush', styleClass: 'purple-theme', command: (event) => {this.changeTheme('purple-dark')}},
                    {label: 'Indigo', icon: 'fa fa-fw fa-paint-brush', styleClass: 'indigo-theme', command: (event) => {this.changeTheme('indigo-dark')}},
                    {label: 'Yellow', icon: 'fa fa-fw fa-paint-brush', styleClass: 'yellow-theme', command: (event) => {this.changeTheme('yellow-dark')}},
                    {label: 'Orange', icon: 'fa fa-fw fa-paint-brush', styleClass: 'orange-theme', command: (event) => {this.changeTheme('orange-dark')}},
                    {label: 'Pink', icon: 'fa fa-fw fa-paint-brush', styleClass: 'pink-theme', command: (event) => {this.changeTheme('pink-dark')}}

                ]
            },
            {
                label: 'Light', icon: 'fa fa-fw fa-circle-o', badge: '8',
                items: [
                    {label: 'Blue', icon: 'fa fa-fw fa-paint-brush', styleClass: 'blue-theme',command: (event) => {this.changeTheme('blue-light')}},
                    {label: 'Green', icon: 'fa fa-fw fa-paint-brush', styleClass: 'green-theme', command: (event) => {this.changeTheme('green-light')}},
                    {label: 'Cyan', icon: 'fa fa-fw fa-paint-brush', styleClass: 'cyan-theme', command: (event) => {this.changeTheme('cyan-light')}},
                    {label: 'Purple', icon: 'fa fa-fw fa-paint-brush', styleClass: 'purple-theme', command: (event) => {this.changeTheme('purple-light')}},
                    {label: 'Indigo', icon: 'fa fa-fw fa-paint-brush', styleClass: 'indigo-theme', command: (event) => {this.changeTheme('indigo-light')}},
                    {label: 'Yellow', icon: 'fa fa-fw fa-paint-brush', styleClass: 'yellow-theme', command: (event) => {this.changeTheme('yellow-light')}},
                    {label: 'Orange', icon: 'fa fa-fw fa-paint-brush', styleClass: 'orange-theme', command: (event) => {this.changeTheme('orange-light')}},
                    {label: 'Pink', icon: 'fa fa-fw fa-paint-brush', styleClass: 'pink-theme', command: (event) => {this.changeTheme('pink-light')}}

                ]
            },
            {
                label: 'Components', icon: 'fa fa-fw fa-sitemap',
                items: [
                    {label: 'Sample Page', icon: 'fa fa-fw fa-columns', command: () => { window.location = '#/sample'}},
                    {label: 'Forms', icon: 'fa fa-fw fa-code', command: () => { window.location = '#/forms'}},
                    {label: 'Data', icon: 'fa fa-fw fa-table', command: () => { window.location = "#/data"}},
                    {label: 'Panels', icon: 'fa fa-fw fa-list-alt', command: () => { window.location = "#/panels"}},
                    {label: 'Overlays', icon: 'fa fa-fw fa-square', command: () => { window.location = "#/overlays"}},
                    {label: 'Menus', icon: 'fa fa-fw fa-minus-square-o', command: () => { window.location = "#/menus"}},
                    {label: 'Messages', icon: 'fa fa-fw fa-circle-o-notch', command: () => { window.location = "#/messages"}},
                    {label: 'Charts', icon: 'fa fa-fw fa-area-chart', command: () => { window.location = "#/charts"}},
                    {label: 'Misc', icon: 'fa fa-fw fa-user-secret', command: () => { window.location = "#/misc"}}
                ]
            },
            {
                label: 'Pages', icon: 'fa fa-fw fa-life-saver',
                items: [
                    {label: 'Empty Page', icon: 'fa fa-fw fa-square-o', command: () => { window.location = "#/empty"}},
                    {label: 'Landing', icon: 'fa fa-fw fa-certificate', url: 'assets/pages/landing.html', target: '_blank'},
                    {label: 'Login', icon: 'fa fa-fw fa-sign-in', url: 'assets/pages/login.html', target: '_blank'},
                    {label: 'Error', icon: 'fa fa-fw fa-exclamation-circle', url: 'assets/pages/error.html', target: '_blank'},
                    {label: 'Not Found', icon: 'fa fa-fw fa-times', url: 'assets/pages/notfound.html', target: '_blank'},
                    {label: 'Access Denied', icon: 'fa fa-fw fa-exclamation-triangle', url: 'assets/pages/access.html', target: '_blank'}
                ]
            },
            {
                label: 'Menu Hierarchy', icon: 'fa fa-fw fa-gg',
                items: [
                    {
                        label: 'Submenu 1', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.1.2', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.1.3', icon: 'fa fa-fw fa-sign-in'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 1.2.2', icon: 'fa fa-fw fa-sign-in'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.1.2', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.1.3', icon: 'fa fa-fw fa-sign-in'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'fa fa-fw fa-sign-in'},
                                    {label: 'Submenu 2.2.2', icon: 'fa fa-fw fa-sign-in'}
                                ]
                            },
                        ]
                    }
                ]
            },
            {label: 'Docs', icon: 'fa fa-fw fa-book', command: () => { window.location = "#/documentation"}}
        ];
    }

    render() {
        let layoutClassName = classNames('layout-wrapper', {
            'layout-horizontal': this.state.layoutMode === 'horizontal',
            'layout-overlay': this.state.layoutMode === 'overlay',
            'layout-static': this.state.layoutMode === 'static',
            'layout-slim': this.state.layoutMode === 'slim',
            'layout-static-inactive': this.state.staticMenuDesktopInactive,
            'layout-mobile-active': this.state.staticMenuMobileActive,
            'layout-overlay-active': this.state.overlayMenuActive
        });
        const AppBreadCrumbWithRouter = withRouter(AppBreadcrumb);

        return <div className={layoutClassName} onClick={this.onDocumentClick}>
            <div>
                <AppTopbar darkTheme={this.state.darkTheme} onThemeChange={this.onThemeChange}
                           topbarMenuActive={this.state.topbarMenuActive} activeTopbarItem={this.state.activeTopbarItem}
                           onMenuButtonClick={this.onMenuButtonClick} onTopbarMenuButtonClick={this.onTopbarMenuButtonClick}
                           onTopbarItemClick={this.onTopbarItemClick} />

                <div className='layout-menu-container' onClick={this.onMenuClick}>
                    <ScrollPanel ref={(el) => this.layoutMenuScroller = el} style={{height: '100%'}}>
                        <div className="layout-menu-content">
                            <div className="layout-menu-title">MENU</div>
                            <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} onRootMenuItemClick={this.onRootMenuItemClick}
                                     layoutMode={this.state.layoutMode} active={this.state.menuActive} />
                            <div className="layout-menu-footer">
                                <div className="layout-menu-footer-title">TASKS</div>

                                <div className="layout-menu-footer-content">
                                    <ProgressBar value={50} showValue={false}></ProgressBar>
                                        Today
                                    <ProgressBar value={80} showValue={false}></ProgressBar>
                                        Overall
                                </div>
                            </div>
                        </div>
                    </ScrollPanel>
                </div>

                <div className="layout-content">
                    <AppBreadCrumbWithRouter/>

                    <div className="layout-content-container">
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/forms" component={FormsDemo} />
                        <Route path="/sample" component={SampleDemo} />
                        <Route path="/data" component={DataDemo} />
                        <Route path="/panels" component={PanelsDemo} />
                        <Route path="/overlays" component={OverlaysDemo} />
                        <Route path="/menus" component={MenusDemo} />
                        <Route path="/messages" component={MessagesDemo} />
                        <Route path="/charts" component={ChartsDemo} />
                        <Route path="/misc" component={MiscDemo} />
                        <Route path="/empty" component={EmptyPage} />
                        <Route path="/documentation" component={Documentation} />
                    </div>

                    <AppFooter />

                    {this.state.staticMenuMobileActive && <div className="layout-mask"></div>}
                </div>


            </div>
        </div>;
    }
}

export default App;
