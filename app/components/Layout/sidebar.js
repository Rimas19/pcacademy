import React from "react";

import Sidebar, { SidebarStyles } from "react-sidebar";
import './sidebar.less'
import 'font-awesome/css/font-awesome.min.css';

export default class SiderBar extends React.Component {
    constructor(props) {

        super(props);
        this.state = {

            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }


    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }
    gotoCustomer = () => {
        window.location = "/main/dashboard/customers";
    }

    gotoMain = () => {
        window.location = "/main/dashboard";
    }

    render() {

        return (
            <div>

                <Sidebar className="siderbar"

                    // sidebar={<b>Sidebar content</b>}
                    sidebar={<b>
                        <div className="navh">
                            <div className="sidenav navhead"  >
                                e-Navigation
                        <div className="btncross">
                                    <a onClick={() => this.onSetSidebarOpen(false)} className="fa fa-check fa-1x"></a>
                                </div>
                            </div>
                        </div>
                        <div className="sidenav container ">
                            <div className="nav" >
                                <a onClick={this.gotoMain} className="fa fa-dashboard fa-1x"></a>
                            </div>

                            <div className="navtext" >
                                <h6>Dashboard</h6>
                            </div>
                        </div>
                        <div className="sidenav  container">
                            <div className="nav">
                                <a onClick={this.gotoCustomer} className="fa fa-users fa-1x"></a>
                            </div>
                            <div className="navtext">
                                <h6>Customers</h6>
                            </div>
                        </div>
                        <div className="sidenav  container">
                            <div className="nav">

                                <a onClick={() => this.onSetSidebarOpen(false)} className="fa fa-map fa-1x"></a>
                            </div>
                            <div className="navtext">
                                <h6>Projects</h6>
                            </div>
                        </div>
                        <div className="sidenav  container">
                            <div className="nav">
                                <a onClick={() => this.onSetSidebarOpen(false)} className="fa fa-list fa-1x"></a>
                            </div>
                            <div className="navtext">
                                <h6>Invoices</h6>
                            </div>
                        </div>
                        <div className="sidenav  container">
                            <div className="nav">
                                <a onClick={() => this.onSetSidebarOpen(false)} className="fa fa-user fa-1x"></a>
                            </div>
                            <div className="navtext">
                                <h6>Users</h6>
                            </div>
                        </div>
                        <div className="sidenav  container">
                            <div className="nav">
                                <a onClick={() => this.onSetSidebarOpen(false)} className="fa fa-gear fa-1x"></a>
                            </div>
                            <div className="navtext">
                                <h6>Settings</h6>
                            </div>
                        </div>

                    </b>
                    }

                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{
                        sidebar: {
                            padding: 20,
                            background: 'rgb(26, 37, 53)',
                            color: 'white',
                            fontFamily: 'Tahoma',
                            width: 250,
                            overflow: 'hidden'

                        }
                    }}
                >
                    <a onClick={() => this.onSetSidebarOpen(true)} className="fa fa-bars fa-3x burg"></a>
                </Sidebar>
            </div>
        );
    }
}


// export default SiderBar;