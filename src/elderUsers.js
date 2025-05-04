// ElderUsers.js
import React, { useEffect, useState } from 'react';
import './elderUsers.css';

export default function ElderUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:5000/api/elder-users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.error('Error fetching users:', err));
    };
  
    fetchData();
  
    const handleFocus = () => fetchData();
  
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  return (
    <div className="elder-users-container">
      <h2 className="elder-users-title">Elder Users</h2>
      <table className="elder-users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Health Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.age}</td>
              <td>{u.health_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
