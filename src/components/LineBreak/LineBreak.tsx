// LineBreak/LineBreak.tsx
import React from 'react';
import { styled } from '@mui/material/styles';

const StyledHR = styled('hr')(({ theme }) => ({
  border: 'none',
  borderTop: `1px solid ${theme.palette.divider}`,
  margin: theme.spacing(2, 0),
}));

const LineBreak: React.FC = () => {
  return <StyledHR />;
};

export default LineBreak;
