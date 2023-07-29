import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Add() {

    


    let history = useNavigate()
    const [error, setError] = useState(false)


    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
    })
    const { name, email, contact } = user
    const onInputChange = (event) => {
        setUser({
            ...user, [event.target.name]: event.target.value
        })
    }

    const onSubmit = async e => {
        e.preventDefault();
        if (name && email && contact) {
            await axios.post("http://localhost:3002/users", user);
            toast.success('Added Successfully', {
                position: "top-center",
                autoClose: 700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setTimeout(() => history('/'), 2000);
        }
        // else {
        //     await axios.post("http://localhost:3002/users", user);
        //     toast.success('Added Successfully', {
        //         position: "top-center",
        //         autoClose: 700,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "colored",
        //     });
        //     setTimeout(() => history('/'), 2000);
        // }

        if(name.length===0 || email.length===0 || contact.length===0){
            setError(true)
        }

    }


    return (
        <>
            <ToastContainer />
                <div className="container">

                    <h1 className="text-center heading my-4">Add Profile</h1>
                </div>
            <div className="containers">
                    
                <div className="container form">
                    
                        
                    <form onSubmit={event => onSubmit(event)}>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Name</label>
                            <input type="text" name="name" value={name} onChange={(event) => onInputChange(event)} className="form-control" id="exampleInputPassword1" />
                            {error&&name.length<=0?
                            <label for="exampleInputPassword1" className="form-label label">Name can't be empty!!</label>:""}
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name="email" value={email} onChange={(event) => onInputChange(event)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {error&&email.length<=0?
                            <label for="exampleInputPassword1" className="form-label label">Email can't be empty!!</label>:""}

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Phone No.</label>
                            <input type="tel" value={contact} name="contact" onChange={(event) => onInputChange(event)} max="10" min="10" className="form-control" id="exampleInputPassword1" />
                            {error&&contact.length<=0?
                            <label for="exampleInputPassword1" className="form-label label">Contact can't be empty!!</label>:""}
                        </div>

                        <button type="submit" className="btn btn-outline-light" >Add To List</button>
                    </form>
                </div>
                
            </div>
        </>
    )
}
