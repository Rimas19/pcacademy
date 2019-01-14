import React from 'react';
import Header from './header';
import SiderBar from './sidebar';
import Footer from './footer';
import './styles.less';
export default class Layout extends React.Component {
  state = {
    sidebarOpen: false,
  };

  openSidebar = () => {
    document.getElementById('cont').style.marginLeft = '200px';
    this.setState({ sidebarOpen: true });

  };

  onSetSidebarOpen = open => {

    this.setState({ sidebarOpen: open });
    document.getElementById('cont').style.marginLeft = '0px';
  };

  render() {
    return (
      <div className="fluid clearfix wrap">
        <div>
          <SiderBar
            sidebarOpen={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            {...this.props}
          />
        </div>
        <div id="cont">
          <Header {...this.props} open={this.openSidebar} />
          {this.props.children}
          <Footer />
        </div>
      </div>

    );
  }
}
