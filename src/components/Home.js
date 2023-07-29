import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUsers();
  }, [])

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3002/users");
    setUsers(result.data.reverse())
  }
  const deleteUser=async id=>{
    await axios.delete(`http://localhost:3002/users/${id}`);
    alert("Sure, you want to delete!!!");
    loadUsers();
  }

  return (
    <div>
      <div className="container">
        <table className=" container table details" >
          <thead>
            <tr>
              <th scope="col">SNo</th>
              <th scope="col">Name</th>
              <th className="hidden" scope="col">Email Id</th>
              <th className="hidden" scope="col">Contact No.</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr>
                  <th scope='row'>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                  <td>
                    <Link type="button" class="btn btn-outline-light my-1 mx-2" to={`users/${user.id}`}><i className='fa fa-eye'></i></Link>
                    <Link type="button" class="btn btn-outline-success my-1 mx-2" to={`users/edit/${user.id}`}><i className='fa fa-pencil'></i></Link>
                    <Link type="button" class="btn btn-outline-danger my-1 mx-2" onClick={()=>deleteUser(user.id)}><i className='fa fa-trash'></i></Link>
                  </td>
                </tr>
              ))
            }


          </tbody>
        </table>
      </div>
    </div>
  )
}
