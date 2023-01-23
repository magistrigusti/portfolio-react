export default detectDarkMode = () => {
  if (window.matchMedia && window.matchMedia('(prefers-colors-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};
