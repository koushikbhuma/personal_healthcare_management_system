import sqlite3

conn = sqlite3.connect('eldercare.db')
cursor = conn.cursor()

# Elder Users
cursor.execute('''
    CREATE TABLE IF NOT EXISTS elder_users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER,
        health_status TEXT
    )
''')

cursor.execute('''
    CREATE TABLE IF NOT EXISTS healthcare_professionals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        specialization TEXT,
        contact TEXT
    )
''')

cursor.execute('''
    CREATE TABLE IF NOT EXISTS caregivers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        relationship TEXT,
        contact TEXT
    )
''')

cursor.execute('''
    CREATE TABLE IF NOT EXISTS emergency_responders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        role TEXT,
        contact TEXT
    )
''')

cursor.execute('''
    CREATE TABLE IF NOT EXISTS patient_information (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        patient_name TEXT NOT NULL,
        diagnosis TEXT,
        treatment TEXT
    )
''')

# Sample Data
# Elder Users sample data
cursor.executemany('INSERT INTO elder_users (name, age, health_status) VALUES (?, ?, ?)', [
    ('Mohan Lal', 80, 'Needs Assistance'),
])

cursor.executemany('INSERT INTO healthcare_professionals (name, specialization, contact) VALUES (?, ?, ?)', [
    ('Dr. Asha Mehta', 'Geriatrics', '555-1234'),
    ('Dr. Rajiv Kapoor', 'Cardiology', '555-5678'),
])

cursor.executemany('INSERT INTO caregivers (name, relationship, contact) VALUES (?, ?, ?)', [
    ('Neha Sharma', 'Daughter', '555-1111'),
    ('Ravi Kumar', 'Son', '555-2222'),
])

cursor.executemany('INSERT INTO emergency_responders (name, role, contact) VALUES (?, ?, ?)', [
    ('Ajay Rana', 'Paramedic', '911'),
    ('Nisha Iyer', 'Ambulance Driver(CRITICAL)', '912'),
])

cursor.executemany('INSERT INTO patient_information (patient_name, diagnosis, treatment) VALUES (?, ?, ?)', [
    ('Mohan Lal', 'Hypertension', 'Medication A'),
    ('','', 'Surgery Scheduled'),
])

conn.commit()
conn.close()
print("All tables initialized with sample data.")
