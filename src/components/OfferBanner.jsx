import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const offers = [
  "🔬 50% OFF on Microscopes!",
  "🧪 Buy 1 Get 1 Free: Lab Coats",
  "🧫 Sale: Up to 30% OFF on Petri Dishes",
  "🔥 Limited Time Deal: Centrifuges 40% OFF",
  "💥 Flash Sale: Chemical Glassware at Half Price!",
];

const OfferBanner = () => {
  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: '10px',
        backgroundColor: 'black',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '0.95rem',
        position: 'fixed', // ✅ Important for zIndex
        zIndex: 99,
        pt:5,
        // pb:5,
        mb:20
      }}
    >
      <Typography variant="body2" sx={{ color: 'yellow' }}>
        {offers[currentOffer]}
      </Typography>
    </Box>
  );
};

export default OfferBanner;
