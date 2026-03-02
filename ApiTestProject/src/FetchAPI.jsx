import React, { useEffect, useState } from "react";
import { getPost } from "./AppAPI.jsx";
import "./App.css";

function FetchAPI() {

    const [employees, setEmployees] = useState([]);

    const [newEmployee, setNewEmployee] = useState({
        name: "",
        position: "",
        salary: "",
        department: ""
    });

    useEffect(() => {
        getPost()
            .then((data) => {
                setEmployees(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    // Handle input change
    const handleChange = (e) => {
        setNewEmployee({
            ...newEmployee,
            [e.target.name]: e.target.value
        });
    };

    // Add employee (POST API)
    const handleAddEmployee = async () => {
        try {
            const response = await fetch("https://localhost:7035/api/Employees", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEmployee)
            });

            if (!response.ok) {
                throw new Error("Failed to add employee");
            }

            const addedEmployee = await response.json();

            setEmployees([...employees, addedEmployee]);

            // Clear inputs
            setNewEmployee({
                name: "",
                position: "",
                salary: "",
                department: ""
            });

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="container">
            <h2 className="title">Employee List</h2>

            {/* Add Employee Section */}
            <div style={{ marginTop: "20px" }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newEmployee.name}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    value={newEmployee.position}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    value={newEmployee.salary}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={newEmployee.department}
                    onChange={handleChange}
                />

                <button onClick={handleAddEmployee}>
                    Add Employee
                </button>
            </div>

            <p className="count">Total Employees: {employees.length}</p>

            <table className="employee-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.position}</td>
                            <td>{emp.salary}</td>
                            <td>{emp.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FetchAPI;