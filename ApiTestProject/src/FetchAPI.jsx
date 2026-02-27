import React, { useEffect, useState } from "react";

function FetchAPI() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7035/api/Employees')
            .then((response) => response.json())
            .then((data) => {
                console.log("API Data:", data);
                setEmployees(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <div>
            <h2>Employee List</h2>
            <p>Total Employees: {employees.length}</p>

            <table border="1">
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
                        <tr key={emp.Id}>
                            <td>{emp.Id}</td>
                            <td>{emp.Name}</td>
                            <td>{emp.Position}</td>
                            <td>{emp.Salary}</td>
                            <td>{emp.Department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FetchAPI;









