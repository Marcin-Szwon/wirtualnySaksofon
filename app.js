function stopMusic() {
  audio.pause();
  audio.currentTime = 0;
}
let licznik = 0;
let czasPoczatkowy; // Zmienna przechowująca czas początkowy

function playMusic(nuta, srcFront, srcBack) {
  if (licznik === 0) {
    // Pobieranie czasu początkowego w milisekundach od epoki
    czasPoczatkowy = new Date().getTime();
    console.log(czasPoczatkowy + 1000); // Dodanie 1000 ms
    licznik = 1;
  } else {
    let teraz = new Date().getTime();
    let czasPrzeplyniety = teraz - czasPoczatkowy;
    // console.log(teraz + 1000); // Dodanie 1000 ms
    console.log(czasPrzeplyniety + 1000); // Dodanie 1000 ms
  }

  console.log(nuta);
  front.src = `images/sax/${srcFront}`;
  back.src = `images/sax/${srcBack}`;
  audio.pause();
  audio.src = `sound/${nuta}`;
  audio.play();
}

// licznik = 0;
// function playMusic(nuta, srcFront, srcBack) {
//   if (licznik == 0) {
//     // Pobieranie obecnego czasu w milisekundach od epoki
//     var czasWmilisekundach = new Date().getTime();
//     console.log(czasWmilisekundach);
//     // Konwersja do sekund
//     var czasWsekundach = czasWmilisekundach / 1000;
//     licznik = licznik + 1;
//   } else {
//     let teraz = new Date().getTime();
//     let terazSekundy = teraz / 1000;
//     console.log(teraz);
//     console.log(czasWmilisekundach - teraz);
//   }

//   // console.log(czasWsekundach);

//   console.log(nuta);
//   front.src = `images/sax/${srcFront}`;
//   back.src = `images/sax/${srcBack}`;
//   audio.pause();
//   audio.src = `sound/${nuta}`;
//   audio.play();
// }
counter = 0;
function changeColor(btn) {
  btn.style.backgroundColor = "green";
  if (counter > 0 && btn != poprzedni) {
    poprzedni.style.backgroundColor = "";
  }
  poprzedni = btn;
  counter++;
}

let audio = new Audio("sound/C4.mp3");
let front = document.getElementById("frontSax");
let back = document.getElementById("backSax");

let A3Sharp = document.getElementById("A3#");
let H3 = document.getElementById("H3");

let C4 = document.getElementById("C4");
let C4Sharp = document.getElementById("C4#");
let D4 = document.getElementById("D4");
let D4Sharp = document.getElementById("D4#");
let E4 = document.getElementById("E4");
let F4 = document.getElementById("F4");
let F4Sharp = document.getElementById("F4#");
let G4 = document.getElementById("G4");
let G4Sharp = document.getElementById("G4#");
let A4 = document.getElementById("A4");
let A4Sharp = document.getElementById("A4#");
let H4 = document.getElementById("H4");

let C5 = document.getElementById("C5");
let C5Sharp = document.getElementById("C5#");
let D5 = document.getElementById("D5");
let D5Sharp = document.getElementById("D5#");
let E5 = document.getElementById("E5");
let F5 = document.getElementById("F5");
let F5Sharp = document.getElementById("F5#");
let G5 = document.getElementById("G5");
let G5Sharp = document.getElementById("G5#");
let A5 = document.getElementById("A5");
let A5Sharp = document.getElementById("A5#");
let H5 = document.getElementById("H5");

let C6 = document.getElementById("C6");
let C6Sharp = document.getElementById("C6#");
let D6 = document.getElementById("D6");
let D6Sharp = document.getElementById("D6#");
let E6 = document.getElementById("E6");
let F6 = document.getElementById("F6");
let graj = document.getElementById("graj");

// let stopPlaying = false; // Ustawienie początkowej wartości flagi
let timeoutIds = []; // Tablica do przechowywania identyfikatorów setTimeout
let stopPlaying = false;

const stopPlayingFunction = () => {
  stopPlaying = true;

  // Anulowanie wszystkich zaplanowanych setTimeout
  timeoutIds.forEach((timeoutId) => {
    clearTimeout(timeoutId);
  });

  // Wyczyszczenie tablicy identyfikatorów
  timeoutIds = [];

  // Przywrócenie pierwotnego stanu przycisku "Posłuchaj"
  const listenButton = document.getElementById("listenButton");
  listenButton.style.backgroundColor = "";
  listenButton.textContent = "Posłuchaj";
};

