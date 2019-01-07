import React, { Component } from 'react';
import Project from '../project';
import Customer from '../Customer'
import './content.less';
export default class Content extends Component {


    render() {
        return (
            <div className="container">
                {/* <div className="title">
                    <h1 >APP TITLE</h1>
                </div> */}


                <div className="project">
                    <div className="projText">
                        <h4>Projects</h4>
                    </div>

                    <Project />
                </div>


                <div className="customer">
                    <div className="custText">
                        <h4>Customers</h4>
                    </div>

                    <Customer />
                </div>
            </div>
        );
    }
}

