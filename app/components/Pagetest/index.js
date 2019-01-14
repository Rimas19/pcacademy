import React from 'react';
import ReactDOM from 'react-dom';
import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm,
  Pagination,
} from 'react-crud-table';
import Data from './data.json';
import SidebarItem from '../Layout/sidebarItem';
// Component's Base CSS
import './index.less';

const DescriptionRenderer = ({ field }) => <textarea {...field} />;

let tasks = Data;

const SORTERS = {
  NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a)),
};

const getSorter = data => {
  const mapper = x => x[data.field];
  let sorter = SORTERS.STRING_ASCENDING(mapper);

  if (data.field === 'id') {
    sorter =
      data.direction === 'ascending'
              ? SORTERS.NUMBER_ASCENDING(mapper)
              : SORTERS.NUMBER_DESCENDING(mapper);
  } else {
    sorter =
      data.direction === 'ascending'
        ? SORTERS.STRING_ASCENDING(mapper)
              : SORTERS.STRING_DESCENDING(mapper);
  }

  return sorter;
};

let count = tasks.length;
const service = {
  fetchItems: payload => {
    let result = Array.from(tasks);
    result = result.sort(getSorter(payload.sort));
    const { activePage, itemsPerPage } = payload.pagination;
    const start = (activePage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return Promise.resolve(result.slice(start, end));
  },
  fetchTotal: payload => Promise.resolve(tasks.length),
  create: task => {
    count += 1;
    tasks.push({
      ...task,
      id: count,
    });
    return Promise.resolve(task);
  },

  update: data => {
    const task = tasks.find(t => t.id === data.id);
    task.title = data.title;
    task.description = data.description;
    console.log(task);
    return Promise.resolve(task);
  },
  delete: data => {
    const task = tasks.find(t => t.id === data.id);
    tasks = tasks.filter(t => t.id !== task.id);
    return Promise.resolve(task);
  },
};

const styles = {
  container: {
    display: 'flex',
    margin: 'auto',
    width: 'fit-content',
  },
};
export default function Example() {
  return (
    <div style={styles.container}>
      <CRUDTable
        caption="Test page"
        fetchItems={payload => service.fetchItems(payload)}
      >
        <Fields>
          <Field name="id" label="Id" hideInCreateForm />
          <Field name="customer_name" label="Customer" placeholder="Title" />
          <Field name="cust_code" label="Code" />
          <Field name="vat_code" label="VAT Code" />
          <Field name="street" label="Address" />
        </Fields>
        <Pagination
          itemsPerPage={10}
          activePage={3}
          fetchTotalOfItems={payload => service.fetchTotal(payload)}
        />
        <CreateForm
          title="New custmer"
          message="Create a new customer!"
          trigger="New customer"
          onSubmit={task => service.create(task)}
          submitText="Create"
          validate={values => {
            const errors = {};
            if (!values.customer_name) {
              errors.customer_name = 'Please, provide customer name';
            }

            if (!values.cust_code) {
              errors.cust_code = 'Please, provide customer code';
            }
            if (!values.vat_code) {
              errors.vat_code = 'Please, provide VAT code';
            }
            if (!values.street) {
              errors.street = 'Please, provide customer address';
            }
            return errors;
          }}
        />

        <UpdateForm
          title="Customer Update Process"
          message="Update customer"
          trigger="Update"
          onSubmit={task => service.update(task)}
          submitText="Update"
          validate={values => {
            const errors = {};

            if (!values.id) {
              errors.id = 'Please, provide id';
            }

            if (!values.customer_name) {
              errors.customer_name = 'Please, provide customer name';
            }

            if (!values.cust_code) {
              errors.cust_code = 'Please, provide customer code';
            }
            if (!values.vat_code) {
              errors.vat_code = 'Please, provide VAT code';
            }
            if (!values.street) {
              errors.street = 'Please, provide customer address';
            }

            return errors;
          }}
        />

        <DeleteForm
          title="Customer Delete Process"
          message="Are you sure you want to delete the customer ?"
          trigger="Delete"
          onSubmit={task => service.delete(task)}
          submitText="Delete"
          validate={values => {
            const errors = {};
            if (!values.id) {
              errors.id = 'Please, provide id';
            }
            return errors;
          }}
        />
      </CRUDTable>
    </div>
  );
}

Example.propTypes = {};

// ReactDOM.render(<Example />, document.getElementById('root'));
