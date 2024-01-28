// Pobranie referencji do przycisku przełączającego menu oraz jego ikony
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");

// Pobranie referencji do menu rozwijanego
const dropDownMenu = document.querySelector(".dropdown_menu");

// Obsługa kliknięcia przycisku przełączającego menu
toggleBtn.onclick = function () {
  // Dodanie/usunięcie klasy "open" dla menu rozwijanego
  dropDownMenu.classList.toggle("open");

  // Sprawdzenie, czy menu jest otwarte
  const isOpen = dropDownMenu.classList.contains("open");

  // Zmiana ikony przycisku w zależności od stanu menu (otwarte/zamknięte)
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// Funkcja do wysyłania wiadomości e-mail
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

// Funkcja do obliczania wartości paska postępu podczas przewijania strony
let calcScrollValue = () => {
  // Pobranie referencji do elementów HTML związanych z paskiem postępu
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");

  // Pobranie aktualnej pozycji przewinięcia strony
  let pos = document.documentElement.scrollTop;

  // Obliczenie procentowego postępu przewijania
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  // Wyświetlenie lub ukrycie paska postępu w zależności od pozycji przewijania
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  // Obsługa kliknięcia na pasku postępu (przewinięcie do góry strony)
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  // Ustawienie gradientu na pasku postępu zgodnie z postępem przewijania
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, transparent ${scrollValue}%)`;
};

// Przypisanie funkcji do zdarzenia przewijania strony i załadowania strony
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
