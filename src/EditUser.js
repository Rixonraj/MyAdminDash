import React, { useEffect, useState } from 'react'
import CreateUser from './CreateUser'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function EditUser() {
    const params = useParams()

    const [editStudentData, seteditstudentData] = useState();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {

        loadUser()

    }, [])

    const loadUser = async () => {
        try {
            const studData = await axios.get(`https://60ec88a8a78dc700178adb9f.mockapi.io/myStudents/${params.id}`);
            seteditstudentData(studData.data)
            setLoading(false)
        } catch (error) {
            alert("error")
        }
    }




    return (
        <div><h3>Edit User</h3> 
            {
                isLoading ? <div class="spinner-grow" role="status">
                    <span class="sr-only">Loading...</span>
                </div> : <>
                    {/* <h1>{editStudentData.name}</h1> */}
                    {/* <h2>Id: {params.id}</h2> */}

                    <CreateUser data={editStudentData} /></>
            }
        </div>
    )
}

export default EditUser