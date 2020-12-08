import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';

export const Widgets = () => {

    return (
        <div className="p-grid">
            <h4>Reusable CSS widgets for your applications.</h4>
            <div className="p-col-12">
                <div className="card">
                    <h4>Overview Boxes</h4>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-3">
                            <div className="widget-overview-box overview-box-1">
                                <h1>SALES</h1>
                                <div className="overview-value">$25,620</div>
                                <div className="overview-ratio">
                                    <div className="overview-direction">
                                        <i className="pi pi-arrow-up" ></i>
                                    </div>
                                    <div className="overview-ratio-value">51%</div>
                                </div>
                                <img src="assets/layout/images/dashboard/graph-blue.svg" alt="apollo-layout" />
                            </div>
                        </div>
                        <div className="p-col-12 p-md-3">
                            <div className="widget-overview-box overview-box-2">
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
                                <img src="assets/layout/images/dashboard/graph-green.svg" alt="apollo-layout" />
                            </div>
                        </div>
                        <div className="p-col-12 p-md-3">
                            <div className="widget-overview-box overview-box-3">
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
                                <img src="assets/layout/images/dashboard/graph-yellow.svg" alt="apollo-layout" />
                            </div>
                        </div>
                        <div className="p-col-12 p-md-3">
                            <div className="widget-overview-box overview-box-4">
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
                                <img src="assets/layout/images/dashboard/graph-red.svg" alt="apollo-layout" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-col-12">
                <div className="card widget-circle-panel">
                    <h4>Status</h4>
                    <div className="p-grid p-nogutter">
                        <div className="p-col-12 p-lg-3 p-md-6">
                            <div className="status-title" style={{ color: '#6ebc3b' }}>Users</div>
                            <div className="circle1">
                                <i className="pi pi-user"></i>
                                <span>95</span>
                            </div>
                        </div>
                        <div className="p-col-12 p-lg-3 p-md-6">
                            <div className="status-title" style={{ color: '#f6a821' }}>Mobile</div>
                            <div className="circle2">
                                <i className="pi pi-mobile"></i>
                                <span>95</span>
                            </div>
                        </div>
                        <div className="p-col-12 p-lg-3 p-md-6">
                            <div className="status-title" style={{ color: '#039ade' }}>Pageviews</div>
                            <div className="circle3">
                                <i className="pi pi-eye"></i>
                                <span>95</span>
                            </div>
                        </div>
                        <div className="p-col-12 p-lg-3 p-md-6">
                            <div className="status-title" style={{ color: '#d66351' }}>Sales</div>
                            <div className="circle4">
                                <i className="pi pi-dollar"></i>
                                <span>95</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="card p-fluid">
                    <h4>Contact Form</h4>
                    <div className="p-field">
                        <label htmlFor="firstname">First Name</label>
                        <InputText id="firstname" />
                    </div>
                    <div className="p-field">
                        <label htmlFor="lastname">Last Name</label>
                        <InputText id="lastname" />
                    </div>
                    <div className="p-field">
                        <label htmlFor="email">Email</label>
                        <InputText id="email" />
                    </div>
                    <div className="p-field">
                        <label htmlFor="message">Message</label>
                        <InputTextarea id="message" ></InputTextarea>
                    </div>
                    <Button label="Send"></Button>
                </div>

                <div className="card widget-contacts">
                    <ul>
                        <li className="clearfix">
                            <img src="assets/layout/images/avatar/avatar.png" library="verona-layout" width="45" alt="avatar.png" />
                            <div className="contact-info">
                                <span className="name">Samantha Owens (me)</span>
                                <span className="location">jane@pf-verona.com</span>
                            </div>
                            <div className="contact-actions">
                                <Button icon="pi pi-comment"></Button>
                                <Button icon="pi pi-reply" className="p-button-success"></Button>
                            </div>
                        </li>
                        <li className="clearfix">
                            <img src="assets/layout/images/avatar/avatar1.png" library="verona-layout" width="45" alt="avatar1.png" />
                            <div className="contact-info">
                                <span className="name">Joshua Williams</span>
                                <span className="location">joshua@pf-verona.com</span>
                            </div>
                            <div className="contact-actions">
                                <Button icon="pi pi-comment"></Button>
                                <Button icon="pi pi-reply" className="p-button-success"></Button>
                            </div>
                        </li>
                        <li className="clearfix">
                            <img src="assets/layout/images/avatar/avatar2.png" library="verona-layout" width="45" alt="avatar2.png" />
                            <div className="contact-info">
                                <span className="name">Emily Clark</span>
                                <span className="location">emily@pf-verona.com</span>
                            </div>
                            <div className="contact-actions">
                                <Button icon="pi pi-comment"></Button>
                                <Button icon="pi pi-reply" className="p-button-success"></Button>
                            </div>
                        </li>
                        <li className="clearfix">
                            <img src="assets/layout/images/avatar/avatar3.png" library="verona-layout" width="45" alt="avatar3.png" />
                            <div className="contact-info">
                                <span className="name">Tim Johnson</span>
                                <span className="location">tim@pf-verona.com</span>
                            </div>
                            <div className="contact-actions">
                                <Button icon="pi pi-comment"></Button>
                                <Button icon="pi pi-reply" className="p-button-success"></Button>
                            </div>
                        </li>
                        <li className="clearfix">
                            <img src="assets/layout/images/avatar/avatar4.png" library="verona-layout" width="45" alt="avatar4.png" />
                            <div className="contact-info">
                                <span className="name">David Stark</span>
                                <span className="location">kelly@pf-verona.com</span>
                            </div>
                            <div className="contact-actions">
                                <Button icon="pi pi-comment"></Button>
                                <Button icon="pi pi-reply" className="p-button-success"></Button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="widget-user-card card">
                    <div className="user-card-header">
                        <Button icon="pi pi-plus" className="p-button-secondary"></Button>
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
                                        <div className="project-progressbar-value" style={{ width: '50%' }}></div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <i className="pi pi-fw pi-chart-line"></i>
                                    <span className="project-title">Revenue</span>
                                    <span className="project-detail">+20%</span>
                                    <div className="project-progressbar">
                                        <div className="project-progressbar-value" style={{ width: '20%' }}></div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <i className="pi pi-fw pi-ticket"></i>
                                    <span className="project-title">Payments</span>
                                    <span className="project-detail">24 new</span>
                                    <div className="project-progressbar">
                                        <div className="project-progressbar-value" style={{ width: '65%' }}></div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <i className="pi pi-fw pi-users"></i>
                                    <span className="project-title">Clients</span>
                                    <span className="project-detail">+80%</span>
                                    <div className="project-progressbar">
                                        <div className="project-progressbar-value" style={{ width: '80%' }}></div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <i className="pi pi-fw pi-sliders-h"></i>
                                    <span className="project-title">Turnover</span>
                                    <span className="project-detail">+40%</span>
                                    <div className="project-progressbar">
                                        <div className="project-progressbar-value" style={{ width: '40%' }}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h4>Image List</h4>

                    <ul className="widget-image-list">
                        <li>
                            <span>Product</span>
                            <span>Sales</span>
                        </li>
                        <li>
                            <span>
                                <img src="assets/demo/images/product/bamboo-watch.jpg" alt="apollo-layout" />
                                <span>Bamboo Watch</span>
                            </span>
                            <span className="listitem-value">82</span>
                        </li>
                        <li>
                            <span>
                                <img src="assets/demo/images/product/blue-band.jpg" alt="apollo-layout" />
                                <span>Blue Band</span>
                            </span>
                            <span className="listitem-value">75</span>
                        </li>
                        <li>
                            <span>
                                <img src="assets/demo/images/product/game-controller.jpg" alt="apollo-layout" />
                                <span>Game Controller</span>
                            </span>
                            <span className="listitem-value">64</span>
                        </li>
                        <li>
                            <span>
                                <img src="assets/demo/images/product/lime-band.jpg" alt="apollo-layout" />
                                <span>Lime Band</span>
                            </span>
                            <span className="listitem-value">62</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="card widget-timeline p-fluid">
                    <div className="p-grid">
                        <div className="p-col-3">
                            <span className="event-time">just now</span>
                            <i className="pi pi-fw pi-map-marker" style={{ color: '#147df0' }}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner" style={{ color: '#147df0' }}>Katherine May</span>
                            <span className="event-text">Lorem ipsun dolor amet</span>
                            <div className="event-content">
                                <img src="assets/layout/images/dashboard/bridge.png" library="verona-layout" width="100" alt="bridge.png" />
                            </div>
                        </div>

                        <div className="p-col-3">
                            <span className="event-time">12h ago</span>
                            <i className="pi pi-fw pi-star" style={{ color: '#ed3c76' }}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner" style={{ color: '#ed3c76' }}>Brandon Santos</span>
                            <span className="event-text">Ab nobis, magnam sunt eum. Laudantium, repudiandae, similique!.</span>
                        </div>

                        <div className="p-col-3">
                            <span className="event-time">15h ago</span>
                            <i className="pi pi-fw pi-comment" style={{ color: '#3e9018' }}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner" style={{ color: '#2EB872' }}>Stephan Ward</span>
                            <span className="event-text">Omnis veniam quibusdam ratione est repellat qui nam quisquam ab mollitia dolores ullam voluptates, similique, dignissimos.</span>
                        </div>

                        <div className="p-col-3">
                            <span className="event-time">2d ago</span>
                            <i className="pi pi-fw pi-globe" style={{ color: '#ffb200' }}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner" style={{ color: '#ffb200' }}>Jason Smith</span>
                            <span className="event-text">Laudantium, repudiandae, similique!</span>
                            <div className="event-content">
                                <img src="assets/layout/images/dashboard/map.png" alt="map.png" />
                            </div>
                        </div>

                        <div className="p-col-3">
                            <span className="event-time">1w ago</span>
                            <i className="pi pi-fw pi-heart" style={{ color: '#633ea5' }}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner">Kevin Cox</span>
                            <span className="event-text">Quibusdam ratione est repellat qui nam quisquam veniam quibusdam ratione.</span>
                        </div>

                        <div className="p-col-3">
                            <span className="event-time">2w ago</span>
                            <i className="pi pi-fw pi-compass" style={{ color: '#599597' }}></i>
                        </div>
                        <div className="p-col-9">
                            <span className="event-owner" style={{ color: '#599597' }}>Walter White</span>
                            <span className="event-text">I am the one who knocks!</span>
                        </div>
                        <div className="p-col-12">
                            <Button icon="pi pi-refresh" label="Refresh"></Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-lg-8">
                <div className="card">
                    <h4>Chat</h4>
                    <div className="widget-chat">
                        <ul>
                            <li className="message-from">
                                <img src="assets/demo/images/avatar/ionibowcher.png" alt="apollo-layout" />
                                <div>Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore.</div>
                            </li>
                            <li className="message-own">
                                <img src="assets/demo/images/avatar/onyamalimba.png" alt="apollo-layout" />
                                <div>Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage.</div>
                            </li>
                            <li className="message-from">
                                <img src="assets/demo/images/avatar/ionibowcher.png" alt="apollo-layout" />
                                <div>Chillwave craft beer tote bag stumptown quinoa hashtag.</div>
                            </li>
                            <li className="message-own">
                                <img src="assets/demo/images/avatar/onyamalimba.png" alt="apollo-layout" />
                                <div>Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal.</div>
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
                    </div>
                </div>
            </div>

            <div className="p-col-12 p-lg-4">
                <div className="widget-pricing-box card">
                    <span className="pricing-name">Professional</span>
                    <div className="pricing-fee">10$</div>

                    <p>2TB Disk Space</p>
                    <p>10TB Monthly Bandwith</p>
                    <p>Unlimited Email Accounts</p>
                    <p>50 Subdomain</p>
                </div>
            </div>
        </div>
    )
}
