import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const HomePage = () => {
  const backgroundStyle = {
    // backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/background.jpg')",
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    height: '100vh',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    textAlign: 'center'
  };

  const boxStyle = {
    backgroundColor: 'white',
    borderRadius: '30px',
    padding: '5px',
  };

  const headerStyle = {
    marginTop: '40px',
  };

  return (
    <div style={backgroundStyle}>
      <Container maxWidth="md" className="text-center">
        <Typography variant="h2" component="h2" gutterBottom style={headerStyle}>
          Cari Layanan Service
        </Typography>
        <Box style={boxStyle}>
          <TextField
            id="search"
            label="Cari Layanan"
            variant="filled"
            fullWidth
            size="large"
          />
        </Box>
        <br />
        <Typography variant="body1" gutterBottom>
          atau explore kategori layanan
        </Typography>
        
      </Container>
    </div>
  );
};

export default HomePage;
