import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            background: { default: '#121212' },
          }
        : {
            background: { default: '#ffffff' },
          }),
    },
  });
