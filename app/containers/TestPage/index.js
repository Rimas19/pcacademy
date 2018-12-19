import React, { Component } from 'react';
import TestHeader from '../../components/TestHeader';
export default class TestPage extends Component {

  render() {

    return (
      <div>
        <TestHeader {...this.props} />
      </div>

    )
  }
}
