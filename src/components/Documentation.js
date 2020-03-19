import React, { Component } from 'react';
import './Documentation.css';
import {CodeHighlight} from "./CodeHighlight";

export class Documentation extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card docs no-margin">
                        <h1>Current Version</h1>
                        <p>React 16.13.0 and PrimeReact 4.x</p>

                        <h1>Getting Started</h1>
                        <p>Apollo is an application template for React based on the popular <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> that allows
                            creating React apps with no configuration. To get started extract the contents of the zip bundle and install the dependencies
                            with npm or yarn.</p>
                        <pre>
{
`npm install

# OR

yarn
`}
</pre>

                        <p>Next step is running the application using the start script and navigate to <b>http://localhost:3000/</b> to view the application.
                            That is it, you may now start with the development of your application using the Apollo template.</p>

                        <pre>
{
`npm start

# OR

yarn start
`}
</pre>

                        <h1>React Scripts</h1>
                        <p>Following commands are derived from create-app-app.</p>
                        <pre>
{
`"npm start" or "yarn start": Starts the development server
"npm test" or "yarn test": Runs the tests.
"npm run build" or "yarn run build": Creates a production build.
`}
</pre>

                        <h1>Dependencies</h1>
                        <p>Dependencies of Apollo are listed below and needs to be added to package.json. Apollo has no direct dependency, even PrimeReact components are an optional dependency.</p>

                        <pre>
{
`"primereact": "^3.4.0",              //optional: PrimeReact components
"primeicons": "^2.0.0",              //optional: PrimeReact component icons
"primeflex": "1.0.0",                //optional: Samples
"react-router-dom": "^4.2.2"         //optional: Router
`
}
</pre>

                        <h1>Structure</h1>
                        <p>Apollo consists of 3 main parts; the application layout, layout resources and theme resources for PrimeReact components. <b>App.js</b> inside src folder is the main component containing the template for the base layout
                            whereas required resources for the layout are placed inside the <b>public/assets/layout</b> folder and similarly theme resources are inside <b>public/assets/theme</b> folder.
                        </p>

                        <h1>Template</h1>
                        <p>Main layout is the JSX of the App.js, it is divided into a couple of child components such as topbar, profile, menu and footer. Here is render method of the
                            App.js component that implements the logic such as menu state, layout modes and so on.
                        </p>

                        <CodeHighlight>
{
`
render() {
    const layoutClassName = classNames('layout-wrapper', {
        'layout-horizontal': this.state.layoutMode === 'horizontal',
        'layout-overlay': this.state.layoutMode === 'overlay',
        'layout-static': this.state.layoutMode === 'static',
        'layout-slim': this.state.layoutMode === 'slim',
        'layout-static-inactive': this.state.staticMenuDesktopInactive,
        'layout-mobile-active': this.state.staticMenuMobileActive,
        'layout-overlay-active': this.state.overlayMenuActive
    });
    const AppBreadCrumbWithRouter = withRouter(AppBreadcrumb);

    return (
        <div className={layoutClassName} onClick={this.onDocumentClick}>

            <AppTopbar darkTheme={this.state.darkTheme} onThemeChange={this.onThemeChange}
                       topbarMenuActive={this.state.topbarMenuActive} activeTopbarItem={this.state.activeTopbarItem}
                       onMenuButtonClick={this.onMenuButtonClick}
                       onTopbarMenuButtonClick={this.onTopbarMenuButtonClick}
                       onTopbarItemClick={this.onTopbarItemClick}/>

            <div className='layout-menu-container' onClick={this.onMenuClick}>
                <div className="layout-menu-content">
                    <div className="layout-menu-title">MENU</div>
                    <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick}
                             onRootMenuItemClick={this.onRootMenuItemClick}
                             layoutMode={this.state.layoutMode} active={this.state.menuActive}/>
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
                <AppBreadCrumbWithRouter/>

                <div className="layout-content-container">
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/forms" component={FormsDemo}/>
                    <Route path="/sample" component={SampleDemo}/>
                    <Route path="/data" component={DataDemo}/>
                    <Route path="/panels" component={PanelsDemo}/>
                    <Route path="/overlays" component={OverlaysDemo}/>
                    <Route path="/menus" component={MenusDemo}/>
                    <Route path="/messages" component={MessagesDemo}/>
                    <Route path="/charts" component={ChartsDemo}/>
                    <Route path="/misc" component={MiscDemo}/>
                    <Route path="/empty" component={EmptyPage}/>
                    <Route path="/documentation" component={Documentation}/>
                </div>

                <AppFooter/>

                {this.state.staticMenuMobileActive && <div className="layout-mask"></div>}
            </div>


            <AppConfig layoutMode={this.state.layoutMode} darkTheme={this.state.darkTheme} themeColor={this.state.themeColor}
                       changeMenuMode={this.changeMenuMode} changeMenuColor={this.changeMenuColor} changeTheme={this.changeTheme}
                       onConfigButtonClick={this.onConfigButtonClick} onConfigCloseClick={this.onConfigCloseClick}
                       onConfigClick={this.onConfigClick} configDialogActive={this.state.configDialogActive}/>
        </div>
    );
}
`
}
</CodeHighlight>

                        <h1>Menu</h1>
                        <p>Menu is a separate component defined in AppMenu.js file based on PrimeReact MenuModel API. In order to define the menuitems,
                            navigate to createMenu() method App.js file and define your own model as a nested structure. Here is the menu component from the demo application.
                            Notice that menu object is bound to the model property of AppMenu component as shown above.</p>

