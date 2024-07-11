import React, { useState } from 'react';
import axios from 'axios';

function DataSend() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/data", {
        name,
        email
      });
      console.log('Data sent:', response.data);
    } catch (err) {
      console.error('Error sending data:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DataSend;
