import React, { Component } from 'react';
import Header from '../../components/Layout/header';
import Content from '../../components/Layout/content';
import SiderBar from '../../components/Layout/sidebar';
import Footer from '../../components/Layout/footer';
import Customer from '../../components/Customer';
export default class Customers extends Component {

    render() {

        return (
            <div>
                <Header />
                <Customer />
                <SiderBar />
                <Footer />


            </div>

        )
    }
}