<div style={{overflow: 'auto', height: '400px'}}>
<CodeHighlight lang="js">
{
`createMenu() {
    this.menu = [
        {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'},
        {
            label: 'Menu', icon: 'pi pi-fw pi-bars',
            items: [
                {
                    label: 'Horizontal Menu',
                    icon: 'pi pi-fw pi-bars',
                    command: () => this.setState({layoutMode: 'horizontal'})
                },
                {
                    label: 'Overlay Menu',
                    icon: 'pi pi-fw pi-bars',
                    command: () => this.setState({layoutMode: 'overlay'})
                },
                {
                    label: 'Static Menu',
                    icon: 'pi pi-fw pi-bars',
                    command: () => this.setState({layoutMode: 'static'})
                },
                {label: 'Slim Menu', icon: 'pi pi-fw pi-bars', command: () => this.setState({layoutMode: 'slim'})}
            ]
        },
        {
            label: 'Dark', icon: 'pi pi-fw pi-circle-on', badge: '8',
            items: [
                {
                    label: 'Blue', icon: 'pi pi-fw pi-palette', styleClass: 'blue-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'blue-dark'})
                    }
                },
                {
                    label: 'Green', icon: 'pi pi-fw pi-palette', styleClass: 'green-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'green-dark'})
                    }
                },
                {
                    label: 'Cyan', icon: 'pi pi-fw pi-palette', styleClass: 'cyan-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'cyan-dark'})
                    }
                },
                {
                    label: 'Purple', icon: 'pi pi-fw pi-palette', styleClass: 'purple-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'purple-dark'})
                    }
                },
                {
                    label: 'Indigo', icon: 'pi pi-fw pi-palette', styleClass: 'indigo-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'indigo-dark'})
                    }
                },
                {
                    label: 'Yellow', icon: 'pi pi-fw pi-palette', styleClass: 'yellow-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'yellow-dark'})
                    }
                },
                {
                    label: 'Orange', icon: 'pi pi-fw pi-palette', styleClass: 'orange-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'orange-dark'})
                    }
                },
                {
                    label: 'Pink', icon: 'pi pi-fw pi-palette', styleClass: 'pink-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'pink-dark'})
                    }
                }

            ]
        },
        {
            label: 'Light', icon: 'pi pi-fw pi-circle-off', badge: '8',
            items: [
                {
                    label: 'Blue', icon: 'pi pi-fw pi-palette', styleClass: 'blue-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'blue-light'})
                    }
                },
                {
                    label: 'Green', icon: 'pi pi-fw pi-palette', styleClass: 'green-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'green-light'})
                    }
                },
                {
                    label: 'Cyan', icon: 'pi pi-fw pi-palette', styleClass: 'cyan-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'cyan-light'})
                    }
                },
                {
                    label: 'Purple', icon: 'pi pi-fw pi-palette', styleClass: 'purple-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'purple-light'})
                    }
                },
                {
                    label: 'Indigo', icon: 'pi pi-fw pi-palette', styleClass: 'indigo-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'indigo-light'})
                    }
                },
                {
                    label: 'Yellow', icon: 'pi pi-fw pi-palette', styleClass: 'yellow-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'yellow-light'})
                    }
                },
                {
                    label: 'Orange', icon: 'pi pi-fw pi-palette', styleClass: 'orange-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'orange-light'})
                    }
                },
                {
                    label: 'Pink', icon: 'pi pi-fw pi-palette', styleClass: 'pink-theme', command: (event) => {
                        this.changeTheme({originalEvent:event, theme:'pink-light'})
                    }
                }

            ]
        },
        {
            label: 'Components', icon: 'pi pi-fw pi-sitemap',
            items: [
                {label: 'Sample Page', icon: 'pi pi-fw pi-desktop', to: '/sample'},
                {label: 'Forms', icon: 'pi pi-fw pi-check-square', to: '/forms'},
                {label: 'Data', icon: 'pi pi-fw pi-table', to: '/data'},
                {label: 'Panels', icon: 'pi pi-fw pi-list', to: '/panels'},
                {label: 'Overlays', icon: 'pi pi-fw pi-images', to: '/overlays'},
                {label: 'Menus', icon: 'pi pi-fw pi-bars', to: '/menus'},
                {label: 'Messages', icon: 'pi pi-fw pi-info-circle', to: '/messages'},
                {label: 'Charts', icon: 'pi pi-fw pi-chart-bar', to: '/charts'},
                {label: 'Misc', icon: 'pi pi-fw pi-globe', to: '/misc'}
            ]
        },
        {
            label: 'Pages', icon: 'pi pi-fw pi-clone',
            items: [
                {label: 'Empty Page', icon: 'pi pi-fw pi-ticket', to: '/empty'},
                {label: 'Landing', icon: 'pi pi-fw pi-eye', url: 'assets/pages/landing.html', target: '_blank'},
                {label: 'Login', icon: 'pi pi-fw pi-user', to: '/login'},
                {label: 'Error', icon: 'pi pi-fw pi-times', to: '/error'},
                {label: 'Not Found', icon: 'pi pi-fw pi-ban', to: '/notfound'},
                {label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access'}
            ]
        },
        {
            label: 'Menu Hierarchy', icon: 'pi pi-fw pi-sort-amount-down-alt',
            items: [
                {
                    label: 'Submenu 1', icon: 'pi pi-fw pi-angle-right',
                    items: [
                        {
                            label: 'Submenu 1.1', icon: 'pi pi-fw pi-angle-right',
                            items: [
                                {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-angle-right'},
                                {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-angle-right'},
                                {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-angle-right'},
                            ]
                        },
                        {
                            label: 'Submenu 1.2', icon: 'pi pi-fw pi-angle-right',
                            items: [
                                {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-angle-right'},
                                {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-angle-right'}
                            ]
                        },
                    ]
                },
                {
                    label: 'Submenu 2', icon: 'pi pi-fw pi-angle-right',
                    items: [
                        {
                            label: 'Submenu 2.1', icon: 'pi pi-fw pi-angle-right',
                            items: [
                                {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-angle-right'},
                                {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-angle-right'},
                                {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-angle-right'},
                            ]
                        },
                        {
                            label: 'Submenu 2.2', icon: 'pi pi-fw pi-angle-right',
                            items: [
                                {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-angle-right'},
                                {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-angle-right'}
                            ]
                        },
                    ]
                }
            ]
        },
        {
            label: 'Docs', icon: 'pi pi-fw pi-question', command: () => {
                window.location = "#/documentation"
            }
        }
    ];
}
    
`}
</CodeHighlight>
</div>

                        <h1>Theme and Layout SASS</h1>
                        <p>Apollo provides 30 PrimeReact themes out of the box, setup of a theme is simple as including the css of theme to your application. All themes are located inside are located inside public/assets/theme folder.</p>

                        <ul>
                            <li>theme-blue-dark</li>
                            <li>theme-blue-light</li>
                            <li>theme-cyan-dark</li>
                            <li>theme-cyan-light</li>
                            <li>theme-green-dark</li>
                            <li>theme-green-light</li>
                            <li>theme-indigo-dark</li>
                            <li>theme-indigo-light</li>
                            <li>theme-orange-dark</li>
                            <li>theme-orange-light</li>
                            <li>theme-pink-dark</li>
                            <li>theme-pink-light</li>
                            <li>theme-purple-dark</li>
                            <li>theme-purple-light</li>
                            <li>theme-yellow-dark</li>
                            <li>theme-yellow-light</li>
                        </ul>

                        <p>A custom theme can be developed by the following steps.</p>
                        <ul>
                            <li>Choose a custom theme name such as theme-myown.</li>
                            <li>Create a file named theme-myown.scss under <i>public/assets/theme folder</i>.</li>
                            <li>Define the variables listed below and import the <i>/sass/theme/_theme_light.scss</i> or <i>/sass/theme/_theme_dark.scss</i> file.</li>
                            <li>Build the scss to generate css</li>
                            <li>Include the generated theme.css in your application.</li>
                        </ul>

                        <p>Here are the variables required to create a light theme.</p>

