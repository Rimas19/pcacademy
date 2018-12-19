import React, { Component } from 'react';
import SubmitButton from '../../components/SubmitButton';
import InputText from '../../components/InputText';
import Style from './styles.css';
export default class MainPage extends Component {
  state = {
    value: '',
  };

  inputChanged = event => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
    console.log('Props :' + this.props);
  };
  render() {
    return (
      <div className={Style.main}>
        <div className={Style.text}>Main page</div>
        <InputText {...this.props} handleChange={this.inputChanged} />
        <SubmitButton {...this.props} test={this.state.value} />
      </div>
    );
  }
}
