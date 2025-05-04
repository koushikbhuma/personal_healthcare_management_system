import React, { useEffect, useState } from 'react';
import './caregivers.css';

export default function Caregivers() {
  const [caregivers, setCaregivers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/caregivers')
      .then((res) => res.json())
      .then((data) => setCaregivers(data))
      .catch((err) => console.error('Error fetching caregivers:', err));
  }, []);

  return (
    <div className="caregivers-container">
      <h2 className="caregivers-title">Caregivers / Family Members</h2>
      <table className="caregivers-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Relationship</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {caregivers.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.relationship}</td>
              <td>{c.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
