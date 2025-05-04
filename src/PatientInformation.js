import React, { useEffect, useState } from 'react';
import './patientinfo.css';

export default function PatientInformation() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/patient-information')
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((err) => console.error('Error fetching patient info:', err));
  }, []);

  return (
    <div className="patientinfo-container">
      <h2 className="patientinfo-title">Patient Information</h2>
      <table className="patientinfo-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Diagnosis</th>
            <th>Treatment</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.patient_name}</td>
              <td>{p.diagnosis}</td>
              <td>{p.treatment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
