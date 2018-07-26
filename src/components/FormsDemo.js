import React, { Component } from 'react';
import {CountryService} from '../service/CountryService';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {AutoComplete} from 'primereact/autocomplete';
import {MultiSelect} from 'primereact/multiselect';
import {Calendar} from 'primereact/calendar';
import {Chips} from 'primereact/chips';
import {Checkbox} from 'primereact/checkbox';
import {RadioButton} from 'primereact/radiobutton';
import {InputSwitch} from 'primereact/inputswitch';
import {Dropdown} from 'primereact/dropdown';
import {Password} from 'primereact/password';
import {Spinner} from 'primereact/spinner';
import {Slider} from 'primereact/slider';
import {ListBox} from 'primereact/listbox';
import {Rating} from 'primereact/rating';
import {ColorPicker} from 'primereact/colorpicker';
import {Editor} from 'primereact/editor';
import {ToggleButton} from 'primereact/togglebutton';
import {SelectButton} from 'primereact/selectbutton';
import {Button} from 'primereact/button';
import {SplitButton} from 'primereact/splitbutton';

export class FormsDemo extends Component {

    constructor() {
        super();
        this.state = {
            countriesData: [],
            carOptions: [],
            checkboxValue: [],
            sliderValue: [20,80],
            ratingValue: null,
            chipsValue: []
        };
        this.countryService = new CountryService();
        this.onMultiSelectCarChange = this.onMultiSelectCarChange.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onInputSwitchChange = this.onInputSwitchChange.bind(this);
        this.onDropdownChange = this.onDropdownChange.bind(this);
        this.onSpinnerChange = this.onSpinnerChange.bind(this);
        this.onSliderChange = this.onSliderChange.bind(this);
        this.onListBoxChange = this.onListBoxChange.bind(this);
        this.onRatingChange = this.onRatingChange.bind(this);
        this.onColorPickerChange = this.onColorPickerChange.bind(this);
        this.onInputGroupCheck = this.onInputGroupCheck.bind(this);
        this.onToggleChange = this.onToggleChange.bind(this);
        this.onSelectButtonChange = this.onSelectButtonChange.bind(this);
    }

    componentDidMount(){
        this.setState({countriesData: this.countryService.getCountries(this)})
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'];
    }

    onCountryValueChange(e) {
        this.setState({ country: e.value, filteredCountries: null });
    }

