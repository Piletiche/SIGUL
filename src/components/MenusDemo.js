import React, { Component } from 'react';
import {BreadCrumb} from 'primereact/breadcrumb';
import {Steps} from 'primereact/steps';
import {Menubar} from 'primereact/components/menubar/Menubar';
import {Button} from 'primereact/button';
import {Menu} from 'primereact/menu';
import {TieredMenu} from 'primereact/tieredmenu';
import {ContextMenu} from 'primereact/contextmenu';
import {SlideMenu} from 'primereact/slidemenu';
import {PanelMenu} from 'primereact/panelmenu';
import {TabMenu} from 'primereact/tabmenu';
import {MegaMenu} from 'primereact/megamenu';

export class MenusDemo extends Component {

    constructor() {
        super();
        this.state = {
            tieredItems : [
                {
                    label: 'File',
                    icon: 'fa fa-file-o',
                    items: [{
                        label: 'New',
                        icon: 'fa fa-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                        {label: 'Open'},
                        {label: 'Quit'}
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'fa fa-edit',
                    items: [
                        {label: 'Undo', icon: 'fa fa-mail-forward'},
                        {label: 'Redo', icon: 'fa fa-mail-reply'}
                    ]
                },
                {
                    label: 'Help',
                    icon: 'fa fa-question',
                    items: [
                        {
                            label: 'Contents'
                        },
                        {
                            label: 'Search',
                            icon: 'fa fa-search',
                            items: [
                                {
                                    label: 'Text',
                                    items: [
                                        {
                                            label: 'Workspace'
                                        }
                                    ]
                                },
                                {
                                    label: 'File'
                                }
                            ]}
                    ]
                },
                {
                    label: 'Actions',
                    icon: 'fa fa-gear',
                    items: [
                        {
                            label: 'Edit',
                            icon: 'fa fa-refresh',
                            items: [
                                {label: 'Save', icon: 'fa fa-save'},
                                {label: 'Update', icon: 'fa fa-save'},
                            ]
                        },
                        {
                            label: 'Other',
                            icon: 'fa fa-phone',
                            items: [
                                {label: 'Delete', icon: 'fa fa-minus'}
                            ]
                        }
                    ]
                },
                {
                    label: 'Quit', icon: 'fa fa-minus'
                }
            ],
            items : [
                {
                    label: 'File',
                    items: [
                        {label: 'New', icon: 'fa fa-plus'},
                        {label: 'Open', icon: 'fa fa-download'}
                    ]
                },
                {
                    label: 'Edit',
                    items: [
                        {label: 'Undo', icon: 'fa fa-refresh'},
                        {label: 'Redo', icon: 'fa fa-repeat'}
                    ]
                }],
            panelMenuItems : [
                {
                    label: 'File',
                    icon: 'fa fa-file-o',
                    items: [{
                        label: 'New',
                        icon: 'fa fa-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                        {label: 'Open'},
                        {label: 'Quit'}
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'fa fa-edit',
                    items: [
                        {label: 'Undo', icon: 'fa fa-mail-forward'},
                        {label: 'Redo', icon: 'fa fa-mail-reply'}
                    ]
                },
                {
                    label: 'Help',
                    icon: 'fa fa-question',
                    items: [
                        {
                            label: 'Contents'
                        },
                        {
                            label: 'Search',
                            icon: 'fa fa-search',
                            items: [
                                {
                                    label: 'Text',
                                    items: [
                                        {
                                            label: 'Workspace'
                                        }
                                    ]
                                },
                                {
                                    label: 'File'
                                }
                            ]}
                    ]
                },
                {
                    label: 'Actions',
                    icon: 'fa fa-gear',
                    items: [
                        {
                            label: 'Edit',
                            icon: 'fa fa-refresh',
                            items: [
                                {label: 'Save', icon: 'fa fa-save'},
                                {label: 'Update', icon: 'fa fa-save'},
                            ]
                        },
                        {
                            label: 'Other',
                            icon: 'fa fa-phone',
                            items: [
                                {label: 'Delete', icon: 'fa fa-minus'}
                            ]
                        }
                    ]
                }
            ],
            tabMenuItems : [
                {label: 'Stats', icon: 'fa fa-bar-chart'},
                {label: 'Calendar', icon: 'fa fa-calendar'},
                {label: 'Documentation', icon: 'fa fa-book'},
                {label: 'Support', icon: 'fa fa-support'},
                {label: 'Social', icon: 'fa fa-twitter'}
            ],
            megaMenuItems : [
                {
                    label: 'TV', icon: 'fa fa-check',
                    items: [
                        [
                            {
                                label: 'TV 1',
                                items: [{label: 'TV 1.1'},{label: 'TV 1.2'}]
                            },
                            {
                                label: 'TV 2',
                                items: [{label: 'TV 2.1'},{label: 'TV 2.2'}]
                            }
                        ],
                        [
                            {
                                label: 'TV 3',
                                items: [{label: 'TV 3.1'},{label: 'TV 3.2'}]
                            },
                            {
                                label: 'TV 4',
                                items: [{label: 'TV 4.1'},{label: 'TV 4.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Sports', icon: 'fa fa-soccer-ball-o',
                    items: [
                        [
                            {
                                label: 'Sports 1',
                                items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
                            },
                            {
                                label: 'Sports 2',
                                items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
                            },

                        ],
                        [
                            {
                                label: 'Sports 3',
                                items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
                            },
                            {
                                label: 'Sports 4',
                                items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Sports 5',
                                items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
                            },
                            {
                                label: 'Sports 6',
                                items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Entertainment', icon: 'fa fa-child',
                    items: [
                        [
                            {
                                label: 'Entertainment 1',
                                items: [{label: 'Entertainment 1.1'},{label: 'Entertainment 1.2'}]
                            },
                            {
                                label: 'Entertainment 2',
                                items: [{label: 'Entertainment 2.1'},{label: 'Entertainment 2.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Entertainment 3',
                                items: [{label: 'Entertainment 3.1'},{label: 'Entertainment 3.2'}]
                            },
                            {
                                label: 'Entertainment 4',
                                items: [{label: 'Entertainment 4.1'},{label: 'Entertainment 4.2'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Technology', icon: 'fa fa-gears',
                    items: [
                        [
                            {
                                label: 'Technology 1',
                                items: [{label: 'Technology 1.1'},{label: 'Technology 1.2'}]
                            },
                            {
                                label: 'Technology 2',
                                items: [{label: 'Technology 2.1'},{label: 'Technology 2.2'}]
                            },
                        ],
                        [
                            {
                                label: 'Technology 4',
                                items: [{label: 'Technology 3.1'},{label: 'Technology 3.2'}]
                            }
                        ]
                    ]
                }
            ]
        };
    }

    render() {

        let breadcrumdItems = [
            {label:'Categories'},
            {label:'Sports'},
            {label:'Football'},
            {label:'Countries'},
            {label:'Spain'},
            {label:'F.C. Barcelona'},
            {label:'Squad'},
            {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
        ];

        let home = {icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact'}

        let stepsItems = [
            {
                label: 'Personal'
            },
            {
                label: 'Seat'
            },
            {
                label: 'Payment'
            },
            {
                label: 'Confirmation'
            }
        ];

        return(
            <div className="ui-g ui-fluid">
                <div className="ui-g-12">
                    <div className="card card-w-title">
                        <h1>Breadcrumb</h1>
                        <BreadCrumb model={breadcrumdItems} home={home}/>
                    </div>
        
                    <div className="card card-w-title">
                        <h1>Steps</h1>
                        <Steps model={stepsItems}/>
                    </div>
                
                    <div className="card card-w-title">
                        <h1>MenuBar</h1>
                        <Menubar model={this.state.tieredItems}/>
                    </div>
                </div>

                <div className="ui-g-12 ui-lg-6">
                    {/* Left Colum */}
                    <div className="card card-w-title">
                        <h1>Plain Menu</h1>
                        <Menu model={this.state.items}/>
                        <Menu model={this.state.items} ref={(el)=>this.menu=el} popup={true} style={{width:250}}/>
                        <Button icon="fa fa-external-link" label="Show" onClick={(event)=>this.menu.toggle(event)} style={{marginTop:'20px', width:'auto'}}/>
                    </div>

                    <div className="card card-w-title">
                        <h1>TieredMenu</h1>
                        <TieredMenu model={this.state.tieredItems} style={{width:'250px',marginBottom:'20px'}}/>
                    </div>
                </div>

                <div className="ui-g-12 ui-lg-6">
                    {/* Right Colum */}
                    <div className="card card-w-title">
                        <h1 style={{marginTop:'40px'}}>ContextMenu</h1>
                        Right click!
                        <ContextMenu global={true} model={this.state.tieredItems} style={{width:'12.5em'}}/>
                    </div>
        
                    <div className="card">
                        <h1>SlideMenu</h1>
                        <SlideMenu model={this.state.items} style={{width:'260px'}} menuWidth={260}/>
                    </div>

                    <div className="card">
                        <h1>PanelMenu</h1>
                        <PanelMenu model={this.state.panelMenuItems}/>
                    </div>
                </div>

                <div className="ui-g-12 ui-g-6">
                    <div className="card">
                        <h1>TabMenu</h1>
                        <TabMenu model={this.state.tabMenuItems}/>
                    </div>
                </div>
    
                <div className="ui-g-12 ui-g-6">
                    <div className="card">
                        <h1>MegaMenu - Horizontal</h1>
                        <MegaMenu model={this.state.megaMenuItems}/>

                        <h1>MegaMenu - Vertical</h1>
                        <MegaMenu model={this.state.megaMenuItems} orientation="vertical" style={{width:'200px'}}/>
                    </div>
                </div>
            </div>
        )
    }
}