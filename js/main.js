const body = document.body;
const toggleButton = document.getElementById('theme-toggle');

// Define the function to toggle the theme
function toggleTheme() {
  if (body.classList.contains('light-theme')) {
    body.classList.replace('light-theme', 'dark-theme');
  } else {
    body.classList.replace('dark-theme', 'light-theme');
  }
}

// Add an event listener to the toggle button
toggleButton.addEventListener('click', toggleTheme);
