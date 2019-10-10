import React, { Component } from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { Link} from "react-router-dom";

import {
  getUser,
  addUser,
  updateUser,
  deleteUser
} from "../action/user.action";


export class UserTable extends Component {
  state = {
    columns : [
        { title: "Name", field: "name" },
        { title: "Surname", field: "surName" },
        { title: "Birth Year", field: "birthDay", type: "date" },
        { title: "Birth place", field: "birthPlace"  },
      
        {
          title: 'image', 
          render: (row) =>  row && <Link to = {`/${row._id}`} >Galeries</Link>  
        }
      ]
  }
  componentDidMount = () => {
    this.props.getUser();
  };

  render() {
    const { userList, isLoading, addUser, updateUser, deleteUser } = this.props;
    return (
      <div className="table-container">
        <MaterialTable
          className="table-content"
          title="Editable Example"
          data={userList}
          columns={this.state.columns}
          isLoading={isLoading}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                resolve();
                addUser(newData);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                resolve();
                updateUser(oldData._id, newData);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                resolve();
                deleteUser(oldData._id);
              })
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userList: state.userList,
  isLoading: state.loading
});

export default connect(
  mapStateToProps,
  { getUser, addUser, updateUser, deleteUser }
)(UserTable);
