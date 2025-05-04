// EditDatabase.js
import React, { useState } from 'react';
import './EditDatabase.css';

const initialData = [
  { id: 1, name: 'John Doe', age: 72, condition: 'Diabetes' },
  { id: 2, name: 'Jane Smith', age: 68, condition: 'Hypertension' },
];

export default function EditDatabase() {
  const [data, setData] = useState(initialData);
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState({ name: '', age: '', condition: '' });

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(data[index]);
  };

  const handleSave = () => {
    const updated = [...data];
    updated[editIndex] = form;
    setData(updated);
    setEditIndex(null);
    setForm({ name: '', age: '', condition: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="edit-container">
      <h2>Edit Database</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Condition</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td>{editIndex === index ? <input name="name" value={form.name} onChange={handleChange} /> : row.name}</td>
              <td>{editIndex === index ? <input name="age" value={form.age} onChange={handleChange} /> : row.age}</td>
              <td>{editIndex === index ? <input name="condition" value={form.condition} onChange={handleChange} /> : row.condition}</td>
              <td>
                {editIndex === index ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(index)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
