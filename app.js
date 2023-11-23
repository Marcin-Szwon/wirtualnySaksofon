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
// Funkcja do tworzenia elementów dla liter
function createLetter(letter, delay) {
  var newLetter = document.createElement("div");
  newLetter.textContent = letter;
  newLetter.style.position = "fixed";
  newLetter.style.bottom = "16vh";
  newLetter.style.right = "-3rem";
  newLetter.style.fontSize = "3rem";
  newLetter.style.color = "#ffffff";
  newLetter.style.zIndex = "10001";
  document.body.appendChild(newLetter);

  // Utwórz animację CSS dla litery
  newLetter.style.transition = "right 7s linear " + delay + "s";

  // Po upływie 50ms, przesuń literę na lewo
  setTimeout(function () {
    newLetter.style.right = "100%";
  }, 50);
}

function interfaceCreator() {
  var blackBar = document.createElement("div");
  blackBar.style.position = "fixed";
  blackBar.style.bottom = "15vh"; // Ustaw na "5vh", aby był trochę wyżej od dolnej krawędzi
  blackBar.style.left = "0";
  blackBar.style.width = "100%";
  blackBar.style.height = "10vh"; // Zmiana na 10% wysokości strony
  blackBar.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Przeźroczysty czarny kolor
  blackBar.style.zIndex = "9999"; // Upewnij się, że pasek jest na wierzchu

  // Stwórz pasek koloru #ffcc00 na środku
  var yellowBar = document.createElement("div");
  yellowBar.style.position = "absolute";
  yellowBar.style.top = "0";
  yellowBar.style.left = "50%"; // Ustaw na 50%, aby był na środku
  yellowBar.style.transform = "translateX(-50%)"; // Przesuń o 5% szerokości w lewo
  yellowBar.style.width = "5px"; // Szerokość 10%
  yellowBar.style.height = "100%"; // Cała wysokość czarnego paska
  yellowBar.style.backgroundColor = "#ffcc00"; // Kolor #ffcc00
  yellowBar.style.zIndex = "10000"; // Na wierzchu czarnego paska

  // Dodaj elementy do body
  blackBar.appendChild(yellowBar);
  document.body.appendChild(blackBar); // Funkcja do ukrywania wszystkich elementów po pewnym czasie
}
var playWlazlKotekButton = document.getElementById("KotekPlay");
playWlazlKotekButton.addEventListener("click", function () {
  const playButton = document.getElementById("KotekPlay");
  playButton.style.backgroundColor = "red";
  playButton.textContent = "Zatrzymaj";
  // Obsługa naciśnięcia przycisku "Zatrzymaj"
  playButton.onclick = function () {
    if (stopPlaying) {
      // Jeśli już jest zatrzymane, ponownie uruchom funkcję
      location.reload();
    } else {
      location.reload();
    }
  };
  interfaceCreator();
  createLetter("D", 1);
  createLetter("S", 1.544);
  createLetter("S", 2.117);
  createLetter("X", 2.688);
  createLetter("Q", 3.289);
  createLetter("Q", 3.885);
  createLetter("Z", 4.479);
  createLetter("S", 4.873);
  createLetter("D", 5.278);
  createLetter("D", 6.577);
  createLetter("S", 7.142);
  createLetter("S", 7.728);
  createLetter("X", 8.288);
  createLetter("Q", 8.893);
  createLetter("Q", 9.476);
  createLetter("Z", 10.092);
  createLetter("S", 10.434);
  createLetter("Z", 10.853);
});

