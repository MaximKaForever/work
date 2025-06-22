const button = document.querySelector('.my-button'); 
const toast = document.getElementById('toast');

if (button && toast) {
  button.addEventListener('click', () => {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500); 
  });
}

const pngbutton = document.querySelector('.png-button');
if (pngbutton) {
  pngbutton.addEventListener('click', function() {
    window.location.href = 'index.html'; 
  });
}

const button2 = document.querySelector('.my-button_2');
if (button2) {
  button2.addEventListener('click', function() {
    window.location.href = 'oplata.html'; 
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const noticeBox = document.getElementById('pageNotice');
  const currentPath = window.location.pathname.toLowerCase();

  console.log('currentPath:', currentPath);

  if (currentPath.endsWith('/work/') || currentPath.endsWith('/work/index.html')) {
    noticeBox.classList.add('show');

    setTimeout(() => {
      noticeBox.classList.remove('show');
    }, 3000); 
  }
});


const clientForm = document.getElementById("clientForm");
if (clientForm) {
  clientForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("insert.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      alert("Отправлено: " + data);
    })
    .catch(error => {
      console.error("Ошибка:", error);
      alert("Ошибка отправки");
    });
  });
}
