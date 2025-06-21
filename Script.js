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

const button2 = document.querySelector('.my-button_2');
if (button2) {
  button2.addEventListener('click', function() {
    window.location.href = 'oplata.html'; 
  });
}

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
