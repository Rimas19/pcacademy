import React, { Component } from 'react';
import Style from './styles.less';
import './styles.less'
export default function InputText(props) {

  return (
    <div >
      <input
        className="input"
        type="text"
        onChange={props.handleChange}
      />
    </div>
  );

}
