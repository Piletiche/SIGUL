import React from 'react';
import './Documentation.css';
import AppCodeHighlight from "../AppCodeHighlight";

export const Documentation = () => {

    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card docs no-margin">
                    <h4>Current Version</h4>
                    <p>React 17.x and PrimeReact 5.x</p>

                    <h4>Getting Started</h4>
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

                    <h4>React Scripts</h4>
                    <p>Following commands are derived from create-app-app.</p>
                    <pre>
                        {
                            `"npm start" or "yarn start": Starts the development server
"npm test" or "yarn test": Runs the tests.
"npm run build" or "yarn run build": Creates a production build.
`}
                    </pre>

                    <h4>Dependencies</h4>
                    <p>Dependencies of Apollo are listed below and needs to be added to package.json. Apollo has no direct dependency, even PrimeReact components are an optional dependency.</p>

                    <pre>
                        {
                            `"primereact": "^5.0.2",              //optional: PrimeReact components
"primeicons": "^4.0.0",              //optional: PrimeReact component icons
"primeflex": "2.0.0",                //optional: Samples
"react-router-dom": "^5.2.0"         //optional: Router
`
                        }
                    </pre>

                    <h4>Structure</h4>
                    <p>Apollo consists of 3 main parts; the application layout, layout resources and theme resources for PrimeReact components. <b>App.js</b> inside src folder is the main component containing the template for the base layout
                            whereas required resources for the layout are placed inside the <b>public/assets/layout</b> folder and similarly theme resources are inside <b>public/assets/theme</b> folder.
                        </p>

                    <h4>Template</h4>
                    <p>Main layout is the JSX of the App.js, it is divided into a couple of child components such as topbar, profile, menu and footer. Here is render method of the
                    App.js component that implements the logic such as menu state, layout modes and so on.
                        </p>

                    <AppCodeHighlight>
                        {
                            `
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

        <AppTopbar
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


        <AppConfig themeColor={themeColor} onThemeChange={onThemeChange}
            inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}
            layoutMode={layoutMode} changeMenuMode={changeMenuMode}
            ripple={ripple} onRippleChange={onRippleChange}
            scheme={scheme} onSchemeChange={onSchemeChange} />
    </div>
);
`
                        }
                    </AppCodeHighlight>

                    <h4>Menu</h4>
                    <p>Menu is a separate component defined in AppMenu.js file based on PrimeReact MenuModel API. In order to define the menuitems,
                    navigate to createMenu() method App.js file and define your own model as a nested structure. Here is the menu component from the demo application.
                            Notice that menu object is bound to the model property of AppMenu component as shown above.</p>

                    <div style={{ overflow: 'auto', height: '400px' }}>
                        <AppCodeHighlight lang="js">
                            {
                                `const menu = [
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
];
    
`}
                        </AppCodeHighlight>
                    </div>

                    <h4>Theme and Layout SASS</h4>
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

                    <AppCodeHighlight lang="css">
                        {
                            `
$primaryColor:#39a3f4;
$primaryTextColor:#ffffff;

@import '../sass/theme/_theme_light.scss';  
`
                        }
                    </AppCodeHighlight>

                    <p>If you are creating a dark theme, import the _theme_dark.scss instead;</p>
                    <AppCodeHighlight lang="css">
                        {
                            `
$primaryColor:#39a3f4;
$primaryTextColor:#ffffff;

@import '../sass/theme/_theme_dark.scss';
`
                        }
                    </AppCodeHighlight>

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

                    <AppCodeHighlight lang="css">
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
                    </AppCodeHighlight>

                    <h4>Common SASS Variables</h4>
                    <p>In case you'd like to customize the shared variables, the _variables.scss files are where the options are defined for layout and theme.</p>

                    <h5>sass/_variables.scss</h5>
                    <AppCodeHighlight lang="css">
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
                    </AppCodeHighlight>
                    <h5>sass/theme/_theme_light.scss</h5>
                    <AppCodeHighlight lang="css">
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
                    </AppCodeHighlight>

                    <h5>sass/theme/_theme_dark.scss</h5>
                    <AppCodeHighlight lang="css">
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
                    </AppCodeHighlight>

                    <h4>Menu Modes</h4>
                    <p>Menu has 2 modes; horizontal and overlay. Layout container element in App.js is used to define which mode to use by adding specific classes. List
                    below indicates the style classes for each mode.</p>

                    <ul>
                        <li>Horizontal: "layout-container layout-menu-horizontal"</li>
                        <li>Overlay: "layout-container"</li>
                    </ul>

                    <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample
                    application has an example implementation of such use case. Refer to App.js for an example.</p>

                    <h4>Customizing Styles</h4>
                    <p>It is suggested to add your customizations in the following sass files under the overrides folder instead of adding them to the
                        scss files under sass folder to avoid maintenance issues after an update.</p>

                    <ul>
                        <li><b>_layout_variables</b>: Variables of the layout.</li>
                        <li><b>_layout_styles</b>: Styles for the layout.</li>
                        <li><b>_theme_variables</b>: Variables of the theme.</li>
                        <li><b>_theme_styles</b>: Styles for the theme.</li>
                    </ul>

                    <h4>Migration Guide</h4>
                    <p>Every change is included in <b>CHANGELOG.md</b> file at the root folder of the distribution along with the instructions to update.</p>
                </div>
            </div>
        </div>
    )
}
