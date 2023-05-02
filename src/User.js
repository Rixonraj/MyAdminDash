import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function User() {

    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        loadUser()

        // setUsers([])


    }, []);

    const loadUser = async () => {
        try {
            const userData = await axios.get("https://60ec88a8a78dc700178adb9f.mockapi.io/users");
            setUsers(userData.data)
            setLoading(false)
        } catch (error) {
            alert("error")
        }



    }
    const deleteuser = (user) => {
        let indexValue = users.findIndex(obj => user.id === obj.id);
        users.splice(indexValue, 1);
        setUsers([...users]);
    };

    return (
        <div className="container-fluid">

            <h1 className="h3 mb-2 text-gray-800">Users</h1>
            <Link to="/portal/create_user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
            {
                isLoading ? <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
              </div> : <div>
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Country</th>
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Phone</th>
                                        <th>Dob</th>
                                        <th>Gender</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Country</th>
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Phone</th>
                                        <th>Dob</th>
                                        <th>Gender</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>

                                    {users.map((user) => {
                                        return <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.country}</td>
                                            <td>{user.state}</td>
                                            <td>{user.city}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.dob}</td>
                                            <td>{user.gender}</td>
                                            <td>
                                                <Link to={`/portal/user/view_user/${user.id}`} className="btn btn-danger btn-sm mr-2 mb-2">View</Link>
                                                <Link to={`/portal/user/edit_user/${user.id}`} className="btn btn-danger btn-sm mr-2 mb-2">Edit</Link>
                                                <button onClick={() => { deleteuser(user) }} className="btn btn-danger btn-sm mb-2">Delete</button>
                                            </td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default User