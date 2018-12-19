import React, { Component } from 'react';
import Style from './styles.css';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const listClasses = [
    { label: "First", value: 1, className: 'first' },
    { label: "Second", value: 2, className: 'second' },
    { label: "Third", value: 3, className: 'third' },
];
export default class DropDown extends Component {

    state = {
        selectedOption: null,
        cl: ''
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        let cl = String(selectedOption.className)
        console.log(`Option selected:`, cl);
    }
    render() {
        const { selectedOption } = this.state;
        const name = Style.this.cl;
        return (
            <div>
                <div className={Style.main}>Drop Down</div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 ">
                            <div className={name}>

                                <Select
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={listClasses}
                                />
                            </div>
                            <div className={Style.cl}>Test</div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>

        )
    }
}
