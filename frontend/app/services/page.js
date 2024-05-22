"use client";

import React, { useEffect, useState } from 'react';
import ServiceList from '../../components/ServiceList';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services from the backend
    fetch('/api/services')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Available Services</h1>
      <ServiceList services={services} />
    </div>
  );
};

export default Services;
