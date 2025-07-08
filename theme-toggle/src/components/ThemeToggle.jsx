import React from 'react';
import { AppBar, Toolbar, Typography, Switch, Snackbar } from '@mui/material';

const ThemeToggle = ({ themeMode, toggleTheme, showSnackbar, setShowSnackbar }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Theme Toggle App
          </Typography>
          <Switch
            checked={themeMode === 'dark'}
            onChange={toggleTheme}
            inputProps={{ 'aria-label': 'theme switch' }}
          />
        </Toolbar>
      </AppBar>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={() => setShowSnackbar(false)}
        message={`Switched to ${themeMode} mode`}
      />
    </>
  );
};

export default ThemeToggle;
