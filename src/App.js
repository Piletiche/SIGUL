import React, { useState } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

import { AppTopbar } from './AppTopbar';
import { AppBreadcrumb } from './AppBreadcrumb';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';
import { AppConfig } from './AppConfig';

import { Dashboard } from './components/Dashboard';
import { ButtonDemo } from './components/ButtonDemo';
import { ChartDemo } from './components/ChartDemo';
import { MessagesDemo } from './components/MessagesDemo';
import { Documentation } from './components/Documentation';
import { FileDemo } from './components/FileDemo';
import { FormLayoutDemo } from './components/FormLayoutDemo';
import { InputDemo } from './components/InputDemo';
import { ListDemo } from './components/ListDemo';
import { MiscDemo } from './components/MiscDemo';
import { MenuDemo } from './components/MenuDemo';
import { OverlayDemo } from './components/OverlayDemo';
import { PanelDemo } from './components/PanelDemo';
import { TableDemo } from './components/TableDemo';
import { TreeDemo } from './components/TreeDemo';
import { FloatLabelDemo } from './components/FloatLabelDemo';
import { MediaDemo } from './components/MediaDemo';

import { DisplayDemo } from './utilities/DisplayDemo';
import { ElevationDemo } from './utilities/ElevationDemo';
import { FlexBoxDemo } from './utilities/FlexboxDemo';
import { GridDemo } from './utilities/GridDemo';
import { IconsDemo } from './utilities/IconsDemo';
import { SpacingDemo } from './utilities/SpacingDemo';
import { TextDemo } from './utilities/TextDemo';
import { TypographyDemo } from './utilities/TypographyDemo';
import { WidgetsDemo } from './utilities/WidgetsDemo';

import { Crud } from './pages/Crud';
import { Calendar } from './pages/Calendar';
import { EmptyPage } from './pages/EmptyPage';
import { Invoice } from './pages/Invoice';
import { Help } from './pages/Help';

import PrimeReact from 'primereact/utils';

import { ProgressBar } from 'primereact/progressbar'

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
    const [staticMenuMobileActive, setStaticMenuMobileActive] = useState(false);
    const [topbarMenuActive, setTopbarMenuActive] = useState(false);
    const [activeTopbarItem, setActiveTopbarItem] = useState(null);
    const [darkTheme, setDarkTheme] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [themeColor, setThemeColor] = useState('blue');
    const [configDialogActive, setConfigDialogActive] = useState(false);
    const [inputStyle, setInputStyle] = useState('outlined');
    const [ripple, setRipple] = useState(true);

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

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    }

    const onRippleChange = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value);
    }

    const onMenuClick = (event) => {
        menuClick = true;
    }

    const onMenuButtonClick = (event) => {
        menuClick = true;
        setTopbarMenuActive(false);

        if (layoutMode === 'overlay' && !isMobile()) {
            setOverlayMenuActive(prevState => !prevState);
        } else {
            if (isDesktop())
                setStaticMenuDesktopInactive(prevState => !prevState);
            else
                setStaticMenuMobileActive(prevState => !prevState);
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
            setActiveTopbarItem(null);
        else
            setActiveTopbarItem(event.item);

        event.originalEvent.preventDefault();
    }

    const onMenuItemClick = (event) => {
        if (!event.item.items) {
            hideOverlayMenu();
        }
        if (!event.item.items && (isHorizontal() || isSlim())) {
            setMenuActive(false);
        }
    }

    const onRootMenuItemClick = (event) => {
        setMenuActive(prevState => !prevState);
    }

    const onConfigButtonClick = (event) => {
        configClick = true;
        setConfigDialogActive(prevState => !prevState);
    }

    const onConfigCloseClick = () => {
        setConfigDialogActive(false);
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
        setOverlayMenuActive(false);
    }

    const changeMenuColor = (event) => {
        setDarkTheme(event.darkTheme);
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
        setThemeColor(event)
        // changeStyleSheetUrl('layout-css', event.theme, 'layout');
        changeStyleSheetUrl('theme-css', event, 'theme');
    }

    const changeStyleSheetUrl = (id, value, prefix) => {
        let element = document.getElementById(id);
        let urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css';
        let newURL = urlTokens.join('/');

        replaceLink(element, newURL);
    }

    const isIE = () => {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent)
    }

    const replaceLink = (linkElement, href) => {
        if (isIE()) {
            linkElement.setAttribute('href', href);
        }
        else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

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
        'layout-overlay-active': overlayMenuActive,
        'p-input-filled': inputStyle === 'filled'
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
                    <Route path="/documentation" component={Documentation} />
                    <Route path="/formlayout" component={FormLayoutDemo} />
                    <Route path="/floatlabel" component={FloatLabelDemo} />
                    <Route path="/input" component={InputDemo} />
                    <Route path="/button" component={ButtonDemo} />
                    <Route path="/table" component={TableDemo} />
                    <Route path="/list" component={ListDemo} />
                    <Route path="/tree" component={TreeDemo} />
                    <Route path="/panel" component={PanelDemo} />
                    <Route path="/overlay" component={OverlayDemo} />
                    <Route path="/menu" component={MenuDemo} />
                    <Route path="/messages" component={MessagesDemo} />
                    <Route path="/file" component={FileDemo} />
                    <Route path="/chart" component={ChartDemo} />
                    <Route path="/misc" component={MiscDemo} />
                    <Route path="/display" component={DisplayDemo} />
                    <Route path="/elevation" component={ElevationDemo} />
                    <Route path="/flexbox" component={FlexBoxDemo} />
                    <Route path="/icons" component={IconsDemo} />
                    <Route path="/grid" component={GridDemo} />
                    <Route path="/spacing" component={SpacingDemo} />
                    <Route path="/typography" component={TypographyDemo} />
                    <Route path="/text" component={TextDemo} />
                    <Route path="/crud" component={Crud} />
                    <Route path="/calendar" component={Calendar} />
                    <Route path="/help" component={Help} />
                    <Route path="/invoice" component={Invoice} />
                    <Route path="/empty" component={EmptyPage} />
                    <Route path="/widgets" component={WidgetsDemo} />
                    <Route path="/media" component={MediaDemo} />
                </div>

                <AppFooter />

                {staticMenuMobileActive && <div className="layout-mask"></div>}
            </div>


            <AppConfig themeColor={themeColor} changeTheme={changeTheme}
                inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}
                layoutMode={layoutMode} changeMenuMode={changeMenuMode}
                ripple={ripple} onRippleChange={onRippleChange} />
        </div>
    );

}

export default App;