<CodeHighlight lang="css">
{
`
$primaryColor:#39a3f4;
$primaryTextColor:#ffffff;

@import '../sass/theme/_theme_light.scss';  
`
}
</CodeHighlight>

                        <p>If you are creating a dark theme, import the _theme_dark.scss instead;</p>
<CodeHighlight lang="css">
{
`
$primaryColor:#39a3f4;
$primaryTextColor:#ffffff;

@import '../sass/theme/_theme_dark.scss';
`
}
</CodeHighlight>

                        <p> An example sass command to compile the css would be;</p>

                        <pre>
sass public/assets/theme/theme-myown.scss public/assets/theme/theme-myown.css
</pre>

                        <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command
                            so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>
                        <pre>
sass -w src/assets/ --sourcemap=none
</pre>

                        <p>Same can also be applied to layout itself;</p>
                        <ul>
                            <li>Choose a layout name such as layout-myown.</li>
                            <li>Create an empty file named layout-myown.scss inside <i>assets/layout/css</i> folder.</li>
                            <li>Define the variables listed below and import the <i>/sass/layout/_layout.scss</i> file.</li>
                            <li>Build the scss to generate css</li>
                            <li>Serve the css by importing it using a link tag or a bundler.</li>
                        </ul>

                        <p>Here are the variables required to create a layout.</p>

