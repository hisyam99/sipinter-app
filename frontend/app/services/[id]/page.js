"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const ServiceDetail = () => {
  const [service, setService] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    if (id) {
      // Fetch service details from the backend
      fetch(`/api/services/${id}`)
        .then(response => response.json())
        .then(data => setService(data))
        .catch(error => console.error('Error fetching service details:', error));
    }
  }, [id]);

  if (!service) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
      <p className="text-lg mb-4">{service.description}</p>
      <p className="text-lg mb-4">Location: {service.location}</p>
      <p className="text-lg mb-4">Rating: {service.rating}</p>
    </div>
  );
};

export default ServiceDetail;
