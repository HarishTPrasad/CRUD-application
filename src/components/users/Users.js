import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'

export default function Users() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
    })
    const {id}=useParams()
    const loadUser=async()=>{
        const result= await axios.get(`http://localhost:3002/users/${id}`)
        setUser(result.data)
    }
    useEffect(()=>{
        loadUser()
    },[])

  return (
    <div>
      <div className="container forms my-4">
        <div className="display-user">
        <h1 className="display-4"><strong> User Id:</strong> {id}</h1>
        <Link className="btn btn-outline-primary my-4" to="/">Back to Home</Link>
        </div>
        
        
        <hr />
        <ul className="list-group w-50">
            <li className="list-group-item">Name: {user.name}</li>
            <li className="list-group-item">Email Id: {user.email}</li>
            <li className="list-group-item">Contact No.: {user.contact}</li>
        </ul>
        
      </div>
    </div>
  )
}
