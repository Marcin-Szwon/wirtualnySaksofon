const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

function sendEmail() {
  Email.send({
    SecureToken: "52c4c2f0-b304-4d5a-8827-aad156837dde",
    To: "meyol2001@gmail.com",
    From: "mko2001@op.pl",
    Subject: document.getElementById("subject").value,
    Body:
      "Imię: " +
      document.getElementById("name").value +
      "<br> E-Mail: " +
      document.getElementById("email").value +
      "<br> Wiadomość: " +
      document.getElementById("message").value,
  }).then((message) => alert("Wiadomość została wysłana pomyślnie"));
}

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, transparent ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


