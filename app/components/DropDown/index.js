import React, { Component } from 'react';
import Style from './styles.css';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const listClasses = [
    { label: "First", value: 1, className: 'first' },
    { label: "Second", value: 2, className: 'second' },
    { label: "Third", value: 3, className: 'third' },
];

export default class DropDown extends Component {

    state = {
        selectedOption: null,
        x: ""
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        let cl = String(selectedOption.className)
        this.x = cl;
        console.log(`Option selected:`, cl);
    }

    render() {
        const { selectedOption } = this.state;
        console.log("Selected  :" + this.x)
        const xx = ('Style.' + this.x)
        console.log("Selected  +  :" + xx)
        return (
            <div>
                <div className={Style.first} >Drop Down</div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 ">
                            <div className={`${this.x}`}>

                                <Select
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={listClasses}
                                />
                            </div>
                            <div className={`${this.x}`}>Test</div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>

        )
    }
}
