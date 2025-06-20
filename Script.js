const button = document.querySelector('.my-button');
const toast = document.getElementById('toast');

button.addEventListener('click', () => {
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500); 
});