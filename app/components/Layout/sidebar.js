import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'react-sidebar';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ProjectIcon from '@material-ui/icons/Extension';
import SettingIcon from '@material-ui/icons/Settings';
import InvoiceIcon from '@material-ui/icons/Reorder';
import TestIcon from '@material-ui/icons/Explore';
import 'font-awesome/css/font-awesome.min.css';
// import SideBarItem from './sidebarItem';
import './sidebar.less';
export default function SiderBar(props) {



  return (
    <Sidebar
      sidebarClassName="siderbar"
      rootClassName={!props.sidebarOpen && 'root'}
      sidebar={
        < div >
          <div className="navh">
            {/* <div className="sidenav navhead">
                e-Navigation
                <div>
                  <button
                    type="button"
                    onClick={() => props.onSetOpen(false)}
                  // className="fa fa-check fa-1x btncross"
                  />
                </div>
              </div> */}
          </div>
          <ListItem button className="nav">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <NavLink to="/dashboard" onClick={() => props.onSetOpen(false)}>
              <ListItemText primary="Dashboard" />
            </NavLink>
          </ListItem>
          {/* <SideBarItem
              title="Dashboard"
              icon="fa fa-tachometer fa-1x nav"
              url="/dashboard"
              onClick={() => props.onSetOpen(false)}
            /> */}
          <ListItem button className="nav">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <NavLink to="/customers" onClick={() => props.onSetOpen(false)}>
              <ListItemText primary="Customers" />
            </NavLink>
          </ListItem>
          {/* <SideBarItem
              title="Customers"
              icon="fa fa-users fa-1x nav"
              url="/customers"
            /> */}
          <ListItem button className="nav">
            <ListItemIcon>
              <ProjectIcon />
            </ListItemIcon>
            <NavLink to="/projects" onClick={() => props.onSetOpen(false)}>
              <ListItemText primary="Projects" />
            </NavLink>
          </ListItem>
          {/* <SideBarItem
              title="Projects"
              icon="fa fa-map fa-1x nav"
              url="/projects"
            /> */}
          <ListItem button className="nav">
            <ListItemIcon>
              <InvoiceIcon />
            </ListItemIcon>
            <NavLink to="/invoices" onClick={() => props.onSetOpen(false)}>
              <ListItemText primary="Invoices" />
            </NavLink>
          </ListItem>
          {/* <SideBarItem
              title="Invoices"
              icon="fa fa-list fa-1x nav"
              url="/dash"
            /> */}
          <ListItem button className="nav">
            <ListItemIcon>
              <SettingIcon />
            </ListItemIcon>
            <NavLink to="/settings" onClick={() => props.onSetOpen(false)}>
              <ListItemText primary="Settings" />
            </NavLink>
          </ListItem>
          {/* <SideBarItem
              title="Settings"
              icon="fa fa-cog fa-1x nav"
              url="/settings"
            /> */}
          <ListItem button className="nav">
            <ListItemIcon>
              <TestIcon />
            </ListItemIcon>
            <NavLink to="/testpage" onClick={() => props.onSetOpen(false)}>
              <ListItemText primary="TestPage" />
            </NavLink>
          </ListItem>
        </div >
      }
      open={props.sidebarOpen}
      onSetOpen={props.onSetOpen}
      styles={{
        sidebar: {
          transition: 'transform 0.3s ease-out',
          padding: 0,
          background: 'rgb(175, 175, 177)',
          color: 'white',
          fontFamily: 'Tahoma',
          width: 200,
          overflow: 'hidden',
          position: 'absolute',

        },
      }}
    />
  );
}
SiderBar.propTypes = { sidebarOpen: PropTypes.bool, onSetOpen: PropTypes.func };


