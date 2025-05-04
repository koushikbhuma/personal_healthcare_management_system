import { useNavigate } from 'react-router-dom';
import './dashboard.css';

export default function Dashboard() {
  const categories = ['ELDER USERS', 'HEALTHCARE PROFESSIONALS', 'CAREGIVERS OR FAMILY', 'EMERGENCY RESPONDERS', 'PATIENTS INFORMATION', 'SUPPORT TEAM', 'REMINDERS', 'EDIT DATABASE'];
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    if (category === 'ELDER USERS') {
      navigate('/elder-users');
    } else if (category === 'HEALTHCARE PROFESSIONALS') {
      navigate('/healthcare-professionals');}
      else if (category === 'CAREGIVERS OR FAMILY') {
        navigate('/caregivers');
      }
      else if (category === 'EMERGENCY RESPONDERS') {
        navigate('/emergency-responders');
      }
      else if (category === 'PATIENTS INFORMATION') {
        navigate('/patient-information');
      }
      else if (category === 'SUPPORT TEAM') {
        navigate('/support-team');
      }
      else if (category === 'REMINDERS') {
        navigate('/reminders');
      }
      else if (category === 'REMINDERS') {
        navigate('/reminders');
      }                 
      else if (category === 'EDIT DATABASE') {
        navigate('/edit-database');
      }
      
            
       else {
      alert(`Clicked on ${category}`);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="stats-panel">
  <div className="stat-card">
    <i className="bi bi-person"></i>
    <div>
      <h4>42</h4>
      <p>Elder Users</p>
    </div>
  </div>
  <div className="stat-card">
    <i className="bi bi-bell"></i>
    <div>
      <h4>8</h4>
      <p>Reminders</p>
    </div>
  </div>
  <div className="stat-card">
    <i className="bi bi-exclamation-triangle"></i>
    <div>
      <h4>2</h4>
      <p>Emergencies</p>
    </div>
  </div>
</div>


      <div className="cards-wrapper">
        {categories.map((cat, index) => (
          <div key={index} className="dashboard-card" onClick={() => handleCardClick(cat)}>
            <h2 className="card-heading">{cat}</h2>
            <p className="card-text">View {cat} insights</p>
          </div>
        ))}
      </div>
    </div>
  );
}
