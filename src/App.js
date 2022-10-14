import React, { useRef, useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { Route, useLocation } from 'react-router-dom';

import AppTopbar from './AppTopbar';
import AppBreadcrumb from './AppBreadcrumb';
import AppFooter from './AppFooter';
import AppMenu from './AppMenu';
import AppConfig from './AppConfig';

import Dashboard from './components/Dashboard';
import ButtonDemo from './components/ButtonDemo';
import ChartDemo from './components/ChartDemo';
import MessagesDemo from './components/MessagesDemo';
import Documentation from './components/Documentation';
import FileDemo from './components/FileDemo';
import FormLayoutDemo from './components/FormLayoutDemo';
import InputDemo from './components/InputDemo';
import ListDemo from './components/ListDemo';
import MiscDemo from './components/MiscDemo';
import MenuDemo from './components/MenuDemo';
import OverlayDemo from './components/OverlayDemo';
import PanelDemo from './components/PanelDemo';
import TableDemo from './components/TableDemo';
import TreeDemo from './components/TreeDemo';
import FloatLabelDemo from './components/FloatLabelDemo';
import InvalidStateDemo from './components/InvalidStateDemo';
import MediaDemo from './components/MediaDemo';
import BlocksDemo from './components/BlocksDemo';
import IconsDemo from './utilities/IconsDemo';
import CrudDemo from './pages/CrudDemo';
import EmptyPage from './pages/EmptyPage';
import Invoice from './pages/Invoice';
import Help from './pages/Help';
import CalendarDemo from './pages/CalendarDemo';
import TimelineDemo from './pages/TimelineDemo';
import NotasFreq from './estudante/NotasFreq';

import PrimeReact from 'primereact/api';
import { Tooltip } from 'primereact/tooltip';
import 'primereact/resources/primereact.min.css';
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
    const [menuActive, setMenuActive] = useState(false);
    const [themeColor, setThemeColor] = useState('blue');
    const [inputStyle, setInputStyle] = useState('outlined');
    const [ripple, setRipple] = useState(false);
    const [scheme, setScheme] = useState('light');
    const copyTooltipRef = useRef();
    const location = useLocation();

    let menuClick;
    let topbarItemClick;

    const menu = [
        {
            label: 'Início', icon: 'pi pi-fw pi-home',
            items: [{
                label: 'Painel', icon: 'pi pi-fw pi-circle-off', to: '/'
            }]
        },


        {
            label: 'Painel do Estudante', icon: 'pi pi-fw pi-id-card',
            items: [

                { label: 'Notas de Frequência', icon: 'pi pi-fw pi-circle-off', to: '/notas' },
                { label: 'Exames', icon: 'pi pi-fw pi-circle-off', to: 'login' },
                { label: 'Situação Financeira', icon: 'pi pi-fw pi-circle-off', to: '/crud' },
                { label: 'Avaliação Corpo Docente', icon: 'pi pi-fw pi-circle-off' },
                { label: 'Inscrição', icon: 'pi pi-fw pi-circle-off' },
                { label: 'Horários', icon: 'pi pi-fw pi-circle-off' },
                { label: 'Pagar Emolumentos', icon: 'pi pi-fw pi-circle-off' },
                { label: 'Dados do Estudante', icon: 'pi pi-fw pi-circle-off' },
                { label: 'Plano Curricular', icon: 'pi pi-fw pi-circle-off' },
                { label: 'Documentos Normativos', icon: 'pi pi-fw pi-circle-off' },
                { label: 'Formulários diversos', icon: 'pi pi-fw pi-circle-off' }
            ]
        },


        {
            label: 'Painel do Docente', icon: 'pi pi-fw pi-briefcase',
            items:
                [
                    { label: 'Notas de Frequência', icon: 'pi pi-fw pi-circle-off', to: '/empty' },
                    { label: 'Formulários diversos', icon: 'pi pi-fw pi-circle-off' }
                ]
        },

        {
            label: 'Gestão Pedagógica', icon: 'pi pi-fw pi-server',
            items:
                [
                    { label: 'Notas de Frequência', icon: 'pi pi-fw pi-circle-off', to: '/empty' },
                    { label: 'Formulários diversos', icon: 'pi pi-fw pi-circle-off' }
                ]
        },
        {
            label: 'Gestão Académica', icon: 'pi pi-fw pi-book',
            items:
                [
                    { label: 'Notas de Frequência', icon: 'pi pi-fw pi-circle-off', to: '/empty' },
                    { label: 'Formulários diversos', icon: 'pi pi-fw pi-circle-off' }
                ]
        },


        {
            label: 'Gestão Financeira', icon: 'pi pi-fw pi-wallet',
            items:
                [
                    { label: 'Notas de Frequência', icon: 'pi pi-fw pi-circle-off', to: '/empty' },
                    { label: 'Formulários diversos', icon: 'pi pi-fw pi-circle-off' }
                ]
        },


        {
            label: 'Recursos Humanos', icon: 'pi pi-fw pi-list',
            items:
                [
                    { label: 'Notas de Frequência', icon: 'pi pi-fw pi-circle-off', to: '/empty' },
                    { label: 'Formulários diversos', icon: 'pi pi-fw pi-circle-off' }
                ]
        },


        {
            label: 'Gestão de Bolsas', icon: 'pi pi-fw pi-table',
            items:
                [
                    { label: 'Notas de Frequência', icon: 'pi pi-fw pi-circle-off', to: '/empty' },
                    { label: 'Formulários diversos', icon: 'pi pi-fw pi-circle-off' }
                ]
        },


        {
            label: 'Relatórios', icon: 'pi pi-fw pi-chart-bar',
            items:
                [
                    { label: 'Notas de Frequência', icon: 'pi pi-fw pi-circle-off', to: '/empty' },
                    { label: 'Formulários diversos', icon: 'pi pi-fw pi-circle-off' }
                ]
        },


        {
            label: 'Gestão do Sistema', icon: 'pi pi-fw pi-cog',
            items:
                [
                    { label: 'Notas de Frequência', icon: 'pi pi-fw pi-circle-off', to: '/empty' },
                    { label: 'Formulários diversos', icon: 'pi pi-fw pi-circle-off' }
                ]
        },





        /*  
                {
                    label: 'UI KIT', icon: 'pi pi-fw pi-star-fill',
                    items: [
                        { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
                        { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input' },
                        { label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel" },
                        { label: "Invalid State", icon: "pi pi-exclamation-circle", to: "/invalidstate" },
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
                    label: "PrimeBlocks", icon: "pi pi-prime",
                    items: [
                        { label: "Free Blocks", icon: "pi pi-fw pi-eye", to: "/blocks", badge: "NEW", },
                        { label: "All Blocks", icon: "pi pi-fw pi-globe", url: "https://www.primefaces.org/primeblocks-react", target: "_blank" }
                    ]
                },
                {
                    label: 'Utilities', icon: 'pi pi-fw pi-compass',
                    items: [
                        { label: 'Icons', icon: 'pi pi-fw pi-prime', to: '/icons' },
                        { label: "PrimeFlex", icon: "pi pi-fw pi-desktop", url: "https://www.primefaces.org/primeflex", target: "_blank" }
                    ]
                },
                {
                    label: 'Pages', icon: 'pi pi-fw pi-briefcase',
                    items: [
                        { label: 'Crud', icon: 'pi pi-fw pi-pencil', to: '/crud' },
                        { label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/calendar' },
                        { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/timeline' },
                        { label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank' },
                        { label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login' },
                        { label: 'Invoice', icon: 'pi pi-fw pi-dollar', to: '/invoice' },
                        { label: 'Help', icon: 'pi pi-fw pi-question-circle', to: '/help' },
                        { label: 'Error', icon: 'pi pi-fw pi-times-circle', to: '/error' },
                        { label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', to: '/notfound' },
                        { label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access' },
                        { label: 'Empty', icon: 'pi pi-fw pi-circle-off', to: '/empty' }
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
                {
                    label: 'Start', icon: 'pi pi-fw pi-download',
                    items: [
                        {
                            label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', url: ['https://www.primefaces.org/store']
                        },
                        {
                            label: 'Documentation', icon: 'pi pi-fw pi-info-circle', to: '/documentation'
                        }
                    ]
                }
            */
    ];

    useEffect(() => {
        copyTooltipRef && copyTooltipRef.current && copyTooltipRef.current.updateTargetEvents();
    }, [location]);

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

    const onDocumentClick = (event) => {
        if (!topbarItemClick) {
            setActiveTopbarItem(null)
            setTopbarMenuActive(false)
        }

        if (!menuClick) {
            if (isHorizontal() || isSlim()) {
                setMenuActive(false)
            }

            hideOverlayMenu();
        }

        topbarItemClick = false;
        menuClick = false;
    }

    const isMenuVisible = () => {
        if (isDesktop()) {
            if (layoutMode === 'static')
                return !staticMenuDesktopInactive;
            else if (layoutMode === 'overlay')
                return overlayMenuActive;
            else
                return true;
        }
        else {
            return true;
        }
    };

    const hideOverlayMenu = () => {
        setOverlayMenuActive(false);
        setStaticMenuMobileActive(false)
    }

    const isMobile = () => {
        return window.innerWidth < 1025;
    }

    const isDesktop = () => {
        return window.innerWidth > 1024;
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

    const onSchemeChange = (color) => {
        setScheme(color);
        const themeLink = document.getElementById('theme-css');
        const href = themeLink.href;
        const themeFile = href.substring(href.lastIndexOf('/') + 1, href.lastIndexOf('.'));
        const themeTokens = themeFile.split('-');
        const themeName = themeTokens[1];
        changeTheme(themeName + '-' + color);
        changeLogo(color);
    }

    const changeTheme = (theme) => {
        setThemeColor(theme.split('-')[0]);
        changeStyleSheetUrl('layout-css', theme, 'layout');
        changeStyleSheetUrl('theme-css', theme, 'theme');
    }

    const onThemeChange = (theme) => {
        setThemeColor(theme)
        changeTheme(theme + '-' + scheme);
    }

    const changeStyleSheetUrl = (id, value, prefix) => {
        let element = document.getElementById(id);
        let urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css';
        let newURL = urlTokens.join('/');

        replaceLink(element, newURL);
    }

    const changeLogo = (scheme) => {
        const invoiceLogoLink = document.getElementById("invoice-logo");
        const logoUrl = `assets/layout/images/logo-${scheme === 'light' ? 'dark' : 'white'}.png`;

        if (invoiceLogoLink) {
            invoiceLogoLink.src = logoUrl;
        }
    };

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
        'layout-static-inactive': staticMenuDesktopInactive && layoutMode !== 'slim',
        'layout-mobile-active': staticMenuMobileActive,
        'layout-overlay-active': overlayMenuActive,
        'p-input-filled': inputStyle === 'filled'
    });

    const menuContainerClassName = classNames('layout-menu-container', { 'layout-menu-container-inactive': !isMenuVisible() })

    return (
        <div className={layoutClassName} onClick={onDocumentClick}>
            <Tooltip ref={copyTooltipRef} target=".block-action-copy" position="bottom" content="Copied to clipboard" event="focus" />


            <AppTopbar
                topbarMenuActive={topbarMenuActive} activeTopbarItem={activeTopbarItem}
                onMenuButtonClick={onMenuButtonClick}
                onTopbarMenuButtonClick={onTopbarMenuButtonClick}
                onTopbarItemClick={onTopbarItemClick} />

            <div className={menuContainerClassName} onClick={onMenuClick}>
                <div className="layout-menu-content">
                    <AppMenu model={menu} onMenuItemClick={onMenuItemClick}
                        onRootMenuItemClick={onRootMenuItemClick}
                        layoutMode={layoutMode} active={menuActive} />

                    {/*                     <div className="layout-menu-footer">
                        <div className="layout-menu-footer-title">TASKS</div>

                        <div className="layout-menu-footer-content">
                            <ProgressBar value={50} showValue={false}></ProgressBar>
                            Today
                            <ProgressBar value={80} showValue={false}></ProgressBar>
                            Overall
                        </div>
                    </div>
 */}
                </div>
            </div>

            <div className="layout-content">
                <AppBreadcrumb />

                <div className="layout-content-container">
                    <Route path="/" exact render={() => <Dashboard colorMode={scheme} location={location} />} />
                    <Route path="/documentation" component={Documentation} />
                    <Route path="/formlayout" component={FormLayoutDemo} />
                    <Route path="/floatlabel" component={FloatLabelDemo} />
                    <Route path="/invalidstate" component={InvalidStateDemo} />
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
                    <Route path="/chart" render={() => <ChartDemo colorMode={scheme} location={location} />} />
                    <Route path="/misc" component={MiscDemo} />
                    <Route path="/icons" component={IconsDemo} />
                    <Route path="/blocks" component={BlocksDemo} />
                    <Route path="/crud" component={CrudDemo} />
                    <Route path="/timeline" component={TimelineDemo} />
                    <Route path="/calendar" component={CalendarDemo} />
                    <Route path="/help" component={Help} />
                    <Route path="/invoice" component={Invoice} />
                    <Route path="/empty" component={EmptyPage} />
                    <Route path="/media" component={MediaDemo} />
                    <Route path="/notas" component={NotasFreq} />
                </div>

                <AppFooter />

                {staticMenuMobileActive && <div className="layout-mask"></div>}
            </div>


            <AppConfig themeColor={themeColor} onThemeChange={onThemeChange}
                inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}
                layoutMode={layoutMode} changeMenuMode={changeMenuMode}
                ripple={ripple} onRippleChange={onRippleChange}
                scheme={scheme} onSchemeChange={onSchemeChange} />
        </div>
    );

}

export default App;