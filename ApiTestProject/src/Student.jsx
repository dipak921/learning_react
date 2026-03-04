import React, { useEffect, useState } from "react";
import axios from "axios";
function Student(){
    const [student, setStudent] = useState([])
    const [formData, setFormData] = useState({
        id:0,
        name : '',
        age :'',
        email :'',
        eductions : ''
    })

    const [isEdit, setEdit] =useState(false)
 
    const apiUrl = "https://localhost:7035/api/Students";

    //Get all Students
    const getStudents = () => {
        axios.get(apiUrl)
        .then(res => setStudent(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getStudents()
    },[])

    // handle input
    const handlechange =(e) =>{
        setFormData({
            ...formData,
            [e.target.name] :e.target.value
        })
    }
// Add and Edit
const handleSubmit = (e) =>{
    e.preventDefault()

    if(isEdit){
        axios.put(`${apiUrl}/${formData.id}`,formData)
        .then(() => {
            getStudents()
            resetForm()
        })
        .catch(err => console.log(err))
    }
    else {
    axios.post(apiUrl, formData)
        .then(() => {
            getStudents();
            resetForm();
        })
        .catch(err => console.log(err));
}
    }


//Edit
const handleEdit = (student) =>{
    setFormData(student)
    setIsEdit(true)
}

//Delete
const handleDelete = (id) => {

    const confirmDelete = window.confirm("Are You Want to delete this Student");
    if(confirmDelete){
    axios.delete(`${apiUrl}/${id}`)
    .then(() => getStudents())
    .catch(err => console.log(err))
    }
    
}
    // Reset form
    const resetForm = () =>{
        setFormData({
        id:0,
        name : '',
        age :'',
        email :'',
        eductions : ''
        })
        setIsEdit(false)
    }



    return(
        <>
     <div className="container mt-5">
    <div className="row">
        <div className="col-12">

            <form onSubmit={handleSubmit} className="row g-2">

                <div className="col-md-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-control"
                        value={formData.name}
                        onChange={handlechange}
                        required
                    />
                </div>

                <div className="col-md-2">
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        className="form-control"
                        value={formData.age}
                        onChange={handlechange}
                        required
                    />
                </div>

                <div className="col-md-3">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        value={formData.email}
                        onChange={handlechange}
                        required
                    />
                </div>

                <div className="col-md-2">
                    <input
                        type="text"
                        name="edutions"
                        placeholder="Education"
                        className="form-control"
                        value={formData.eduction}
                        onChange={handlechange}
                        required
                    />
                </div>

               <div className="col-md-2">
    <button type="submit" className="btn btn-primary mt-3">
        {isEdit ? "Update Student" : "Add Student"}
    </button>

    {isEdit && (
        <button
            type="button"
            className="btn btn-secondary mt-3 ms-2"
            onClick={resetForm}
        >
            Cancel
        </button>
    )}
</div>

            </form>

        </div>
    </div>

        <h3 className="mt-4">Student Table</h3>
        <table className="table table-bordered border-primary">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Eductions</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {student.map((s) => (
                    <tr key = {s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.age}</td>
                    <td>{s.email}</td>
                    <td>{s.eduction}</td>
                    <td>
                        <button className='btn btn-info' onClick={()=> handleEdit(s)}>Edit</button>
                        <button className='btn btn-danger' onClick={()=> handleDelete(s.id)}>Delete</button>
                    </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </>
    )
}

export default Student