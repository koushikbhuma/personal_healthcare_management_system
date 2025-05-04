import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import './login.css'; // Your custom styles

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      Swal.fire({
        title: 'Login Successful',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        navigate('/dashboard'); // Redirect after success
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Incorrect username or password!',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  };
  return (
    
    <div className="login-container bg-light">
      <div className="card login-card shadow">
      <div className="d-flex justify-content-center w-100">
  <i className="bi bi-person-circle login-icon"></i>

  <h4 className="card-title text-center">LOGIN</h4>


  <div className="form-group w-75 mb-3">
  <input
    type="text"
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="form-control"
  />
</div>

<div className="form-group w-75 mb-3">
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="form-control"
  />
</div>
<div className="form-group d-flex justify-content-center w-75 mt-3">
  <button type="button" className="btn btn-primary px-4" onClick={handleLogin}>
    Login
  </button>
</div>



        </div>
      </div>
    </div>
  );
}
