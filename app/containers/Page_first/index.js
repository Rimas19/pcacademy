import React, { Component } from 'react';
import TestHeader from '../../components/TestHeader';
import Header from '../../components/Layout/header';
import Content from '../../components/Layout/content';
import SiderBar from '../../components/Layout/sidebar';
import Footer from '../../components/Layout/footer';
import '../../components/Layout/sidebar.less';
export default class Page_first extends Component {

    render() {

        return (
            <div>
                <Header {...this.props} />
                <Content />

                <SiderBar {...this.props} />
                <Footer />
                {/* <TestHeader {...this.props} /> */}

            </div>

        )
    }
}
