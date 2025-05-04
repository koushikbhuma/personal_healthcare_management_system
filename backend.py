from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)  

DATABASE = 'eldercare.db' 

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row  
    return conn

@app.route('/api/elder-users', methods=['GET'])
def get_elder_users():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT id, name, age, health_status FROM elder_users')
    rows = cursor.fetchall()
    conn.close()

    users = [dict(row) for row in rows]
    return jsonify(users)

@app.route('/api/healthcare-professionals', methods=['GET'])
def get_healthcare_professionals():
    conn = get_db_connection()
    rows = conn.execute('SELECT * FROM healthcare_professionals').fetchall()
    conn.close()
    return jsonify([dict(row) for row in rows])

@app.route('/api/caregivers', methods=['GET'])
def get_caregivers():
    conn = get_db_connection()
    rows = conn.execute('SELECT * FROM caregivers').fetchall()
    conn.close()
    return jsonify([dict(row) for row in rows])

@app.route('/api/emergency-responders', methods=['GET'])
def get_emergency_responders():
    conn = get_db_connection()
    rows = conn.execute('SELECT * FROM emergency_responders').fetchall()
    conn.close()
    return jsonify([dict(row) for row in rows])

@app.route('/api/patient-information', methods=['GET'])
def get_patient_information():
    conn = get_db_connection()
    rows = conn.execute('SELECT * FROM patient_information').fetchall()
    conn.close()
    return jsonify([dict(row) for row in rows])

@app.route('/api/reminders', methods=['GET'])
def get_reminders():
    reminders = [
        {
            "title": "Morning Medication",
            "message": "Take Aspirin at 8:00 AM with a glass of water."
        },
        {
            "title": "Doctor Consultation",
            "message": "Virtual appointment with Dr. Mehta at 11:00 AM."
        },
        {
            "title": "Hydration Reminder",
            "message": "Drink at least 6-8 glasses of water today."
        },
        {
            "title": "Exercise Alert",
            "message": "Take a 15-minute walk after lunch."
        },
        {
            "title": "Evening Medication",
            "message": "Take Blood Pressure Tablet at 7:00 PM."
        }
    ]
    return jsonify(reminders)

if __name__ == '__main__':
    app.run(debug=True)