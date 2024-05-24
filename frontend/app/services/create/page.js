"use client"; // Add this line to mark the component as client-side

import React, { useState } from 'react';

const CreateService = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');

  const backgroundStyle = {
    // backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/background.jpg')",
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    height: '100vh',
    color: 'black',
 

  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi input sebelum mengirim permintaan POST
    if (!name || !description || !location || !rating) {
      setError('Please fill in all fields.');
      return;
    }

    const response = await fetch('/api/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, location, rating: parseFloat(rating) }),
    });

    if (!response.ok) {
      setError('Failed to create service. Please try again.');
      return;
    }

    const data = await response.json();
    console.log(data);

    // Reset form fields after successful creation
    setName('');
    setDescription('');
    setLocation('');
    setRating('');
    setError('');
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={{color: 'white'}}>Create Service</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <button style={{color: 'white'}} type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateService;
