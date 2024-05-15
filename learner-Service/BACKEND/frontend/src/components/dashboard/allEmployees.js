import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/add-employee.css";

const UserList = () => {
  const [users, setUser] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5050/users/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5050/users/delete/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const search = (data) => {
    return data.filter(
     (item) =>
     item.name.toLowerCase().includes(query) ||
     item.email.toLowerCase().includes(query)
    )
  }

  return (
    <div className="columns mt-5">
      <div class="input-group rounded">
        <input
          type="text"
          class="form-control rounded"
          placeholder="Search"
          onChange={(e)=> setQuery(e.target.value)}
        />
        
      </div>
      <h3 className="text-center mb-5 fw-bold">All Users</h3>
      <div className="column is-half">
        <table className="table is-fullwidth mt-2" data={search(users)}>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Account Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.accountType}</td>

                <td>
                  <Link
                    to={`../../admin/dashboard/edit-employee/${user._id}`}
                    className="btn btn-primary mr-3 update-btn-btn"
                  >
                    Edit
                  </Link>
                  {/* <Link className="button is-info is-small mr-1" to={`admin/dashboard/edit-employee/${user._id}`}>Edit</Link> */}
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="btn btn-danger ml-5 delete-btn-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
