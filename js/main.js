const body = document.querySelector('body');
const toggleButton = document.getElementById('toggleDark');


toggleButton.addEventListener('click', function() {
  this.classList.toggle('light-theme');
  if(this.classList.toggle('dark-theme')) {
    body.style.backgroundColor = "#28282B";
    body.style.color = "#FFE5B4";
  } else {
    body.style.backgroundColor = "#FFE5B4";
    body.style.color = "#28282B";
  }
});
