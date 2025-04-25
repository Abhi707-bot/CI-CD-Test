import React from 'react';

const BirthdayWish = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f8ff',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Happy Birthday, Abhi! 🎉</h1>
      <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
        Wishing you a fantastic day filled with joy, laughter, and all the things you love most.
      </p>
    </div>
  );
};

export default BirthdayWish;
