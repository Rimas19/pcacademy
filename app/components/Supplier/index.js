import React from 'react';
import MaterialDatatable from 'material-datatable';
import Data from './data.json';
import './supplier.less';
// eslint-disable-next-line react/prefer-stateless-function
export default class Supplier extends React.Component {
  render() {
    const options = {
      filter: true,
      selectableRows: true,
      usePaperPlaceholder: true,
      filterType: 'multiselect',
      responsive: 'scroll',
      rowsPerPage: 5,
      rowsPerPageOptions: [5, 10, 10],
      rowHover: true,
      //   searchText: '22',
      componentWillReceiveProps: true,
      page: 0,
      sortColumnIndex: 2,
      sortColumnDirection: 'desc',
      //   filterList: [[], [], ['Location 2'], [], [], [], []],

      //   onTableChange: (action, state) => this.onChange(state),
    };

    // if (this.state.tableState !== undefined && this.state.tableState !== null) {
    //   options.filterList = this.state.tableState.filterList;
    //   options.searchText = this.state.tableState.searchText;
    //   options.page = this.state.tableState.page;
    //   options.rowsPerPage = this.state.tableState.rowsPerPage;
    //   options.sortColumnDirection = this.state.tableState.sortColumnDirection;
    //   options.sortColumnIndex = this.state.tableState.sortColumnIndex;
    // }
    const columns = [
      {
        name: 'Id',
        field: 'id',
      },
      {
        name: 'First name',
        field: 'first_name',
      },
      {
        name: 'Last name',
        field: 'last_name',
      },
      {
        name: 'Gender',
        field: 'gender',
      },
    ];
    const tabledata = Data;
    // const options = {
    //   filterType: 'checkbox',
    //   responsive: 'scroll',
    // rowsPerPage: 5,
    // selectableRows: true,
    // filterType: 'multiselect',
    // };

    return (
      <div>
        <div className="supplier">
          <MaterialDatatable
            title="Supplier list"
            data={tabledata}
            columns={columns}
            options={options}
          />
        </div>
      </div>
    );
  }
}
