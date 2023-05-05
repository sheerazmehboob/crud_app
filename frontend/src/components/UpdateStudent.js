import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

function UpdateStudent() {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        axios.put('http://localhost:5000/update/'+id, {Name, Email})
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err)); 
    }

  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update Student</h2>
                <div className='mb-2'>
                    <label htmlFor="Name"></label>
                    <input type="text" placeholder="Enter Name" className="form-control"  onChange={e => setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control' onChange={e => setEmail(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateStudent
