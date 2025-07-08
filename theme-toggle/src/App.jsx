import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material';
import { getTheme } from './theme/theme';
import ThemeToggle from './components/ThemeToggle';
import { getStoredTheme, saveTheme } from './utils/localStorage';
import './App.css';


const App = () => {
  const [themeMode, setThemeMode] = useState(getStoredTheme());
  const [showSnackbar, setShowSnackbar] = useState(false);

  const theme = useMemo(() => getTheme(themeMode), [themeMode]);

  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    saveTheme(newTheme);
    setShowSnackbar(true);
  };

  useEffect(() => {
    document.title = `Current Theme: ${themeMode}`;
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeToggle
        themeMode={themeMode}
        toggleTheme={toggleTheme}
        showSnackbar={showSnackbar}
        setShowSnackbar={setShowSnackbar}
      />
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">Welcome to the Theme Toggle App</Typography>
        <Typography variant="body1">Current theme: {themeMode}</Typography>
      </Box>
    </ThemeProvider>
  );
};

export default App;
