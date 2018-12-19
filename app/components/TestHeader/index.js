import React, { Component } from 'react';
import Style from './styles.css';

export default function TestHeader(props) {
  console.log(props.match.params.name)

  return <div className={Style.header}>Test page  {props.match.params.name}</div>;


}
