import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Students() {

  const [Student, setStudent] = useState([])

  useEffect(() =>{
    axios.get("http://localhost:5000/")
    .then(res => setStudent(res.data))
    .catch(err => console.log(err));
  }, [])


  const handleDelete = (id) =>
  {
    try{
      axios.delete("http://localhost:5000/student/"+id)
      window.location.reload();
    }
    catch(err)
    {
      console.log(err);
    }
  }


  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
      <div className="w-75 bg-white rounded p-3">
        <Link to='/create' className='btn btn-success'>Add +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              Student.map((data, i) => (
                <tr key={i}>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>
                    <Link to={`update/${data.ID}`} className='btn btn-primary'>Update</Link>
                    <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.ID)}>Delete</button>
                  </td>
                </tr>
              ) )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Students
