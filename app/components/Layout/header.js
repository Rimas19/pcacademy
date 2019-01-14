import React from 'react';
import PropTypes from 'prop-types';
import './header.less';

export default function Header(props) {
  return (
    <div>
      <header className="header wrapper">
        <button
          type="button"
          onClick={props.open}
          className="fa fa-bars fa-2x burg"
        />
        <div className="headtext">
          <h3>Test-Layout</h3>
        </div>
      </header>
    </div>
  );
}

Header.propTypes = { open: PropTypes.func };
