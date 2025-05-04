import React from 'react';
import './reminders.css';

export default function Reminders() {
  const notifications = [
    {
      title: 'Morning Medication',
      message: 'Take Aspirin at 8:00 AM with a glass of water.',
    },
    {
      title: 'Doctor Consultation',
      message: 'Virtual appointment with Dr. Mehta at 11:00 AM.',
    },
    {
      title: 'Hydration Reminder',
      message: 'Drink at least 6-8 glasses of water today.',
    },
    {
      title: 'Exercise Alert',
      message: 'Take a 15-minute walk after lunch.',
    },
    {
      title: 'Evening Medication',
      message: 'Take Blood Pressure Tablet at 7:00 PM.',
    },
  ];

  return (
    <div className="reminder-page-container">
      <h2 className="reminders-title">Your Reminders for Today</h2>
      <div className="reminder-cards-container">
        {notifications.map((note, index) => (
          <div key={index} className="reminder-card">
            <h4>{note.title}</h4>
            <p>{note.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
