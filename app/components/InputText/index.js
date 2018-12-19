import React, { Component } from 'react';
import Style from './styles.css';
export default function InputText(props) {

  return (
    <div className={Style.input}>
      <input
        className={Style.textBox}
        type="text"
        onChange={props.handleChange}
      />
    </div>
  );

}