    filterCountry(event) {
        let results = this.state.countriesData.filter((country) => {
            return country.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
        this.setState({ filteredCountries: results });
    }

    onBrandValueChange(e) {
        this.setState({ brand: e.value, filteredBrands: null });
    }

    filterBrands(event) {
        setTimeout(() => {
            let results;

            if (event.query.length === 0) {
                results = [...this.brands];
            }
            else {
                results = this.brands.filter((brand) => {
                    return brand.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            this.setState({ filteredBrands: results });
        }, 250);
    }

    itemTemplate(brand) {
        if (!brand) {
            return;
        }

        return (
                <div className="ui-helper-clearfix">
                    <img alt={brand} src={`assets/demo/images/car/${brand}.png`} style={{ width: '32px', display: 'inline-block', margin: '5px 0 2px 5px' }} />
                    <div style={{ fontSize: '18px', float: 'right', margin: '10px 10px 0 0' }}>{brand}</div>
                </div>
        );
    }

    onMultiSelectCarChange(e) {
        this.setState({carOptions: e.value});
    }

    onRadioChange(event){
        this.setState({radioValue: event.value})
    }

    onCheckboxChange(event){
        var selected = [...this.state.checkboxValue];
        if(event.checked)
            selected.push(event.value);
        else
            selected.splice(selected.indexOf(event.value), 1);

        this.setState({checkboxValue: selected});

    }

    onInputSwitchChange(event){
        this.setState({inputSwitchValue: event.value})
    }

    onDropdownChange(event){
        this.setState({dropdownCity: event.value})
    }

    onSpinnerChange(event){
        this.setState({spinnerValue: event.value})
    }

    onSliderChange(event){
        this.setState({sliderValue: event.value})
    }

    onListBoxChange(event){
        this.setState({listBoxValue: event.value})
    }

    onRatingChange(event){
        this.setState({ratingValue: event.value})

    }

    onColorPickerChange(event){
        this.setState({colorPickerValue: event.value})
    }

    onInputGroupCheck(event){
        this.setState({inputGroupValue: event.checked})
    }

    onToggleChange(event){
        this.setState({toggleButtonValue: event.value})
    }

    onSelectButtonChange(event){
        this.setState({types: event.value})
    }

    render() {

        let carOptions=[
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        let cities = [
            {label: 'Select City', value: null},
            {label: 'New York', value: 'New York'},
            {label: 'Rome', value: 'Rome'},
            {label: 'London', value: 'London'},
            {label: 'Istanbul', value: 'Istanbul'},
            {label: 'Paris', value: 'Paris'},
        ];
        
        let listBoxCities = cities.slice(1, 6);

        let types = [
            {label: 'Apartment', value: 'Apartment'},
            {label: 'House', value: 'House'},
            {label: 'Studio', value: 'Studio'}
        ];

        let splitButtonItems = [
            {label: 'Update', icon: 'fa fa-refresh'},
            {label: 'Delete', icon: 'fa fa-close'},
            {label: 'Home', icon: 'fa fa-home', url: 'http://www.primefaces.org/primereact'}
        ];

        return <div className="ui-g ui-fluid">
            <div className="ui-g-12 ui-lg-6">
                {/* Left Side */}
                <div className="card card-w-title">
                    <h1>InputText</h1>
                    <div className="ui-g form-group">
                        <div className="ui-g-12 ui-md-4">
                            <InputText placeholder="Name"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText placeholder="Email"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText placeholder="Phone"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText placeholder="Address"/>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText placeholder="Disabled" disabled={true} />
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <InputText placeholder="Invalid" className="ui-state-error" />
                        </div>
                    </div>
                </div>

                <div className="card card-w-title">
                    <h1>TextArea</h1>
                    <InputTextarea rows={3} cols={30} placeholder="Your Message" autoResize={true} />
                </div>

                <div className="card card-w-title">
                    <h1>AutoComplete</h1>
                    <div className="ui-g form-group">
                        <div className="ui-g-12">
                            <label htmlFor="acSimple">Simple</label>
                        </div>
                        <div className="ui-g-12" style={{marginBottom:'10px'}}>
                            <AutoComplete minLength={1} placeholder="Countries" id="acSimple" size={30} field="name" suggestions={this.state.filteredCountries}
                                          completeMethod={this.filterCountry.bind(this)} value={this.state.country}
                                          onChange={this.onCountryValueChange.bind(this)}
                            />
                        </div>
                        <div className="ui-g-12">
                            <label htmlFor="acAdvanced">Advanced</label>
                        </div>
                        <div className="ui-g-12">
                            <AutoComplete minLength={1} placeholder="Hint: type 'v' or 'f'" id="acAdvanced" size={30} dropdown={true} multiple={true}
                                          suggestions={this.state.filteredBrands} completeMethod={this.filterBrands.bind(this)} value={this.state.brand}
                                          onChange={this.onBrandValueChange.bind(this)} itemTemplate={this.itemTemplate.bind(this)} />
                        </div>
                    </div>
                </div>

                <div className="card card-w-title">
                    <h1>MultiSelect</h1>
                    <MultiSelect value={this.state.carOptions} options={carOptions} onChange={this.onMultiSelectCarChange} />
                </div>

                <div className="card card-w-title">
                    <h1>Calendar</h1>
                    <Calendar value={this.state.date1} onChange={(e) => this.setState({date1: e.value})} inline={true} />

                    <div className="ui-g form-group-m" style={{marginTop:'20px'}}>
                        <div className="ui-g-12">
                            <Calendar id="popup" placeholder="Popup" value={this.state.date2} onChange={(e) => this.setState({date2: e.value})}/>
                        </div>
                        <div className="ui-g-12">
                            <Calendar id="datetime" placeholder="DateTime" showTime={true} dateFormat="mm/dd/yy" value={this.state.date3} onChange={(e) => this.setState({date3: e.value})}/>
                        </div>
                        <div className="ui-g-12">
                            <Calendar id="time" placeholder="Time" timeOnly={true} showTime={true} value={this.state.date4} onChange={(e) => this.setState({date4: e.value})}/>
                        </div>
                        <div className="ui-g-12">
                            <Calendar id="showIcon" placeholder="Button" showIcon={true} value={this.state.date5} onChange={(e) => this.setState({date5: e.value})}/>
                        </div>
                    </div>
                </div>

                <div className="card card-w-title">
                    <h1>Chips</h1>
                    <Chips value={this.state.chipsValue} onChange={(e) => this.setState({chipsValue: e.value})}></Chips>
                </div>
            </div>
            <div className="ui-g-12 ui-lg-6">
                {/* Right Side */}
                <div className="card card-w-title">
                    <h1>Checkboxes</h1>
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-4">
                            <Checkbox value="Ultima" inputId="cb1" onChange={this.onCheckboxChange} checked={this.state.checkboxValue.indexOf('Ultima')>-1?true:false}/>
                            <label htmlFor="cb1">Ultima</label>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <Checkbox value="Icarus" inputId="cb2" onChange={this.onCheckboxChange} checked={this.state.checkboxValue.indexOf('Icarus')>-1?true:false}/>
                            <label htmlFor="cb2">Icarus</label>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <Checkbox value="Omega" inputId="cb3" onChange={this.onCheckboxChange} checked={this.state.checkboxValue.indexOf('Omega')>-1?true:false}/>
                            <label htmlFor="cb3">Omega</label>
                        </div>
                    </div>
                </div>
        
                <div className="card card-w-title">
                    <h1>RadioButtons</h1>
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-4">
                            <RadioButton value="Ultima" inputId="rb1" onChange={this.onRadioChange} checked={this.state.radioValue === "Ultima"}/>
                            <label htmlFor="rb1">Ultima</label>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <RadioButton value="Icarus" inputId="rb2" onChange={this.onRadioChange} checked={this.state.radioValue === "Icarus"}/>
                            <label htmlFor="rb2">Icarus</label>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <RadioButton value="Omega" inputId="rb3" onChange={this.onRadioChange} checked={this.state.radioValue === "Omega"}/>
                            <label htmlFor="rb3">Omega</label>
                        </div>
                    </div>
                </div>
        
                <div className="card card-w-title">
                    <h1>InputSwitch</h1>
                    <InputSwitch checked={this.state.inputSwitchValue} onChange={this.onInputSwitchChange} />
                </div>
        
                <div className="card card-w-title">
                    <h1>Dropdown</h1>
                    <Dropdown options={cities} value={this.state.dropdownCity} onChange={this.onDropdownChange} autoWidth={false} />
                </div>
        
                <div className="card card-w-title">
                    <h1>Password</h1>
                    <Password/>
                </div>
        
                <div className="card card-w-title">
                    <h1>Spinner</h1>
                    <Spinner value={this.state.spinnerValue} onChange={this.onSpinnerChange} />
                </div>
        
                <div className="card card-w-title">
                    <h1>Slider</h1>
                    <Slider range={true} value={this.state.sliderValue} onChange={this.onSliderChange} />
                </div>
        
                <div className="card card-w-title">
                    <h1>ListBox</h1>
                    <ListBox options={listBoxCities} value={this.state.listBoxValue} onChange={this.onListBoxChange} filter={true} />
                </div>

                <div className="card card-w-title">
                    <h1>Rating</h1>
                    <Rating value={this.state.ratingValue} onChange={this.onRatingChange} />
                </div>
        
                <div className="card card-w-title">
                    <h1>ColorPicker</h1>
                    <ColorPicker inline={true} onChange={this.onColorPickerChange} />
                </div>
            </div>

            <div className="ui-g-12">
                <div className="card card-w-title">
                    <h1>Input Groups</h1>
                    <div className="ui-g form-group">
                        <div className="ui-g-12 ui-md-6">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon"><i className="fa fa-user" /></span>
                                <InputText placeholder="Username"/>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-6">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon"><i className="fa fa-credit-card" /></span>
                                <span className="ui-inputgroup-addon"><i className="fa fa-cart-plus"></i></span>
                                <InputText placeholder="Payment"/>
                                <span className="ui-inputgroup-addon">$</span>
                                <span className="ui-inputgroup-addon">.00</span>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-6">
                            <div className="ui-inputgroup">
                                <InputText placeholder="Search"/>
                                <Button icon="fa fa-search"/>
                            </div>
                        </div>

                        <div className="ui-g-12 ui-md-6">
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon ui-inputgroup-addon-checkbox">
                                    <Checkbox checked={this.state.inputGroupValue} onChange={this.onInputGroupCheck} />
                                </span>
                                <InputText placeholder="Confirm"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ui-g-12">
                <div className="card card-w-title">
                    <h1>Editor</h1>
                    <Editor style={{height:'320px'}} />
                </div>
            </div>

            <div className="ui-g-12 ui-g-nopad">
                <div className="ui-g-12 ui-lg-6" style={{paddingTop:0}}>
                    <div className="card card-w-title">
                        <h1>Buttons</h1>

                        <div className="ui-g">
                            <div className="ui-g-12">ToggleButton</div>
                            <div className="ui-g-12">
                                <ToggleButton checked={this.state.toggleButtonValue} onChange={this.onToggleChange} />
                            </div>
                    
                            <div className="ui-g-12">SelectButton</div>
                            <div className="ui-g-12">
                                <SelectButton value={this.state.types} options={types} onChange={this.onSelectButtonChange} />
                            </div>
                    
                            <div className="ui-g-12">Button</div>
                            <div className="ui-g-12">
                                <Button label="Bookmark"/>
                            </div>

                            <div className="ui-g-12">Left Icon</div>
                            <div className="ui-g-12">
                                <Button label="Clear" icon="fa fa-close" />
                            </div>
                    
                            <div className="ui-g-12">Right Icon</div>
                            <div className="ui-g-12">
                                <Button label="Clear" icon="fa fa-close" iconPos="right"/>
                            </div>

                            <div className="ui-g-12">Icon Only</div>
                            <div className="ui-g-12">
                                <Button icon="fa fa-check"/>
                            </div>

                            <div className="ui-g-12">Link</div>
                            <div className="ui-g-12"><a href="http://www.primefaces.org" >Homepage</a></div>

                            <div className="ui-g-12">SplitButton</div>
                            <div className="ui-g-12">
                                <SplitButton label="Save" icon="fa fa-save" model={splitButtonItems} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui-g-12 ui-lg-6" style={{paddingTop:0}}>
                    <div className="card card-w-title">
                        <h1>Colored Buttons</h1>
                        <p>Flat buttons with various color alternatives.</p>
                        
                        <div className="ui-g">
                            <div className="ui-g-12" style={{textAlign:'center'}}>
                                <Button label="Primary Button" style={{marginBottom:'10px'}} />
                                <Button label="Secondary Button" style={{marginBottom:'10px'}} className="ui-button-secondary" />
                                <Button label="Inline Button" style={{marginBottom:'10px', width: 'auto'}} />
                                <Button label="Green / Success Button" style={{marginBottom:'10px'}} className="ui-button-success" />
                                <Button label="Blue / Info Button" style={{marginBottom:'10px'}} className="ui-button-info" />
                                <Button label="Orange / Warning Button" style={{marginBottom:'10px'}} className="ui-button-warning" />
                                <Button label="Red / Danger Button" style={{marginBottom:'10px'}} className="ui-button-danger" />
                                <Button label="Purple Button" style={{marginBottom:'10px'}} className="purple-btn" />
                                <Button label="Cyan Button" style={{marginBottom:'10px'}} className="cyan-btn" />
                                <Button label="Yellow Button" style={{marginBottom:'10px'}} className="yellow-btn" />
                                <Button label="Indigo Button" style={{marginBottom:'10px'}} className="indigo-btn" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>;
    }
}