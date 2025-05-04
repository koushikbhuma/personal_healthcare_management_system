import React, { useEffect, useState } from 'react';
import './healthcare.css';

export default function HealthcareProfessionals() {
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/healthcare-professionals')
      .then((res) => res.json())
      .then((data) => setProfessionals(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="healthcare-container">
      <h2 className="healthcare-title">Healthcare Professionals</h2>
      <table className="healthcare-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {professionals.map((pro) => (
            <tr key={pro.id}>
              <td>{pro.id}</td>
              <td>{pro.name}</td>
              <td>{pro.specialization}</td>
              <td>{pro.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
