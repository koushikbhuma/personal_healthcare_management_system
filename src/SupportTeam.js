import React from 'react';
import './support.css';

export default function SupportTeam() {
  return (
    <div className="support-container">
      <h2 className="support-title">Support Team</h2>
      <div className="support-card">
        <h3>Contact Information</h3>
        <p><strong>Address:</strong> 123 HealthCare Blvd, Chicago, IL 60616</p>
        <p><strong>Email:</strong> support@eldercare.org</p>
        <p><strong>Phone:</strong> +1 (312) 555-7890</p>
        <p><strong>Working Hours:</strong> Mon–Fri, 9:00 AM – 5:00 PM</p>
      </div>
    </div>
  );
}
