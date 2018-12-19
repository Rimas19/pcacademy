import React, { Component } from 'react';
import Style from './styles.css';

export default class SubmitButton extends Component {



  gotoTestPage = () => {
    console.log('Response  :', this.props.test);
    this.props.history.push(`/main/test/${this.props.test}`);
  };

  render() {
    return (
      <div className={Style.button}>
        <button type="submit" onClick={this.gotoTestPage}>
          Submit
        </button>
      </div>
    );
  }
}
