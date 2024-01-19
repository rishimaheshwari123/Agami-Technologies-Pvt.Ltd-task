import axios from "axios";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [emp, setEmp] = useState([]);

  const getAllEmp = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/admin/get-all");

      if (res && res.data && res.data.allEmp) {
        setEmp(res.data.allEmp);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEmp();
  }, []);

  return (
    <>
      <div className="card">
        {Array.isArray(emp) && emp.length > 0 ? (
          emp.map((employee) => (
            <div key={employee.id} className="employee-card">
              <p>Name : {employee.name}</p>
              <p>ID: {employee.id}</p>
              <p>Message: {employee.message}</p>
              <p>Time: {employee.time}</p>
              <p>Date: {employee.date}</p>
            </div>
          ))
        ) : (
          <p>No employees found</p>
        )}
      </div>
    </>
  );
};

export default Admin;
