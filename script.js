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
    Subject: "This is the subject",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Wiadomość: " +
      document.getElementById("message").value,
  }).then((message) => alert("Wiadomość została wysłana pomyślnie"));
}
