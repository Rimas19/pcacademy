import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './sidebar.less';

export default function SiderBarItem(props) {
  return (
    <div className="sidenav  container">
      <Link
        onClick={() => props.onSetOpen(false)}
        to={props.url}
        style={{ textDecoration: 'none' }}
      >
        <div className="navtext">
          <button type="button" className={props.icon} />
          {props.title}
        </div>
      </Link>
    </div>
  );
}

SiderBarItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  url: PropTypes.string,
  onSetOpen: PropTypes.func,
};
