import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllStudent.css';
import Footer from './Footer';

function AllStudent() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editStudent, setEditStudent] = useState({ name: "", email: "", age: "", _id: "" });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:9000/getallUsers')
      .then((res) => {
        setStudents(res.data.u);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  }, []);

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/deleteUser/${id}`);
      setStudents((prev) => prev.filter((e) => e._id !== id));
      alert('Student deleted successfully!');
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Failed to delete student.');
    }
  };

  const openEditModal = (student) => {
    setEditStudent(student);
    setShowModal(true);
  };

  const handleEditChange = (e) => {
    setEditStudent({ ...editStudent, [e.target.name]: e.target.value });
  };

  const submitEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9000/updateUser/${editStudent._id}`, editStudent);
      const updated = students.map((s) =>
        s._id === editStudent._id ? editStudent : s
      );
      setStudents(updated);
      setShowModal(false);
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Update failed.");
    }
  };

  const filteredStudents = students.filter((student) =>
  
    student.name.toLowerCase().includes(searchTerm.toLowerCase())

  );

  return (
    <>
      <div className="container mt-5" style={{ paddingBottom: "100px" }}>
        <h2 className="text-center fw-bold mb-4">All Students</h2>

        {/* Search Bar */}
        <div className="row mb-4 justify-content-center">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="🔍 Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Student Cards */}
        <div className="row justify-content-center">
          {filteredStudents.map((student, index) => (
            <div className="col-md-4" key={student._id || index}>
              <div className="student-card">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text"><strong>Email:</strong> {student.email}</p>
                <p className="card-text"><strong>Age:</strong> {student.age}</p>
                <button
                  className='btn btn-primary'
                  style={{ backgroundColor: '#5509FF' }}
                  onClick={() => openEditModal(student)}
                >Edit</button>&nbsp;&nbsp;
                <button
                  className='btn btn-danger'
                  style={{ backgroundColor: '#FF2C16' }}
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this data?")) {
                      deleteHandler(student._id);
                    }
                  }}
                >Delete</button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
              <div className="modal-content p-4">
                <h4 className="mb-3">Edit Student</h4>
                <form onSubmit={submitEdit}>
                  <input className="form-control mb-2" type="text" name="name" value={editStudent.name} onChange={handleEditChange} placeholder="Name" />
                  <input className="form-control mb-2" type="email" name="email" value={editStudent.email} onChange={handleEditChange} placeholder="Email" />
                  <input className="form-control mb-2" type="number" name="age" value={editStudent.age} onChange={handleEditChange} placeholder="Age" />
                  <div className="text-end mt-3">
                    <button type="button" className="btn btn-secondary me-2" onClick={() => setShowModal(false)}>Cancel</button>
                    <button type="submit" className="btn btn-success">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

       
      </div>
      <Footer />
    </>
  );
}

export default AllStudent;