<CodeHighlight lang="css">
{
`
$primaryColor:#39a3f4;
$primaryTextColor:#ffffff;
$menuBgColor:#243447;
$menuitemTextColor:#9fadb7;
$submenuActiveBgColor:#151f2a;
$menuItemHoverTextColor:#39a3f4;
$menuItemActiveTextColor:#39a3f4;

$bodyBgColor:#141d26;
$textColor:#d8d8d8;
$textSecondaryColor:#acacac;
$placeholderColor:#6c6c6c;
$dividerColor:#121213;

@import '../../sass/layout/_layout.scss';
`
}
</CodeHighlight>

                        <h1>Common SASS Variables</h1>
                        <p>In case you'd like to customize the shared variables, the _variables.scss files are where the options are defined for layout and theme.</p>

                        <h3>sass/_variables.scss</h3>
<CodeHighlight lang="css">
{
`
$fontFamily:"Source Sans Pro",Arial,sans-serif;
$fontSize:14px;
$borderRadius:2px;
$transitionDuration:.3s;

/* Predefined Colors */
$blue:#39a3f4;
$green:#6ebc3b;
$purple:#7E57C2;
$cyan:#26C6DA;
$pink:#EC407A;
$indigo:#5C6BC0;
$orange:#f6a821;
$yellow:#ffc800;
$red:#EF5350;
$secondary:#f4f4f4;
$secondaryAccent:#424242;

`
}
</CodeHighlight>
                        <h3>sass/theme/_theme_light.scss</h3>
