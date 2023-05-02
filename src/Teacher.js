import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function User() {

    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        loadUser()

        // setUsers([])

        // {
        //     "name": "Elbert Hegmann",
        //     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/778.jpg",
        //     "marks": 29,
        //     "class": 80,
        //     "Selected": false,
        //     "id": "1"
        //    },



    }, []);

    const loadUser = async () => {
        try {
            const userData = await axios.get("https://60ec88a8a78dc700178adb9f.mockapi.io/myStudents");
            setUsers(userData.data)
            setLoading(false)
        } catch (error) {
            alert("error")
        }



    }
    const deleteuser = async (user) => {
        try {
            const addStudentBody = await axios.put(`https://60ec88a8a78dc700178adb9f.mockapi.io/myStudents/${user.id}`,{ "Selected": false})
            // let indexValue = users.findIndex(obj => user.id === obj.id);
            // users.splice(indexValue, 1);
            // setUsers([...users]);
            loadUser();
        } catch (error) {
            
        }

    };

    const addStudent = async (user) => {
          try {
            const addStudentBody = await axios.put(`https://60ec88a8a78dc700178adb9f.mockapi.io/myStudents/${user.id}`,{ "Selected": true})
            loadUser();
        } catch (error) {
            alert("error")
        }
    }

    return (
        <div className="container-fluid">

            <h1 className="h3 mb-2 text-gray-800">My Students</h1>
            <Link to="/portal/create_user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm mb-10 text-white-50"></i> Create Student</Link>
            {
                isLoading ? <div class="spinner-grow" role="status">
                    <span class="sr-only">Loading...</span>
                </div> : <div>
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">My Students</h6>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Marks</th>
                                        <th>Class</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>-</th>
                                        <th>-</th>
                                        <th>-</th>
                                        <th>-</th>
                                        <th>-</th>
                                    </tr>
                                </tfoot>
                                <tbody>

                                    {users.filter(stu => stu.Selected).map((user) => {
                                        return <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.marks}</td>
                                            <td>{user.class}</td>
                                            <td>
                                                <Link to={`/portal/user/view_user/${user.id}`} className="btn btn-danger btn-sm mr-2 mb-2">View</Link>
                                                <Link to={`/portal/user/edit_user/${user.id}`} className="btn btn-danger btn-sm mr-2 mb-2">Edit</Link>
                                                <button onClick={() => { deleteuser(user) }} className="btn btn-danger btn-sm mb-2">Remove</button>
                                            </td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Other Students</h6>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Marks</th>
                                        <th>Class</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Marks</th>
                                        <th>Class</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>

                                    {users.filter(stu => !stu.Selected).map((user) => {
                                        return <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.marks}</td>
                                            <td>{user.class}</td>
                                            <td>
                                                <button onClick={() => { addStudent(user) }} className="btn btn-warning btn-sm mr-2 mb-2">Add +</button>
                                                <Link to={`/portal/user/view_user/${user.id}`} className="btn btn-danger btn-sm mr-2 mb-2">View</Link>
                                                <Link to={`/portal/user/edit_user/${user.id}`} className="btn btn-danger btn-sm mr-2 mb-2">Edit</Link>
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