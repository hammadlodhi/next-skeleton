'use client';

import React, { FC } from 'react';
import { Box, Button } from '@mui/material';

interface Props {
  onClick?: () => void;
  clicked?: boolean;
}

export const BurgerMenu: FC<Props> = ({ onClick, clicked }) => {
  return (
    <Button
      onClick={onClick}
      aria-label="Toggle menu"
      sx={{
        minWidth: '40px',
        width: '40px',
        height: '40px',
        padding: 0,
        borderRadius: 1,
        backgroundColor: '#e0e0e0',
        '&:hover': {
          backgroundColor: '#d0d0d0',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '20px',
          height: '20px',
          position: 'relative',
        }}
      >
        {/* Top bar */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '2px',
            backgroundColor: '#000',
            top: clicked ? '9px' : '4px',
            transform: clicked ? 'rotate(45deg)' : 'none',
            transition: 'all 0.3s ease-in-out',
          }}
        />
        {/* Middle bar */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '2px',
            backgroundColor: '#000',
            top: '9px',
            opacity: clicked ? 0 : 1,
            transition: 'all 0.3s ease-in-out',
          }}
        />
        {/* Bottom bar */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '2px',
            backgroundColor: '#000',
            top: clicked ? '9px' : '14px',
            transform: clicked ? 'rotate(-45deg)' : 'none',
            transition: 'all 0.3s ease-in-out',
          }}
        />
      </Box>
    </Button>
  );
};
