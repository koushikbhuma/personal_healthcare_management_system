import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import ElderUsers from './elderUsers';
import LoginPage from './login';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HealthcareProfessionals from './HealthcareProfessionals';
import Caregivers from './Caregivers';
import EmergencyResponders from './EmergencyResponders';
import PatientInformation from './PatientInformation';
import SupportTeam from './SupportTeam';
import Reminders from './Reminders';
import EditDatabase from './EditDatabase';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/elder-users" element={<ElderUsers />} />
        <Route path="/healthcare-professionals" element={<HealthcareProfessionals />} />
        <Route path="/caregivers" element={<Caregivers />} />
        <Route path="/emergency-responders" element={<EmergencyResponders />} />
        <Route path="/patient-information" element={<PatientInformation />} />
        <Route path="/support-team" element={<SupportTeam />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/edit-database" element={<EditDatabase />} />

      </Routes>
    </Router>
  );
}

export default App;
