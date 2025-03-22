// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Toggle Theme
themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', newTheme);
});