let queue = [];

function joinQueue() {
  const user = prompt("Введите ваше имя:");
  if (user) {
    queue.push(user);
    alert(`Вы в очереди. Место: ${queue.length}`);
  }
}

function createVM() {
  const os = prompt("Выберите ОС (например: Windows, Linux, DOS):");
  if (os) {
    document.getElementById("vm-frame").src = "https://copy.sh/v86/";
    alert("VM создана! ОС: " + os);
  }
}

function openChat() {
  alert("Чат в разработке 🛠");
}