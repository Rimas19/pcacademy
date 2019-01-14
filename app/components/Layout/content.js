import React from 'react';
import Project from '../Project';
//  import Customer from '../Customer';
import './content.less';
// import Invoice from '../Invoice';
import Supplier from '../Supplier';
export default function Content() {
  return (
    <div id="cont">
      <div className="row">

        <div className="col-6">
          <Supplier />
        </div>
        <div className="col-6">
          <Project />
        </div>
        <div className="w-100" />
        {/* <div className="col-5">
          <Invoice />
        </div> */}
      </div>
    </div>
  );
}
