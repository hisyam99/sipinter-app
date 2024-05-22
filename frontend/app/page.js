import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import backgroundImage from '/public/images/background.jpg'; // Ganti dengan path gambar Anda

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Menjamin latar belakang memenuhi setidaknya tinggi layar
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md" className="text-center">
        <Typography variant="h1" component="h1" gutterBottom>
          SiPinter Service
        </Typography>
        <Typography variant="body1" gutterBottom>
          Solusi Perbaikan Tepat dan Terpercaya
        </Typography>
      </Container>
    </div>
  );
};

export default HomePage;
