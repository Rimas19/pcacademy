import React, { Component } from 'react';
import Style from './styles.less';
import './styles.less'

export default function TestHeader(props) {
  console.log(props.match.params.name)

  return <div className="header">
    <div className="text"> Test page</div>
    <div className="name"> {props.match.params.name} </div>
  </div>;


}
