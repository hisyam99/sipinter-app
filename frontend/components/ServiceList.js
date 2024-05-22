import React from 'react';
import Link from 'next/link';

const ServiceList = ({ services }) => {
  return (
    <ul className="list-none p-0">
      {services.map((service) => (
        <li key={service.id} className="my-2">
          <Link
            href={`/services/${service.id}`}
            className="text-blue-600 hover:underline">
            {service.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
