// components/IconButton/IconButton.tsx
import React from 'react';
import MuiIconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';

export interface IconButtonProps extends MuiIconButtonProps {
  icon: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => {
  const theme = useTheme();

  return (
    <MuiIconButton
      sx={{
        color: theme.palette.primary.main,
        '&:hover': {
          opacity: 0.5,
        },
        '&:active': {
          opacity: 0.7,
        },
        svg: {
          width: 24,
          height: 'auto',
        },
      }}
      {...props}
    >
      {icon}
    </MuiIconButton>
  );
};

export default IconButton;
