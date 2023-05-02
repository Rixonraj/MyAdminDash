import React from 'react'
import CreateUser from './CreateUser'
import { useParams } from 'react-router-dom'

function EditUser() {
    const params = useParams()

    return (
        <div>EditUser
            <h1>Id: {params.id}</h1>

            <CreateUser />
        </div>
    )
}

export default EditUser