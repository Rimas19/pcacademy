import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import './project.less'
import Data from './data.json'

const rows = 10;
export default class Project extends Component {
    constructor() {
        super();
        this.state = {
            nextPage: rows,
            data: [],
        };
    }


    componentDidMount() {


        this.setState({ data: Data })

    }

    // const columns = [{
    //     Header: 'id',
    //     accessor: 'id'
    // },
    // {
    //     Header: 'first_name',
    //     accessor: 'first_name'
    // },
    // {
    //     Header: 'last_name',
    //     accessor: 'last_name'
    // },
    // {
    //     Header: 'gender',
    //     accessor: 'gender',
    // }
    // ]
    previousPage = () => {
        if (this.state.nextPage > rows)
            this.setState((prevState) => ({ nextPage: (prevState.nextPage - rows) }))
    }

    nextPage = () => {
        if (this.state.nextPage + 1 < this.state.data.length) {
            this.setState((prevState) => ({ nextPage: (prevState.nextPage + rows) }))
        }
    }

    render() {
        //const data = Data;
        const { data, currentPage, nextPage } = this.state

        return (
            <div className="prtable" >
                {/* <ReactTable striped bordered condensed hover
                    data={Data}
                    columns={columns}
                    showPaginationBottom={true}
                    defaultPageSize={5}
                    pageSizeOptions={[5, 5]}
                    collapseOnSortingChange={true}
                /> */}

                <table className="table ">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice((nextPage - rows), nextPage).map((item, id) =>
                            <tr key={item.id} >
                                <td width="20%">{item.id}</td>
                                <td width="40%">{item.first_name}</td>
                                <td width="40%">{item.last_name}</td>
                                <td width="20%">{item.gender}</td>
                            </tr>

                        )}
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" onClick={this.previousPage} tabIndex="-1">Previous</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" onClick={this.nextPage} tabIndex="-1">Next</a>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}
// export default Project;

