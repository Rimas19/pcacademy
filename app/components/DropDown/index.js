import React, { Component } from 'react';
import Style from './styles.css';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const techCompanies = [
    { label: "first", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
];
export default class DropDown extends Component {

    state = {

        value: 1
    }

    render() {
        return (
            <div>
                <div className={Style.main}>Drop Down</div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <Select options={techCompanies} />
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>

        )
    }
}
