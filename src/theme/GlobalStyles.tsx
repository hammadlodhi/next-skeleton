import { GlobalStyles as BaseStyles } from '@mui/material';

const GlobalStyles = () => (
  <BaseStyles
    styles={{
      '*::-webkit-scrollbar': {
        width: '6px',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'darkgrey',
      },
      '*:focus-visible': {
        outline: '1px dashed rgba(0,0,0,0.4)',
        outlineOffset: '2px',
      },
      a: {
        textDecoration: 'none',
        color: 'inherit',
      },
    }}
  />
);

export default GlobalStyles;