const hallelujahListen = () => {
  stopPlaying = false; // Resetowanie zmiennej przed ponownym uruchomieniem

  // Funkcja pomocnicza do planowania setTimeout i przechowywania identyfikatora
  const scheduleTimeout = (callback, delay) => {
    const timeoutId = setTimeout(() => {
      if (!stopPlaying) {
        callback();
      }
    }, delay);
    timeoutIds.push(timeoutId);
  };

  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 1000);

  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 1538);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 2344);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 2771);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 3500);

  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 3878);

  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 4662);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 5081);

  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 5900);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 6346);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 7179);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 7570);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 8286);
  // scheduleTimeout(() => {
  //   playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
  //   changeColor(A4);
  // }, 8661);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 9201);

  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 10027);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 10482);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 11313);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 11764);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 12662);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 13074);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 13896);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 14292);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 15108);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 16077);
  scheduleTimeout(() => {
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }, 16655);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 17492);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 19363);

  // PRZERWA
  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 19912);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 20714);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 21196);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 22007);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 23000);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 23494);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 24433);
  scheduleTimeout(() => {
    playMusic("C5SHARP.mp3", "PUSTY_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(C5Sharp);
  }, 25014);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 25875);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 26381);

  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 27359);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 27889);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 28400);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 28942);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 29976);
  scheduleTimeout(() => {
    playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(E5);
  }, 30474);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 31312);
  scheduleTimeout(() => {
    playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(E5);
  }, 31818);
  scheduleTimeout(() => {
    playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(E5);
  }, 32623);
  scheduleTimeout(() => {
    playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(E5);
  }, 33148);
  scheduleTimeout(() => {
    playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(E5);
  }, 32623);
  scheduleTimeout(() => {
    playMusic("F5SHARP.mp3", "F4SHARP_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(F5Sharp);
  }, 33148);
  scheduleTimeout(() => {
    playMusic("F5SHARP.mp3", "F4SHARP_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(F5Sharp);
  }, 34080);
  scheduleTimeout(() => {
    playMusic("F5SHARP.mp3", "F4SHARP_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(F5Sharp);
  }, 35012);
  scheduleTimeout(() => {
    playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(E5);
  }, 35506);
  scheduleTimeout(() => {
    playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(E5);
  }, 36074);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 37016);
  // Końcówka
  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 38977);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 39873);

  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 40392);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 41647);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 43816);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 44753);
  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 45300);
  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 46514);
  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 48318);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 49206);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 49783);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 51010);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 53265);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 54101);
  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 54606);
  scheduleTimeout(() => {
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }, 56087);
  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 56691);
  scheduleTimeout(() => {
    playMusic("E4.mp3", "E4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(E4);
  }, 57162);
  scheduleTimeout(() => {
    playMusic("D4.mp3", "D4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(D4);
  }, 58621);
  scheduleTimeout(() => {
    playMusic("D4.mp3", "D4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(D4);
  }, 59336);

  scheduleTimeout(() => {
    stopPlayingFunction();
  }, 61000);

  // Zmiana wyglądu przycisku "Posłuchaj"
  const listenButton = document.getElementById("listenButton");
  listenButton.style.backgroundColor = "red";
  listenButton.textContent = "Zatrzymaj";

  // Obsługa naciśnięcia przycisku "Zatrzymaj"
  listenButton.onclick = function () {
    if (stopPlaying) {
      // Jeśli już jest zatrzymane, ponownie uruchom funkcję
      hallelujahListen();
    } else {
      // Jeśli jest w trakcie odtwarzania, zatrzymaj
      stopPlayingFunction();
    }
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      stopPlayingFunction();
    }
  });
};
// document
//   .getElementById("listenButton")
//   .addEventListener("click", hallelujahListen);

// graj.addEventListener("click", function () {});

// A3-H3

A3Sharp.addEventListener("click", function () {
  playMusic("A3SHARP.mp3", "A3SHARP_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "t" || event.key === "T") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("A3SHARP.mp3", "A3SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A3Sharp);
  }
});

H3.addEventListener("click", function () {
  playMusic("H3.mp3", "H3_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "y" || event.key === "Y") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("H3.mp3", "H3_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H3);
  }
});

// C4-H4

C4.addEventListener("click", function () {
  playMusic("C4.mp3", "C4_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "z" || event.key === "Z") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("C4.mp3", "C4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(C4);
  }
});

C4Sharp.addEventListener("click", function () {
  playMusic("C4SHARP.mp3", "C4SHARP_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("C4SHARP.mp3", "C4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(C4Sharp);
  }
});

D4.addEventListener("click", function () {
  playMusic("D4.mp3", "D4_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "Q") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("D4.mp3", "D4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(D4);
  }
});

D4Sharp.addEventListener("click", function () {
  playMusic("D4SHARP.mp3", "D4SHARP_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "w" || event.key === "W") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("D4SHARP.mp3", "D4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(D4Sharp);
  }
});

E4.addEventListener("click", function () {
  playMusic("E4.mp3", "E4_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "s" || event.key === "S") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("E4.mp3", "E4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(E4);
  }
});

F4.addEventListener("click", function () {
  playMusic("F4.mp3", "F4_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "x" || event.key === "X") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("F4.mp3", "F4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4);
  }
});

F4Sharp.addEventListener("click", function () {
  playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "c" || event.key === "C") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }
});

