import React, { Component } from 'react';
import classNames from 'classnames';
import { AppTopbar } from './AppTopbar';
import { AppBreadcrumb } from './AppBreadcrumb';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';
import { AppConfig } from './AppConfig';
import { withRouter } from 'react-router';
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
import { ProgressBar } from 'primereact/components/progressbar/ProgressBar';
import 'primereact/resources/primereact.min.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.scss';

const App = () => {

    const [layoutMode, setLayoutMode] = useState('static');
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [staticMenuDesktopInactive, setStaticMenuDesktopInactive] = useState(false);
    const [staticMenuMobileActive, seStaticMenuMobileActive] = useState(false);
    const [topbarMenuActive, setTopbarMenuActive] = useState(false);
    const [activeTopbarItem, setActiveTopbarItem] = useState(null);
    const [darkTheme, setDarkTheme] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [themeColor, setThemeColor] = useState('blue');
    const [configDialogActive, setConfigDialogActive] = useState(false)

    let menuClick;
    let topbarItemClick;
    let configClick;

    const menu = [
        { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
        {
            label: 'UI Kit', icon: 'pi pi-fw pi-sitemap',
            items: [
                { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
                { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input' },
                { label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel" },
                { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button', class: 'rotated-icon' },
                { label: 'Table', icon: 'pi pi-fw pi-table', to: '/table' },
                { label: 'List', icon: 'pi pi-fw pi-list', to: '/list' },
                { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree' },
                { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel' },
                { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay' },
                { label: "Media", icon: "pi pi-fw pi-image", to: "/media" },
                { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu' },
                { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages' },
                { label: 'File', icon: 'pi pi-fw pi-file', to: '/file' },
                { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart' },
                { label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc' },
            ]
        },
        {
            label: "Utilities", icon: 'pi pi-fw pi-globe',
            items: [
                { label: 'Display', icon: 'pi pi-fw pi-desktop', to: '/display' },
                { label: 'Elevation', icon: 'pi pi-fw pi-external-link', to: '/elevation' },
                { label: 'Flexbox', icon: 'pi pi-fw pi-directions', to: '/flexbox' },
                { label: 'Icons', icon: 'pi pi-fw pi-search', to: '/icons' },
                { label: 'Widgets', icon: 'pi pi-fw pi-star-o', to: '/widgets' },
                { label: 'Grid System', icon: 'pi pi-fw pi-th-large', to: '/grid' },
                { label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', to: '/spacing' },
                { label: 'Typography', icon: 'pi pi-fw pi-align-center', to: '/typography' },
                { label: 'Text', icon: 'pi pi-fw pi-pencil', to: '/text' },
            ]
        },
        {
            label: 'Pages', icon: 'pi pi-fw pi-clone',
            items: [
                { label: 'Crud', icon: 'pi pi-fw pi-pencil', to: '/crud' },
                { label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/calendar' },
                { label: 'Landing', icon: 'pi pi-fw pi-user-plus', url: 'assets/pages/landing.html', target: '_blank' },
                { label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login' },
                { label: 'Invoice', icon: 'pi pi-fw pi-dollar', to: '/invoice' },
                { label: 'Help', icon: 'pi pi-fw pi-question-circle', to: '/help' },
                { label: 'Error', icon: 'pi pi-fw pi-times-circle', to: '/error' },
                { label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', to: '/notfound' },
                { label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access' },
                { label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty' }
            ]
        },
        {
            label: 'Hierarchy', icon: 'pi pi-fw pi-align-left',
            items: [
                {
                    label: 'Submenu 1', icon: 'pi pi-fw pi-align-left',
                    items: [
                        {
                            label: 'Submenu 1.1', icon: 'pi pi-fw pi-align-left',
                            items: [
                                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left' },
                                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left' },
                                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left' },
                            ]
                        },
                        {
                            label: 'Submenu 1.2', icon: 'pi pi-fw pi-align-left',
                            items: [
                                { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left' },
                                { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-align-left' }
                            ]
                        },
                    ]
                },
                {
                    label: 'Submenu 2', icon: 'pi pi-fw pi-align-left',
                    items: [
                        {
                            label: 'Submenu 2.1', icon: 'pi pi-fw pi-align-left',
                            items: [
                                { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left' },
                                { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left' },
                                { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-align-left' },
                            ]
                        },
                        {
                            label: 'Submenu 2.2', icon: 'pi pi-fw pi-align-left',
                            items: [
                                { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left' },
                                { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-align-left' }
                            ]
                        },
                    ]
                }
            ]
        },
        { label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', command: () => { window.location = "https://www.primefaces.org/store" } },
        { label: 'Documentation', icon: 'pi pi-fw pi-info-circle', to: '/documentation' },
    ]

    const onMenuClick = (event) => {
        menuClick = true;
    }

    const onMenuButtonClick = (event) => {
        menuClick = true;
        setTopbarMenuActive(false)

        if (layoutMode === 'overlay' && !isMobile()) {
            setOverlayMenuActive(prevState => !prevState);
        } else {
            if (isDesktop())
                setStaticMenuDesktopInactive(prevState => !prevState)
            else
                setStaticMenuMobileActive(prevState => !prevState)
        }

        event.preventDefault();
    }

    const onTopbarMenuButtonClick = (event) => {
        topbarItemClick = true;
        setTopbarMenuActive(prevState => !prevState)
        hideOverlayMenu();
        event.preventDefault();
    }

    const onTopbarItemClick = (event) => {
        topbarItemClick = true;

        if (activeTopbarItem === event.item)
            setActiveTopbarItem(null)
        else
            setActiveTopbarItem(event.item);

        event.originalEvent.preventDefault();
    }

    const onMenuItemClick = (event) => {
        if (!event.item.items) {
            hideOverlayMenu();
        }
        if (!event.item.items && (isHorizontal() || isSlim())) {
            setMenuActive(false)
        }
    }

    const onRootMenuItemClick = (event) => {
        setMenuActive(prevState => !prevState)
    }

    const onConfigButtonClick = (event) => {
        configClick = true;
        setConfigDialogActive(prevState => !prevState)
    }

    const onConfigCloseClick = () => {
        setConfigDialogActive(false)
    }

    const onConfigClick = () => {
        configClick = true;
    }

    const onDocumentClick = (event) => {
        if (!topbarItemClick) {
            setActiveTopbarItem(null)
            setTopbarMenuActive(false)
        }

        if (!configClick) {
            setConfigDialogActive(false)
        }

        if (!menuClick) {
            if (isHorizontal() || isSlim()) {
                setMenuActive(false)
            }

            hideOverlayMenu();
        }

        topbarItemClick = false;
        menuClick = false;
        configClick = false;
    }

    const hideOverlayMenu = () => {
        setOverlayMenuActive(false);
        setStaticMenuMobileActive(false)
    }

    const isTablet = () => {
        let width = window.innerWidth;
        return width <= 1024 && width > 640;
    }

    const isDesktop = () => {
        return window.innerWidth > 1024;
    }

    const isMobile = () => {
        return window.innerWidth <= 640;
    }

    const isOverlay = () => {
        return layoutMode === 'overlay';
    }

    const isHorizontal = () => {
        return layoutMode === 'horizontal';
    }

    const isSlim = () => {
        return layoutMode === 'slim';
    }

    const changeMenuMode = (event) => {
        setLayoutMode(event.menuMode);
        setStaticMenuDesktopInactive(false);
        setOverlayMenuActive(false)
    }

    const changeMenuColor = (event) => {
        setDarkTheme(event.darkTheme)
        onThemeChange();
    }

    const onThemeChange = () => {
        const themeLink = document.getElementById('theme-css');
        const href = themeLink.href;
        const themeFile = href.substring(href.lastIndexOf('/') + 1, href.lastIndexOf('.'));
        const themeTokens = themeFile.split('-');
        const themeName = themeTokens[1];
        const themeMode = themeTokens[2];
        const newThemeMode = (themeMode === 'dark') ? 'light' : 'dark';

        changeTheme({ originalEvent: null, theme: themeName + '-' + newThemeMode });
    }

    const changeTheme = (event) => {
        setThemeColor(event.theme.split('-')[0])
        changeStyleSheetUrl('layout-css', event.theme, 'layout');
        changeStyleSheetUrl('theme-css', event.theme, 'theme');
    }

    const changeStyleSheetUrl = (id, value, prefix) => {
        let element = document.getElementById(id);
        let urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css';
        let newURL = urlTokens.join('/');

        replaceLink(element, newURL);

        if (value.indexOf('dark') !== -1) {
            setDarkTheme(true);
        } else {
            setDarkTheme(false);
        }
    }

    const isIE = () => {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent)
    }

    const replaceLink = (linkElement, href) => {
        const id = linkElement.getAttribute('id');
        const cloneLinkElement = linkElement.cloneNode(true);

        if (isIE()) {
            linkElement.setAttribute('href', href);
        }
        else {
            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }
    const layoutClassName = classNames('layout-wrapper', {
        'layout-horizontal': layoutMode === 'horizontal',
        'layout-overlay': layoutMode === 'overlay',
        'layout-static': layoutMode === 'static',
        'layout-slim': layoutMode === 'slim',
        'layout-static-inactive': staticMenuDesktopInactive,
        'layout-mobile-active': staticMenuMobileActive,
        'layout-overlay-active': overlayMenuActive
    });
    const AppBreadCrumbWithRouter = withRouter(AppBreadcrumb);

    return (
        <div className={layoutClassName} onClick={onDocumentClick}>

            <AppTopbar darkTheme={darkTheme} onThemeChange={onThemeChange}
                topbarMenuActive={topbarMenuActive} activeTopbarItem={activeTopbarItem}
                onMenuButtonClick={onMenuButtonClick}
                onTopbarMenuButtonClick={onTopbarMenuButtonClick}
                onTopbarItemClick={onTopbarItemClick} />

            <div className='layout-menu-container' onClick={onMenuClick}>
                <div className="layout-menu-content">
                    <div className="layout-menu-title">MENU</div>
                    <AppMenu model={menu} onMenuItemClick={onMenuItemClick}
                        onRootMenuItemClick={onRootMenuItemClick}
                        layoutMode={layoutMode} active={menuActive} />
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
            </div>

            <div className="layout-content">
                <AppBreadCrumbWithRouter />

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


            <AppConfig layoutMode={layoutMode} darkTheme={darkTheme} themeColor={themeColor}
                changeMenuMode={changeMenuMode} changeMenuColor={changeMenuColor} changeTheme={changeTheme}
                onConfigButtonClick={onConfigButtonClick} onConfigCloseClick={onConfigCloseClick}
                onConfigClick={onConfigClick} configDialogActive={configDialogActive} />
        </div>
    );

}

export default App;
