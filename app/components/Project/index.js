import React from 'react';
import MaterialDatatable from 'material-datatable';
import Data from './data.json';
import './project.less';
// eslint-disable-next-line react/prefer-stateless-function
export default class Project extends React.Component {
  render() {
    const options = {
      filter: true,
      search: true,
      print: true,
      download: false,
      viewColumns: false,
      selectableRows: true,
      usePaperPlaceholder: true,
      filterType: 'multiselect',
      responsive: 'scroll',
      rowsPerPage: 10,
      rowsPerPageOptions: [5, 10, 5],
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
        name: 'Project name',
        field: 'project_name',
      },
      {
        name: 'Latitude',
        field: 'lat',
      },
      {
        name: 'Longitude',
        field: 'lng',
      },
      {
        name: 'Status',
        field: 'status',
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
        <div className="project">
          <MaterialDatatable
            title="Projects"
            data={tabledata}
            columns={columns}
            options={options}
          />
        </div>
      </div>
    );
  }
}
