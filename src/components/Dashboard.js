import React, { Component } from 'react';
import {CarService} from '../service/CarService';
import {Panel} from 'primereact/components/panel/Panel';
import {Checkbox} from 'primereact/components/checkbox/Checkbox';
import {Button} from 'primereact/components/button/Button';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import {InputText} from 'primereact/components/inputtext/InputText';
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {Chart} from 'primereact/chart';
import {ProgressBar} from 'primereact/progressbar';
import {Menu} from 'primereact/menu';
import {FullCalendar} from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [],
            city: null,
            selectedCar: null,
			fullcalendarOptions: {
                plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
				defaultDate: '2017-02-01',
				header: {
					left: 'prev,next today',
					center: 'title',
					right: 'month,agendaWeek,agendaDay'
				}
			},
            events: [
                {
                    "id": 1,
                    "title": "All Day Event",
                    "start": "2017-02-01"
                },
                {
                    "id": 2,
                    "title": "Long Event",
                    "start": "2017-02-07",
                    "end": "2017-02-10"
                },
                {
                    "id": 3,
                    "title": "Repeating Event",
                    "start": "2017-02-09T16:00:00"
                },
                {
                    "id": 4,
                    "title": "Repeating Event",
                    "start": "2017-02-16T16:00:00"
                },
                {
                    "id": 5,
                    "title": "Conference",
                    "start": "2017-02-11",
                    "end": "2017-02-13"
                },
                {
                    "id": 6,
                    "title": "Meeting",
                    "start": "2017-02-12T10:30:00",
                    "end": "2017-02-12T12:30:00"
                },
                {
                    "id": 7,
                    "title": "Lunch",
                    "start": "2017-02-12T12:00:00"
                },
                {
                    "id": 8,
                    "title": "Meeting",
                    "start": "2017-02-12T14:30:00"
                },
                {
                    "id": 9,
                    "title": "Happy Hour",
                    "start": "2017-02-12T17:30:00"
                },
                {
                    "id": 10,
                    "title": "Dinner",
                    "start": "2017-02-12T20:00:00"
                },
                {
                    "id": 11,
                    "title": "Birthday Party",
                    "start": "2017-02-13T07:00:00"
                },
                {
                    "id": 12,
                    "title": "Click for Google",
                    "url": "http://google.com/",
                    "start": "2017-02-28"
                }
            ],
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#03A9F4'
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#FFC107'
                    }
                ]
            }
        };
        this.onTaskChange = this.onTaskChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.carservice = new CarService();
    }

    onTaskChange(e) {
        let selectedTasks = [...this.state.tasks];
        if(e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        this.setState({tasks: selectedTasks});
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        let cities = [
            {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
            {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
            {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
            {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
            {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
        ];

        let menuItems = [
            {
                label: 'Save', icon: 'pi pi-fw pi-check'
            },
            {
                label: 'Update', icon: 'pi pi-fw pi-refresh'
            },
            {
                label: 'Delete', icon: 'pi pi-fw pi-trash'
            }
        ];

        return <div className="p-grid dashboard">
            <div className="p-col-12 p-md-3">
                <div className="overview-box overview-box-1"><h1>SALES</h1>
                    <div className="overview-value">$25,620</div>
                    <div className="overview-ratio">
                        <div className="overview-direction">
                            <i className="pi pi-arrow-up" ></i>
                        </div>
                        <div className="overview-ratio-value">
                            51%
                        </div>
                    </div>
                    <img src="assets/layout/images/dashboard/graph-blue.svg" alt="apollo-layout"/>
                </div>
            </div>

            <div className="p-col-12 p-md-3">
                <div className="overview-box overview-box-2">
                    <h1>VIEWS</h1>
                    <div className="overview-value">9521</div>
                    <div className="overview-ratio">
                        <div className="overview-direction">
                            <i className="pi pi-arrow-up" ></i>
                        </div>
                        <div className="overview-ratio-value">
                            36%
                        </div>
                    </div>
                    <img src="assets/layout/images/dashboard/graph-green.svg" alt="apollo-layout"/>
                </div>
            </div>

            <div className="p-col-12 p-md-3">
                <div className="overview-box overview-box-3">
                    <h1>USERS</h1>
                    <div className="overview-value">452</div>
                    <div className="overview-ratio">
                        <div className="overview-direction">
                            <i className="pi pi-arrow-up"></i>
                        </div>
                        <div className="overview-ratio-value">
                            19%
                        </div>
                    </div>
                    <img src="assets/layout/images/dashboard/graph-yellow.svg" alt="apollo-layout"/>
                </div>
            </div>

            <div className="p-col-12 p-md-3">
                <div className="overview-box overview-box-4">
                    <h1>SOCIAL</h1>
                    <div className="overview-value">65922</div>
                    <div className="overview-ratio">
                        <div className="overview-direction">
                            <i className="pi pi-arrow-up" ></i>
                        </div>
                        <div className="overview-ratio-value">
                            25%
                        </div>
                    </div>
                    <img src="assets/layout/images/dashboard/graph-red.svg" alt="apollo-layout"/>
                </div>
            </div>

            <div className="p-col-12">
                <Panel header="Status" className="circle-panel">
                    <div className="p-grid">
                        <div className="p-col-12 p-lg-3 p-md-6">
                            <div className="status-title" style={{color:'#6ebc3b'}}>Users</div>
                            <div className="circle1">
                                <i className="pi pi-user"></i>
                                <span>75</span>
                            </div>
                        </div>
                        <div className="p-col-12 p-lg-3 p-md-6">
                            <div className="status-title" style={{color:'#f6a821'}}>Mobile</div>
                            <div className="circle2">
                                <i className="pi pi-mobile"></i>
                                <span>25</span>
                            </div>
                        </div>
                        <div className="p-col-12 p-lg-3 p-md-6">
                            <div className="status-title" style={{color:'#039ade'}}>Pageviews</div>
                            <div className="circle3">
                                <i className="pi pi-eye"></i>
                                <span>50</span>
                            </div>
                        </div>
                        <div className="p-col-12 p-lg-3 p-md-6">
                            <div className="status-title" style={{color:'#d66351'}}>Sales</div>
                            <div className="circle4">
                                <i className="pi pi-dollar"></i>
                                <span>75</span>
                            </div>
                        </div>
                    </div>
                </Panel>
            </div>

            <div className="p-col-12 p-md-6 p-lg-4 task-list">
                <Panel header="Tasks" style={{minHeight: '415px'}}>
                    <ul>
                        <li>
                            <Checkbox value="task1" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task1')>-1?true:false}></Checkbox>
                            <span className="task-name">Sales Reports</span>
                            <i className="pi pi-briefcase"></i>
                        </li>
                        <li>
                            <Checkbox value="task2" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task2')>-1?true:false}></Checkbox>
                            <span className="task-name">Pay Invoices</span>
                            <i className="pi pi-file"></i>
                        </li>
                        <li>
                            <Checkbox value="task3" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task3')>-1?true:false}></Checkbox>
                            <span className="task-name">Dinner with Tony</span>
                            <i className="pi pi-comments"></i>
                        </li>
                        <li>
                            <Checkbox value="task4" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task4')>-1?true:false}></Checkbox>
                            <span className="task-name">Client Meeting</span>
                            <i className="pi pi-users"></i>
                        </li>
                        <li>
                            <Checkbox value="task5" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task5')>-1?true:false}></Checkbox>
                            <span className="task-name">New Theme</span>
                            <i className="pi pi-palette"></i>
                        </li>
                        <li>
                            <Checkbox value="task6" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task6')>-1?true:false}></Checkbox>
                            <span className="task-name">Flight Ticket</span>
                            <i className="pi pi-ticket"></i>
                        </li>
                        <li>
                            <Checkbox value="task6" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task7')>-1?true:false}></Checkbox>
                            <span className="task-name">Generate Charts</span>
                            <i className="pi pi-chart-bar"></i>
                        </li>
                        <li>
                            <Checkbox value="task6" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task8')>-1?true:false}></Checkbox>
                            <span className="task-name">Call Client</span>
                            <i className="pi pi-mobile"></i>
                        </li>
                    </ul>
                </Panel>
            </div>

            <div className="p-col-12 p-md-6 p-lg-4 p-fluid contact-form">
                <Panel header="Contact Us" style={{minHeight: '415px'}}>
                    <div className="p-grid">
                        <div className="p-col-12">
                            <Dropdown value={this.state.city} options={cities} placeholder="Select a City" onChange={this.onCityChange} autoWidth={false} />
                        </div>
                        <div className="p-col-12">
                            <InputText type="text" placeholder="Name" />
                        </div>
                        <div className="p-col-12">
                            <InputText type="text" placeholder="Age" />
                        </div>
                        <div className="p-col-12">
                            <InputText type="text" placeholder="Email" />
                        </div>
                        <div className="p-col-12">
                            <InputTextarea type="text" placeholder="Message" />
                        </div>
                        <div className="p-col-12">
                            <Button type="button" label="Send" icon="pi pi-check"></Button>
                        </div>
                    </div>
                </Panel>
            </div>

            <div className="p-col-12 p-lg-4 contacts">
                <Panel header="CONTACTS" style={{minHeight: '360px'}}>
                    <ul>
                        <li className="clearfix">
                            <img alt="User" src="assets/layout/images/avatar/avatar.png" width="45" />
                            <div className="contact-info">
                                <span className="name">Samantha Owens (me)</span>
                                <span className="location">jane@pn-apollo.com</span>
                            </div>
                            <div className="contact-actions">
                                <Button icon="pi pi-comment"></Button>
                                <Button icon="pi pi-reply" className="p-button-success"></Button>
                            </div>
                        </li>
                        <li className="clearfix">
                            <img alt="Contact 1" src="assets/layout/images/avatar/avatar1.png" width="45" />
                            <div className="contact-info">
                                <span className="name">Joshua Williams</span>
                                <span className="location">joshua@pn-apollo.com</span>
                            </div>
                            <div className="contact-actions">
                                <Button icon="pi pi-comment"></Button>
                                <Button icon="pi pi-reply" className="p-button-success"></Button>
                            </div>
                        </li>
                        <li className="clearfix">
                            <img alt="Contact 2" src="assets/layout/images/avatar/avatar2.png" width="45" />
                            <div className="contact-info">
                                <span className="name">Emily Clark</span>
                                <span className="location">emily@pn-apollo.com</span>
                            </div>
                            <div className="contact-actions">
                                <Button icon="pi pi-comment"></Button>
                                <Button icon="pi pi-reply" className="p-button-success"></Button>
                            </div>
                        </li>
                        <li className="clearfix">
                            <img alt="Contact 3" src="assets/layout/images/avatar/avatar3.png" width="45" />
                            <div className="contact-info">
                                <span className="name">Tim Johnson</span>
                                <span className="location">tim@pn-apollo.com</span>
                            </div>
                            <div className="contact-actions">
                                <Button icon="pi pi-comment"></Button>
                                <Button icon="pi pi-reply" className="p-button-success"></Button>
                            </div>
                        </li>
                        <li className="clearfix">
                            <img alt="Contact 4" src="assets/layout/images/avatar/avatar4.png" width="45" />
                            <div className="contact-info">
                                <span className="name">David Stark</span>
                                <span className="location">kelly@pn-apollo.com</span>
                            </div>
                            <div className="contact-actions">
                                <Button icon="pi pi-comment"></Button>
                                <Button icon="pi pi-reply" className="p-button-success"></Button>
                            </div>
                        </li>
                    </ul>
                </Panel>
            </div>

            <div className="p-col-12 p-lg-8 chat">
                <Panel header="Chat" className="no-pad">
                    <ul>
                        <li className="clearfix message-from">
                            <img alt="Contact 2" src="assets/layout/images/avatar/avatar2.png" />
                            <span>Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore.</span>
                        </li>
                        <li className="clearfix message-own">
                            <img alt="User" src="assets/layout/images/avatar/avatar.png" />
                            <span>Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage.</span>
                        </li>
                        <li className="clearfix message-from">
                            <img alt="Contact 2" src="assets/layout/images/avatar/avatar2.png" />
                            <span>Chillwave craft beer tote bag stumptown quinoa hashtag.</span>
                        </li>
                        <li className="clearfix message-own">
                            <img alt="User" src="assets/layout/images/avatar/avatar.png" />
                            <span>Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal.</span>
                        </li>
                        <li className="clearfix message-own">
                            <span>Sed ut perspiciatis unde omnis iste natus.</span>
                        </li>
                        <li className="clearfix message-from">
                            <img alt="Contact 2" src="assets/layout/images/avatar/avatar2.png" />
                            <span>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.</span>
                        </li>
                        <li className="clearfix message-own">
                            <img alt="User" src="assets/layout/images/avatar/avatar.png" />
                            <span>At vero eos et accusamus.</span>
                        </li>
                    </ul>
                    <div className="new-message">
                        <div className="message-attachment">
                            <i className="pi pi-paperclip"></i>
                        </div>
                        <div className="message-input">
                            <input type="text" placeholder="Write a message" className="p-inputtext" />
                        </div>
                    </div>
                </Panel>


                <div className="sales-panel">
                    <div className="card">
                        <DataTable value={this.state.cars} className="p-datatable-borderless" style={{marginBottom: '20px'}} responsive={true}
                                   selectionMode="single" selection={this.state.selectedCar} onSelectionChange={(e) => this.setState({selectedCar: e.value})}>
                            <Column field="vin" header="Vin" sortable={true} />
                            <Column field="year" header="Year" sortable={true} />
                            <Column field="brand" header="Brand" sortable={true} />
                            <Column field="color" header="Color" sortable={true} />
                        </DataTable>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="card timeline p-fluid">
                    <div className="p-grid">
                        <div className="p-col-3">
                            <span className="event-time">just now</span>
                            <i className="pi pi-fw pi-map-marker" style={{color:'#3984b8'}}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner" style={{color:'#3984b8'}}>Katherine May</span>
                            <span className="event-text">Lorem ipsun dolor amet</span>
                            <div className="event-content">
                                <img alt="Bridge" src="assets/layout/images/dashboard/bridge.png" width="100"/>
                            </div>
                        </div>

                        <div className="p-col-3">
                            <span className="event-time">12h ago</span>
                            <i className="pi pi-fw pi-star" style={{color:'#f6ac2b'}}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner" style={{color:'#f6ac2b'}}>Brandon Santos</span>
                            <span className="event-text">Ab nobis, magnam sunt eum. Laudantium, repudiandae, similique!.</span>
                        </div>

                        <div className="p-col-3">
                            <span className="event-time">15h ago</span>
                            <i className="pi pi-fw pi-comment" style={{color:'#7e8dcd'}}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner" style={{color:'#7e8dcd'}}>Stephan Ward</span>
                            <span className="event-text">Omnis veniam quibusdam ratione est repellat qui nam quisquam ab mollitia dolores ullam voluptates, similique, dignissimos.</span>
                            <div className="event-content">
                                <img alt="Nature" src="assets/demo/images/nature/nature1.jpg" width="100"/>
                            </div>
                        </div>

                        <div className="p-col-3">
                            <span className="event-time">2d ago</span>
                            <i className="pi pi-fw pi-globe" style={{color:'#e175a0'}}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner" style={{color:'#e175a0'}}>Jason Smith</span>
                            <span className="event-text">Laudantium, repudiandae, similique!</span>
                            <div className="event-content">
                                <img alt="Map" src="assets/layout/images/dashboard/map.png" />
                            </div>
                        </div>

                        <div className="p-col-3">
                            <span className="event-time">1w ago</span>
                            <i className="pi pi-fw pi-heart" style={{color:'#39b8b6'}}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner">Kevin Cox</span>
                            <span className="event-text">Quibusdam ratione est repellat qui nam quisquam veniam quibusdam ratione.</span>
                        </div>

                        <div className="p-col-3">
                            <span className="event-time">2w ago</span>
                            <i className="pi pi-fw pi-compass" style={{color:'#3eb839'}}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner" style={{color:'#3eb839'}}>Walter White</span>
                            <span className="event-text">I am the one who knocks!</span>
                        </div>

                        <div className="p-col-12">
                            <Button type="button" label="Refresh" icon="pi pi-refresh" className="rounded-btn raised-btn"></Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-md-6">
                <Panel header="Core 1 Data">
                    <Chart type="line" data={this.state.chartData}/>
                </Panel>
            </div>

            <div className="p-col-12 p-md-6">
                <Panel header="Disk Spaces" className="disk-spaces">
                    <span>4.2 TB Used</span>
                    <ProgressBar value={75} showValue={false}></ProgressBar>

                    <span>2.9 TB Used</span>
                    <ProgressBar value={45} showValue={false}></ProgressBar>

                    <span>5.9 TB Used</span>
                    <ProgressBar value={85} showValue={false}></ProgressBar>
                </Panel>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="user-card card">
                    <div className="user-card-header">
                        <Menu model={menuItems} popup={true} ref={el => this.menu = el} appendTo={document.body}/>
                        <Button icon="pi pi-plus" onClick={(event) => this.menu.toggle(event)}/>
                    </div>
                    <div className="user-card-content">
                        <img src="assets/layout/images/avatar/avatar.png" alt="apollo-layout" />

                        <div className="user-card-name">
                            <span>Sarah Miller</span>
                        </div>

                        <div className="user-detail">
                            <ul>
                                <li className="clearfix">
                                    <i className="pi pi-fw pi-list"></i>
                                    <span className="project-title">Tasks</span>
                                    <span className="project-detail">3 open</span>
                                    <div className="project-progressbar">
                                        <div className="project-progressbar-value" style={{width: '50%'}}></div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <i className="pi pi-fw pi-chart-line"></i>
                                    <span className="project-title">Revenue</span>
                                    <span className="project-detail">+20%</span>
                                    <div className="project-progressbar">
                                        <div className="project-progressbar-value" style={{width: '20%'}}></div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <i className="pi pi-fw pi-ticket"></i>
                                    <span className="project-title">Payments</span>
                                    <span className="project-detail">24 new</span>
                                    <div className="project-progressbar">
                                        <div className="project-progressbar-value" style={{width: '65%'}}></div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <i className="pi pi-fw pi-users"></i>
                                    <span className="project-title">Clients</span>
                                    <span className="project-detail">+80%</span>
                                    <div className="project-progressbar">
                                        <div className="project-progressbar-value" style={{width: '80%'}}></div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <i className="pi pi-fw pi-sliders-h"></i>
                                    <span className="project-title">Turnover</span>
                                    <span className="project-detail">+40%</span>
                                    <div className="project-progressbar">
                                        <div className="project-progressbar-value" style={{width: '40%'}}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card map">
                    <h1>Map</h1>
                    <img src="assets/layout/images/dashboard/location.jpg" alt="apollo-layout" />
                </div>
            </div>

            <div className="p-col-12 p-md-8">
                <Panel header="Calendar" style={{height: '100%'}}>
                    <FullCalendar events={this.state.events} options={this.state.fullcalendarOptions} />
                </Panel>
            </div>
        </div>
    }
}
