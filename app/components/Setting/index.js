import React from 'react';

// import './settings.less';
import Submit from './Submit';
export default class Settings extends React.Component {
  handleSubmit = data => console.log;

  render() {
    return (
      <div className="container">
          <h4>Settings</h4>
        <div className="container">
            < div className="row" >
              <div className="col-6">
                <Submit />
            </div>
            <div className="col-6">
              <Submit />
            </div>
            </div >
          </div>
      </div>
    );
  }
}
