import React from 'react';
import Link from 'next/link';

const ServiceItem = ({ service }) => {
  return (
    <div className="border p-4 rounded mb-4 bg-white shadow">
      <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
      <p className="mb-2">{service.description}</p>
      <p className="mb-2">{service.location}</p>
      <p className="mb-2">Rating: {service.rating}</p>
      <Link
        href={`/services/${service.id}`}
        className="text-blue-600 hover:underline">
        Details
      </Link>
    </div>
  );
};

export default ServiceItem;