<CodeHighlight lang="css">
{
`
@import '../variables';

$textColor:#424242;
$textSecondaryColor:#7a7a7a;
$dividerColor:#dddddd;

/* Header */
$headerPadding:.429em .857em;
$headerBgColor:#f5f5f5;
$headerBorderColor:#d8d8d8;
$headerTextColor:#424242;
$headerHoverBgColor:#dcdcdc;
$headerHoverTextColor:#424242;
$headerIconColor:#424242;
$headerIconHoverColor:$primaryColor;

/* Contents */
$contentPadding:.857em;
$contentBorderColor:#d8d8d8;
$contentBgColor:#ffffff;

/* Forms */
$inputBgColor:#ffffff;
$inputPadding:.429em;
$inputBorderColor:#cccccc;
$inputHoverBorderColor:$primaryColor;
$inputGroupAddonBgColor:#f5f5f5;

/* Buttons */
$toggleButtonBgColor:#b6b7c2;
$toggleButtonHoverBgColor:#c4c5ce;

/* List Items */
$listPadding:.429em 0;
$listItemPadding:.429em .857em;
$listItemHoverTextColor:#424242;

/* Messages */
$infoMessageBgColor:#60b5f6;
$infoMessageTextColor:#ffffff;
$warnMessageBgColor:#FFC800;
$warnMessageTextColor:#141d26;
$errorMessageBgColor:#EF5350;
$errorMessageTextColor:#ffffff;
$successMessageBgColor:#79ab58;
$successMessageTextColor:#ffffff;

/* Data */
$datatableCellBorderColor:#d8d8d8;
$datableEvenRowBgColor:#f9f9f9;

/* TabView */
$tabHeaderPadding:.571em .857em;

/* Misc */
$overlayMaskBgColor:#EEF2F6;

@import './_theme.scss';

`
}
</CodeHighlight>

                        <h3>sass/theme/_theme_dark.scss</h3>
<CodeHighlight lang="css">
{
`
@import '../variables';

$textColor:#d8d8d8;
$textSecondaryColor:#acacac;
$dividerColor:#121213;

/* Header */
$headerPadding:.429em .857em;
$headerBgColor:#1b3548;
$headerBorderColor:#121213;
$headerTextColor:#9fadb7;
$headerHoverBgColor:#485d6c;
$headerHoverTextColor:#ffffff;
$headerIconColor:#9fadb7;
$headerIconHoverColor:#ffffff;

/* Contents */
$contentPadding:.429em .857em;
$contentBorderColor:#121213;
$contentBgColor:#1c2937;

/* Forms */
$inputBgColor:#141e27;
$inputPadding:.429em;
$inputBorderColor:#121213;
$inputHoverBorderColor:$primaryColor;
$inputGroupAddonBgColor:#1b3548;

/* Buttons */
$toggleButtonBgColor:#323e4b;
$toggleButtonHoverBgColor:#5a646e;

/* List Items */
$listPadding:.429em 0;
$listItemPadding:.429em .857em;
$listItemHoverTextColor:#424242;

/* Messages */
$infoMessageBgColor:#60b5f6;
$infoMessageTextColor:#ffffff;
$warnMessageBgColor:#FFC800;
$warnMessageTextColor:#141d26;
$errorMessageBgColor:#EF5350;
$errorMessageTextColor:#ffffff;
$successMessageBgColor:#79ab58;
$successMessageTextColor:#ffffff;

/* Data */
$datatableCellBorderColor:#121213;
$datableEvenRowBgColor:#15222F;

/* TabView */
$tabHeaderPadding:.571em .857em;

/* Misc */
$overlayMaskBgColor:#141d26;

@import './_theme.scss';

`
}
</CodeHighlight>

                        <p>In the demo app layout and theme css files are defined using link tags in index.html so the demo can switch them on the fly by changing the path however if this is not a requirement, you may also import them in App.js so that webpack adds them to the bundle.</p>

                        <h1>Menu Modes</h1>
                        <p>Menu has 4 modes, static, overlay, slim and horizontal. Layout container element in app.component.html is used to define which mode to use by adding specific classes. List
                        below indicates the style classes for each mode.</p>

                        <ul>
                            <li>Static: "layout-wrapper layout-static"</li>
                            <li>Overlay: "layout-wrapper layout-overlay"</li>
                            <li>Popup: "layout-wrapper layout-popup"</li>
                            <li>Horizontal: "layout-wrapper layout-horizontal"</li>
                        </ul>

                        <p>For example to create a horizontal menu, the div element should be in following form;</p>