G4.addEventListener("click", function () {
  playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "d" || event.key === "D") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }
});

G4Sharp.addEventListener("click", function () {
  playMusic("G4SHARP.mp3", "G4SHARP_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "e" || event.key === "E") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("G4SHARP.mp3", "G4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4Sharp);
  }
});

A4.addEventListener("click", function () {
  playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "r" || event.key === "R") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }
});

A4Sharp.addEventListener("click", function () {
  playMusic("A4SHARP.mp3", "A4SHARP_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "f" || event.key === "F") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("A4SHARP.mp3", "A4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4Sharp);
  }
});

H4.addEventListener("click", function () {
  playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "v" || event.key === "V") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }
});

// C5-H5

C5.addEventListener("click", function () {
  playMusic("C5.mp3", "C5_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "b" || event.key === "B") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("C5.mp3", "C5_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(C5);
  }
});

C5Sharp.addEventListener("click", function () {
  playMusic("C5SHARP.mp3", "PUSTY_FRONT.webp", "PUSTY_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "h" || event.key === "H") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("C5SHARP.mp3", "PUSTY_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(C5Sharp);
  }
});

D5.addEventListener("click", function () {
  playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "u" || event.key === "U") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }
});

D5Sharp.addEventListener("click", function () {
  playMusic("D5SHARP.mp3", "D4SHARP_FRONT.webp", "OKTAWA_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "i" || event.key === "I") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("D5SHARP.mp3", "D4SHARP_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5Sharp);
  }
});

E5.addEventListener("click", function () {
  playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "j" || event.key === "J") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(E5);
  }
});

F5.addEventListener("click", function () {
  playMusic("F5.mp3", "F4_FRONT.webp", "OKTAWA_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "n" || event.key === "N") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("F5.mp3", "F4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(F5);
  }
});

F5Sharp.addEventListener("click", function () {
  playMusic("F5SHARP.mp3", "F4SHARP_FRONT.webp", "OKTAWA_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "m" || event.key === "M") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("F5SHARP.mp3", "F4SHARP_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(F5Sharp);
  }
});

G5.addEventListener("click", function () {
  playMusic("G5.mp3", "G4_FRONT.webp", "OKTAWA_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "k" || event.key === "K") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("G5.mp3", "G4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(G5);
  }
});

G5Sharp.addEventListener("click", function () {
  playMusic("G5SHARP.mp3", "G4SHARP_FRONT.webp", "OKTAWA_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "o" || event.key === "O") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("G5SHARP.mp3", "G4SHARP_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(G5Sharp);
  }
});

A5.addEventListener("click", function () {
  playMusic("A5.mp3", "A4_FRONT.webp", "OKTAWA_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "p" || event.key === "P") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("A5.mp3", "A4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(A5);
  }
});

A5Sharp.addEventListener("click", function () {
  playMusic("A5SHARP.mp3", "A4SHARP_FRONT.webp", "OKTAWA_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "l" || event.key === "L") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("A5SHARP.mp3", "A4SHARP_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(A5Sharp);
  }
});

H5.addEventListener("click", function () {
  playMusic("H5.mp3", "H4_FRONT.webp", "OKTAWA_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "," || event.key === "<") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("H5.mp3", "H4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(H5);
  }
});

// C6-F6

C6.addEventListener("click", function () {
  playMusic("C6.mp3", "C5_FRONT.webp", "OKTAWA_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "." || event.key === ">") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("C6.mp3", "C5_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(C6);
  }
});

C6Sharp.addEventListener("click", function () {
  playMusic("C6SHARP.mp3", "PUSTY_FRONT.webp", "OKTAWA_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === ";" || event.key === ":") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("C6SHARP.mp3", "PUSTY_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(C6Sharp);
  }
});

D6.addEventListener("click", function () {
  playMusic("D6.mp3", "PUSTY_FRONT.webp", "D6_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "[" || event.key === "{") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("D6.mp3", "PUSTY_FRONT.webp", "D6_BACK.webp");
    changeColor(D6);
  }
});

D6Sharp.addEventListener("click", function () {
  playMusic("D6SHARP.mp3", "PUSTY_FRONT.webp", "D6SHARP_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "]" || event.key === "}") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("D6SHARP.mp3", "PUSTY_FRONT.webp", "D6SHARP_BACK.webp");
    changeColor(D6Sharp);
  }
});

E6.addEventListener("click", function () {
  playMusic("E6.mp3", "E6_FRONT.webp", "E6_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "'" || event.key === "'") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("E6.mp3", "E6_FRONT.webp", "E6_BACK.webp");
    changeColor(E6);
  }
});

F6.addEventListener("click", function () {
  playMusic("F6.mp3", "E6_FRONT.webp", "F6_BACK.webp");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "/" || event.key === "?") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("F6.mp3", "E6_FRONT.webp", "F6_BACK.webp");
    changeColor(F6);
  }
});
