import React, { Component } from 'react';
import Style from './styles.less';
import './styles.less'

export default class SubmitButton extends Component {



  gotoTestPage = () => {
    console.log('Response  :', this.props.test);
    this.props.history.push(`/main/test/${this.props.test}`);
  };

  render() {
    return (
      <div className="button">
        <button type="submit" onClick={this.gotoTestPage}>
          Submit
        </button>
      </div>
    );
  }
}
