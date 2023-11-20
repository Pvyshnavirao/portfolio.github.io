// script.js
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Toggle dark mode class
    const isDarkMode = body.classList.contains('dark-mode');
  
    // Apply styles based on the user's mode preference
    if (isDarkMode) {
      body.style.backgroundColor = '#1a1a1a';
      body.style.color = '#ffffff';
    } else {
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#000000';
    }
  
    // Store the user's preference in localStorage
    localStorage.setItem('darkMode', isDarkMode);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const storedDarkMode = localStorage.getItem('darkMode');
    const body = document.body;
  
    // Apply styles based on the stored user's mode preference on page load
    if (storedDarkMode === 'true') {
      body.classList.add('dark-mode');
      body.style.backgroundColor = '#1a1a1a';
      body.style.color = '#ffffff';
    } else {
      body.classList.remove('dark-mode');
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#000000';
    }
  });
  
  // Attach the toggleMode function to the button click event
  const modeToggleBtn = document.getElementById('modeToggleBtn');
  modeToggleBtn.addEventListener('click', toggleMode);
  //--------------------
  // function toggleDetails(id) {
  //   var details = document.getElementById(id + '-details');
  //   details.style.display = (details.style.display === 'none' || details.style.display === '') ? 'block' : 'none';
// }
function toggleDetails(id) {
  var details = document.getElementById(id);
  details.style.display = (details.style.display === 'none' || details.style.display === '') ? 'block' : 'none';
}