var playHallelujahButton = document.getElementById("HallelujahPlay");
playHallelujahButton.addEventListener("click", function () {
  var musicList = document.querySelector(".music-list");
  // Zmiana wyglądu przycisku "Posłuchaj"
  const playButton = document.getElementById("HallelujahPlay");
  playButton.style.backgroundColor = "red";
  playButton.textContent = "Zatrzymaj";

  // Obsługa naciśnięcia przycisku "Zatrzymaj"
  playButton.onclick = function () {
    if (stopPlaying) {
      // Jeśli już jest zatrzymane, ponownie uruchom funkcję
      location.reload();
    } else {
      location.reload();
    }
  };
  interfaceCreator();
  createLetter("C", 1);
  createLetter("R", 1.449);
  createLetter("R", 2.201);
  createLetter("R", 2.605);
  createLetter("R", 3.353);
  createLetter("V", 3.752);
  createLetter("V", 4.432);
  createLetter("V", 4.885);
  createLetter("C", 5.713);
  createLetter("R", 6.158);
  createLetter("R", 7.003);
  createLetter("R", 7.443);
  createLetter("R", 8.279);
  createLetter("V", 8.703);
  createLetter("V", 9.546);
  createLetter("V", 9.991);
  createLetter("R", 10.902);
  createLetter("V", 11.367);
  createLetter("V", 12.207);
  createLetter("V", 12.627);
  createLetter("V", 13.473);
  createLetter("V", 13.937);
  createLetter("R", 14.639);
  createLetter("R", 15.622);
  createLetter("D", 16.086);
  createLetter("R", 16.545);
  createLetter("R", 17.316);

  createLetter("C", 19.473);
  createLetter("R", 19.942);
  createLetter("R", 20.739);
  createLetter("R", 21.157);
  createLetter("R", 22.033);
  createLetter("V", 22.493);
  createLetter("V", 23.366);
  createLetter("H", 23.864);
  createLetter("R", 24.832);
  createLetter("U", 25.376);
  createLetter("U", 26.214);

  createLetter("U", 26.689);
  createLetter("U", 27.712);
  createLetter("U", 28.242);
  createLetter("U", 29.085);
  createLetter("J", 29.512);
  createLetter("U", 30.433);
  createLetter("J", 30.886);
  createLetter("J", 31.714);
  createLetter("J", 32.189);
  createLetter("J", 33.011);
  createLetter("M", 33.475);
  createLetter("M", 34.366);
  createLetter("M", 35.431);
  createLetter("J", 36.03);
  createLetter("J", 36.545);
  createLetter("U", 37.492);
  createLetter("C", 39.702);
  createLetter("R", 40.514);
  createLetter("V", 40.986);
  createLetter("V", 42.121);
  createLetter("V", 44.085);
  createLetter("R", 44.987);
  createLetter("C", 45.482);
  createLetter("C", 46.505);
  createLetter("C", 48.313);
  createLetter("R", 49.17);
  createLetter("V", 49.635);
  createLetter("V", 50.724);
  createLetter("V", 52.419);
  createLetter("R", 53.262);
  createLetter("C", 53.711);
  createLetter("D", 55.133);
  createLetter("C", 55.586);
  createLetter("S", 56.141);
  createLetter("Q", 57.526);
  createLetter("Q", 58.005);
  setTimeout(function () {
    location.reload();
  }, 63000);

  // Po zakończeniu animacji usuń element z body
  letter.addEventListener("transitionend", function () {
    letter.remove();
  });
});

var playSaintsButton = document.getElementById("saintsPlay");
playSaintsButton.addEventListener("click", function () {
  const playButton = document.getElementById("saintsPlay");
  playButton.style.backgroundColor = "red";
  playButton.textContent = "Zatrzymaj";
  // Obsługa naciśnięcia przycisku "Zatrzymaj"
  playButton.onclick = function () {
    if (stopPlaying) {
      // Jeśli już jest zatrzymane, ponownie uruchom funkcję
      location.reload();
    } else {
      location.reload();
    }
  };
  interfaceCreator();
  createLetter("D", 1.0);
  createLetter("V", 1.676);
  createLetter("B", 2.19);
  createLetter("U", 2.71);
  createLetter("D", 4.028);
  createLetter("V", 4.739);
  createLetter("B", 5.22);
  createLetter("U", 5.672);
  createLetter("D", 7.067);
  createLetter("V", 7.783);
  createLetter("B", 8.252);
  createLetter("U", 8.737);
  createLetter("V", 9.589);
  createLetter("D", 10.421);
  createLetter("V", 11.177);
  createLetter("R", 12.042);
  createLetter("V", 13.872);
  createLetter("V", 14.367);
  createLetter("R", 14.74);

  createLetter("D", 15.265);
  createLetter("D", 16.488);
  createLetter("V", 16.873);
  createLetter("U", 17.707);
  createLetter("U", 18.144);
  createLetter("U", 18.579);

  createLetter("B", 18.965);
  createLetter("B", 20.4);
  createLetter("V", 20.864);
  createLetter("B", 21.394);
  createLetter("U", 21.843);
  createLetter("V", 22.735);
  createLetter("D", 23.513);
  createLetter("R", 24.289);
  createLetter("D", 25.182);
});

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

const stopPlayingHallelujah = () => {
  stopPlaying = true;

  // Anulowanie wszystkich zaplanowanych setTimeout
  timeoutIds.forEach((timeoutId) => {
    clearTimeout(timeoutId);
  });

  // Wyczyszczenie tablicy identyfikatorów
  timeoutIds = [];

  // Przywrócenie pierwotnego stanu przycisku "Posłuchaj"
  const hallelujahListenButton = document.getElementById(
    "hallelujahListenButton"
  );
  hallelujahListenButton.style.backgroundColor = "";
  hallelujahListenButton.textContent = "Posłuchaj";
};

