import React from 'react';
import Link from 'next/link';
import { List, ListItem, Typography } from '@mui/material';

const ServiceList = ({ services }) => {
  return (
    <List sx={{ p: 0 }}>
      {services.map((service) => (
        <ListItem key={service.id} sx={{ my: 2 }}>
          <Link href={`/services/${service.id}`} passHref>
            <Typography variant="body1" component="a" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              {service.name}
            </Typography>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default ServiceList;