<pre>
&lt;div class="layout-wrapper layout-horizontal"&gt;
</pre>

                        <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample
                            application has an example implementation of such use case. Refer to App.js for an example.</p>

                        <h1>PrimeFlex Grid System</h1>
                        <p>Apollo uses PrimeFlex Grid System throughout the samples, although any Grid library can be used we suggest using PrimeFlex as your grid system as it is well tested and supported by PrimeReact. PrimeFlex is
                        available at npm and defined at package.json of Apollo so that it gets installed by default.</p>

                        <h1>Customizing Styles</h1>
                        <p>It is suggested to write your customizations in <i>sass/_layout_styles.scss</i> and <i>sass/_theme_styles.scss </i> files for seamless updates
                        as these files are empty by default and never updated.</p>

                        <h1>Migration Guide</h1>
						<p>4.0.1 to 4.0.2</p>
						<ul>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>

						<p>4.0.0 to 4.0.1</p>
						<ul>
                            <li>Update App.js</li>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>

						<p>3.0.1 to 4.0.0</p>
						<ul>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>

						<p>3.0.0 to 3.0.1</p>
						<ul>
							<li>Update index.jx</li>
							<li>Update App.js</li>
                            <li>Update AppBreadcrumb.js</li>
							<li>Update AppMenu.js</li>
                            <li>Update AppTopbar.js</li>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>

						<p>2.0.0-beta.1 to 3.0.0</p>
						<ul>
							<li>Update index.jx</li>
							<li>Update App.js</li>
							<li>Update AppBreadcrumb.js</li>
							<li>Update AppMenu.js</li>
							<li>Update AppTopbar.js</li>
							<li>Add AppWrapper.js</li>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>

                        <p>1.x to 2.0.0-beta.1</p>
                        <p>Brings support to PrimeReact 2.x</p>
                        <ul>
                            <li>Install PrimeFlex from npm.</li>
                            <li>Update layout css files</li>
                            <li>Update theme css files</li>
                        </ul>

                        <p>1.6.0 to 1.6.1</p>
                        <p>Brings support for PrimeReact 1.6.x.</p>

                        <ul>
                            <li>Import primeicons.css in App.js.</li>
                            <li>Update layout css files</li>
                            <li>Update theme css files</li>
                        </ul>
                        <p>1.5.0 to 1.6.0</p>
                        <ul>
                            <li>Update AppMenu.js.</li>
                            <li>Update layout css files.</li>
                            <li>Update theme css files.</li>
                        </ul>
                        <p>1.4.2 to 1.5.0</p>
                        <ul>
                            <li>Update App.js.</li>
                            <li>Update layout css files.</li>
                            <li>Update theme css files.</li>
                        </ul>

                        <p>1.4.1 to 1.4.2</p>
                        <ul>
                            <li>Update theme css files</li>
                        </ul>

                        <p>1.4.0 to 1.4.1</p>
                        <ul>
                            <li>Update theme css files</li>
                        </ul>

                        <p>1.0.0 to 1.4.0</p>
                        <ul>
                            <li>Update PrimeReact to 1.4.0</li>
                            <li>Update css files of theme and layout</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
