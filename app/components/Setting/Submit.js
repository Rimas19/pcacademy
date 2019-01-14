import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import propTypes from 'prop-types';
import './submit.less';
// const styles = {};

export default class Submit extends Component {
  static displayName = 'SUBMIT';

  constructor() {
    super();
    this.state = {
      //   styles,
    };
  }

  render() {
    return (
        <div className="submit">
        <Button variant="contained" color="primary" onClick={this.props.clear}>
          Cancel
          </Button>
        <Button variant="contained" color="info" onClick={this.props.submit}>
          Submit
          </Button>
        </div>
      );
  }
}

Submit.propTypes = {
  clear: propTypes.func,
  submit: propTypes.func,
};
