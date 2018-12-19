import React, { Component } from 'react';
import TestHeader from '../../components/TestHeader';
import DropDown from '../../components/DropDown';
export default class TestPage extends Component {

  render() {

    return (
      <div>
        <TestHeader {...this.props} />
        <DropDown />
      </div>

    )
  }
}
