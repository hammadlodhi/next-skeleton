// Pagination/Pagination.tsx
import React from 'react';
import { Stack } from '@mui/material';
import { LocalizedButton } from '../LocalizedButton/LocalizedButton';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
      <LocalizedButton
        variant="outlined"
        t="Prev"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />

      {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
        <LocalizedButton
          key={page}
          t={page.toString()}
          variant={page === currentPage ? 'contained' : 'outlined'}
          color={page === currentPage ? 'primary' : 'inherit'}
          onClick={() => onPageChange(page)}
        />
      ))}

      <LocalizedButton
        variant="outlined"
        t="Next"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </Stack>
  );
};

export default Pagination;
