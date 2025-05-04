import React, { useEffect, useState } from 'react';
import './emergency.css';

export default function EmergencyResponders() {
  const [responders, setResponders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/emergency-responders')
      .then((res) => res.json())
      .then((data) => setResponders(data))
      .catch((err) => console.error('Error fetching responders:', err));
  }, []);

  return (
    <div className="emergency-container">
      <h2 className="emergency-title">Emergency Responders</h2>
      <table className="emergency-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {responders.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>{r.role}</td>
              <td>{r.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
