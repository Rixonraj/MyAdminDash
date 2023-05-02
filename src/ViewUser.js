import React,{useEffect, useState} from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
function ViewUser() {
  const params = useParams()
  // const [searchparams] = useSearchParams()
  const [userData, setuserData] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {

    loadUser()

  }, [])

  const loadUser = async () => {
    try {
      const studentData = await axios.get(`https://60ec88a8a78dc700178adb9f.mockapi.io/myStudents/${params.id}`);
      setuserData(studentData.data)
      setLoading(false)
    } catch (error) {
        alert("error")
    }
}

  const deleteuser = async (id) => {
    try {
        const addStudentBody = await axios.put(`https://60ec88a8a78dc700178adb9f.mockapi.io/myStudents/${id}`,{ "Selected": false})
        loadUser();
    } catch (error) {
        
    }

};

const addStudent = async (id) => {
  try {
    const addStudentBody = await axios.put(`https://60ec88a8a78dc700178adb9f.mockapi.io/myStudents/${id}`,{ "Selected": true})
    loadUser();
} catch (error) {
    alert("error")
}
}

  return (
    // URL Param
    <>
    {
      isLoading ? <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
      </div> : <div>
    <h1>{userData.name}</h1>

    <div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">ID Number : {userData.id}</h6>
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
            <tbody>

               <tr key={userData.id}>
                        <td>{userData.id}</td>
                        <td>{userData.name}</td>
                        <td>{userData.marks}</td>
                        <td>{userData.class}</td>
                        <td>
                            {/* <Link to={`/portal/user/view_user/${user.id}`} className="btn btn-danger btn-sm mr-2 mb-2">View</Link> */}
                            <Link to={`/portal/user/edit_user/${userData.id}`} className="btn btn-danger btn-sm mr-2 mb-2">Edit</Link>
                            <button onClick={() => { userData.Selected ? deleteuser(userData.id) : addStudent(userData.id)}} className={`btn btn-sm mb-2 ${userData.Selected ? 'btn-danger' : 'btn-warning'}`}>{userData.Selected ? 'Remove' : 'Add'}</button>
                        </td>
                    </tr>
               

            </tbody>
        </table>
    </div>
</div>



</div>

    }</>
  )
}

export default ViewUser