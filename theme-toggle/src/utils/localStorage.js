export const getStoredTheme = () => {
  return localStorage.getItem('theme') || 'light';
};

export const saveTheme = (theme) => {
  localStorage.setItem('theme', theme);
};