const stopPlayingKotek = () => {
  stopPlaying = true;

  // Anulowanie wszystkich zaplanowanych setTimeout
  timeoutIds.forEach((timeoutId) => {
    clearTimeout(timeoutId);
  });

  // Wyczyszczenie tablicy identyfikatorów
  timeoutIds = [];

  // Przywrócenie pierwotnego stanu przycisku "Posłuchaj"
  const kotekListenButton = document.getElementById("kotekListenButton");
  kotekListenButton.style.backgroundColor = "";
  kotekListenButton.textContent = "Posłuchaj";
};

const stopPlayingSaints = () => {
  stopPlaying = true;

  // Anulowanie wszystkich zaplanowanych setTimeout
  timeoutIds.forEach((timeoutId) => {
    clearTimeout(timeoutId);
  });

  // Wyczyszczenie tablicy identyfikatorów
  timeoutIds = [];

  // Przywrócenie pierwotnego stanu przycisku "Posłuchaj"
  const saintsListenButton = document.getElementById("saintsListenButton");
  saintsListenButton.style.backgroundColor = "";
  saintsListenButton.textContent = "Posłuchaj";
};

const kotekListen = () => {
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
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }, 1000);
  scheduleTimeout(() => {
    playMusic("E4.mp3", "E4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(E4);
  }, 1544);
  scheduleTimeout(() => {
    playMusic("E4.mp3", "E4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(E4);
  }, 2117);
  scheduleTimeout(() => {
    playMusic("F4.mp3", "F4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4);
  }, 2688);
  scheduleTimeout(() => {
    playMusic("D4.mp3", "D4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(D4);
  }, 3289);
  scheduleTimeout(() => {
    playMusic("D4.mp3", "D4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(D4);
  }, 3885);
  scheduleTimeout(() => {
    playMusic("C4.mp3", "C4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(C4);
  }, 4479);
  scheduleTimeout(() => {
    playMusic("E4.mp3", "E4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(E4);
  }, 4873);
  scheduleTimeout(() => {
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }, 5278);
  scheduleTimeout(() => {
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }, 6577);
  scheduleTimeout(() => {
    playMusic("E4.mp3", "E4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(E4);
  }, 7142);
  scheduleTimeout(() => {
    playMusic("E4.mp3", "E4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(E4);
  }, 7728);
  scheduleTimeout(() => {
    playMusic("F4.mp3", "F4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4);
  }, 8288);
  scheduleTimeout(() => {
    playMusic("D4.mp3", "D4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(D4);
  }, 8893);
  scheduleTimeout(() => {
    playMusic("D4.mp3", "D4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(D4);
  }, 9476);
  scheduleTimeout(() => {
    playMusic("C4.mp3", "C4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(C4);
  }, 10092);
  scheduleTimeout(() => {
    playMusic("E4.mp3", "E4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(E4);
  }, 10434);
  scheduleTimeout(() => {
    playMusic("C4.mp3", "C4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(C4);
  }, 10853);

  const kotekListenButton = document.getElementById("kotekListenButton");
  kotekListenButton.style.backgroundColor = "red";
  kotekListenButton.textContent = "Zatrzymaj";

  // Obsługa naciśnięcia przycisku "Zatrzymaj"
  kotekListenButton.onclick = function () {
    if (stopPlaying) {
      // Jeśli już jest zatrzymane, ponownie uruchom funkcję
      kotekListen();
    } else {
      // Jeśli jest w trakcie odtwarzania, zatrzymaj
      stopPlayingKotek();
    }
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      stopPlayingKotek();
    }
  });
};

const saintsListen = () => {
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
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }, 1000);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 1676);
  scheduleTimeout(() => {
    playMusic("C5.mp3", "C5_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(C5);
  }, 2190);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 2710);
  scheduleTimeout(() => {
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }, 4028);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 4739);
  scheduleTimeout(() => {
    playMusic("C5.mp3", "C5_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(C5);
  }, 5220);

  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 5672);
  scheduleTimeout(() => {
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }, 7067);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 7783);
  scheduleTimeout(() => {
    playMusic("C5.mp3", "C5_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(C5);
  }, 8252);

  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 8737);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 9589);
  scheduleTimeout(() => {
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }, 10421);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 11177);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 12042);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 13872);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 14367);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 14740);
  scheduleTimeout(() => {
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }, 15265);
  scheduleTimeout(() => {
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }, 16488);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 16873);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 17707);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 18144);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 18579);
  scheduleTimeout(() => {
    playMusic("C5.mp3", "C5_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(C5);
  }, 18965);
  scheduleTimeout(() => {
    playMusic("C5.mp3", "C5_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(C5);
  }, 20400);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 20864);
  scheduleTimeout(() => {
    playMusic("C5.mp3", "C5_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(C5);
  }, 21394);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 21843);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 22735);
  scheduleTimeout(() => {
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }, 23513);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 24289);
  scheduleTimeout(() => {
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }, 25182);

  const saintsListenButton = document.getElementById("saintsListenButton");
  saintsListenButton.style.backgroundColor = "red";
  saintsListenButton.textContent = "Zatrzymaj";

  // Obsługa naciśnięcia przycisku "Zatrzymaj"
  saintsListenButton.onclick = function () {
    if (stopPlaying) {
      // Jeśli już jest zatrzymane, ponownie uruchom funkcję
      saintsListen();
    } else {
      // Jeśli jest w trakcie odtwarzania, zatrzymaj
      stopPlayingSaints();
    }
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      stopPlayingSaints();
    }
  });
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
  }, 1449);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 2201);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 2605);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 3353);

  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 3752);

  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 4432);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 4885);

  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 5713);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 6158);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 7003);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 7443);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 8279);

  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 8703);

  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 9546);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 9991);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 10902);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 11367);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 12207);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 12627);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 13473);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 13937);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 14639);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 15622);
  scheduleTimeout(() => {
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }, 16086);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 16545);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 17316);

  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 19473);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 19942);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 20739);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 21157);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 22033);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 22493);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 23366);
  scheduleTimeout(() => {
    playMusic("C5SHARP.mp3", "PUSTY_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(C5Sharp);
  }, 23864);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 24832);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 25376);

  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 26214);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 26689);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 27712);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 28242);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 29085);
  scheduleTimeout(() => {
    playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(E5);
  }, 29512);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 30433);
  scheduleTimeout(() => {
    playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(E5);
  }, 30886);
  scheduleTimeout(() => {
    playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(E5);
  }, 31714);
  scheduleTimeout(() => {
    playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(E5);
  }, 32189);
  scheduleTimeout(() => {
    playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(E5);
  }, 33011);
  scheduleTimeout(() => {
    playMusic("F5SHARP.mp3", "F4SHARP_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(F5Sharp);
  }, 33475);
  scheduleTimeout(() => {
    playMusic("F5SHARP.mp3", "F4SHARP_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(F5Sharp);
  }, 34366);
  scheduleTimeout(() => {
    playMusic("F5SHARP.mp3", "F4SHARP_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(F5Sharp);
  }, 35431);
  scheduleTimeout(() => {
    playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(E5);
  }, 36030);
  scheduleTimeout(() => {
    playMusic("E5.mp3", "E4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(E5);
  }, 36545);
  scheduleTimeout(() => {
    playMusic("D5.mp3", "D4_FRONT.webp", "OKTAWA_BACK.webp");
    changeColor(D5);
  }, 37492);
  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 39702);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 40514);

  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 40986);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 42121);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 44085);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 44987);
  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 45482);
  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 46505);
  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 48313);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 49170);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 49635);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 50724);
  scheduleTimeout(() => {
    playMusic("H4.mp3", "H4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(H4);
  }, 52419);
  scheduleTimeout(() => {
    playMusic("A4.mp3", "A4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(A4);
  }, 53262);
  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 53711);
  scheduleTimeout(() => {
    playMusic("G4.mp3", "G4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(G4);
  }, 55133);
  scheduleTimeout(() => {
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(F4Sharp);
  }, 55586);
  scheduleTimeout(() => {
    playMusic("E4.mp3", "E4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(E4);
  }, 56141);
  scheduleTimeout(() => {
    playMusic("D4.mp3", "D4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(D4);
  }, 57526);
  scheduleTimeout(() => {
    playMusic("D4.mp3", "D4_FRONT.webp", "PUSTY_BACK.webp");
    changeColor(D4);
  }, 58005);

  scheduleTimeout(() => {
    stopPlayingFunction();
  }, 61000);

  // Zmiana wyglądu przycisku "Posłuchaj"
  const hallelujahlistenButton = document.getElementById(
    "hallelujahListenButton"
  );
  hallelujahlistenButton.style.backgroundColor = "red";
  hallelujahlistenButton.textContent = "Zatrzymaj";

  // Obsługa naciśnięcia przycisku "Zatrzymaj"
  hallelujahlistenButton.onclick = function () {
    if (stopPlaying) {
      // Jeśli już jest zatrzymane, ponownie uruchom funkcję
      hallelujahListen();
    } else {
      // Jeśli jest w trakcie odtwarzania, zatrzymaj
      stopPlayingHallelujah();
    }
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      stopPlayingHallelujah();
    }
  });
};

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
