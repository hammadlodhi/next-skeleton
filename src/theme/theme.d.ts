import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      zIndex: {
        underGround: number;
      };
      borders: {
        gray: string;
      };
      colors: {
        gray: string;
        blue: string;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      zIndex?: {
        underGround?: number;
      };
      borders?: {
        gray?: string;
      };
      colors?: {
        gray?: string;
        blue?: string;
      };
    };
  }
}
