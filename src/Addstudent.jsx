import React, { useState } from 'react';
import './AddStudent.css'; // Optional: for your custom styles
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function AddStudent() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: '',
    email: '',
    age: '',
    createdAt: ''
  });

  const apiUrl = "http://localhost:9000/addNewstudent";

  function changeHandler(e) {
    setStudent({ ...student, [e.target.name]: e.target.value });
  }

  function submitHandler(event) {
    event.preventDefault();
    axios.post(apiUrl, student)
      .then(res => {
        alert('Student added successfully!');
        setStudent({ name: '', email: '', age: '', createdAt: '' });
        navigate('/allstudent');
      })
      .catch(err => {
        console.error(err);
        alert('Error adding student');
      });
  }

  return (
    <>
      <div className="add-student-container d-flex justify-content-center align-items-center vh-100 bg-light">
        <form
          className="add-student-form p-4 shadow rounded bg-white"
          style={{ width: "100%", maxWidth: "500px" }}
          onSubmit={submitHandler}
        >
          <h2 className="text-center mb-4 fw-bold">Add New Student</h2>

          <div className="form-group mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={student.name}
              placeholder="Enter student name"
              onChange={changeHandler}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={student.email}
              placeholder="Enter email address"
              onChange={changeHandler}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={student.age}
              placeholder="Enter age"
              onChange={changeHandler}
              required
            />
          </div>

          <button type="submit" className="btn w-100" style={{ backgroundColor: "#000000", color: "white" }}>
            Add Student
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddStudent;
