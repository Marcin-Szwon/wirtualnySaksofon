function stopMusic() {
  audio.pause();
  audio.currentTime = 0;
}

function playMusic(nuta, srcFront, srcBack) {
  console.log(nuta);
  front.src = `images/sax/${srcFront}`;
  back.src = `images/sax/${srcBack}`;
  audio.pause();
  audio.src = `sound/${nuta}`;
  audio.play();
}
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

graj.addEventListener("click", function () {
  playMusic("A3SHARP.mp3", "A3SHARP_FRONT.png", "PUSTY_BACK.png");
  changeColor(A3Sharp);

  // changeColor(this);

  setTimeout(function () {
    playMusic("A3SHARP.mp3", "A3SHARP_FRONT.png", "PUSTY_BACK.png");
    changeColor(A3Sharp);
  }, 2000);
});

// setTimeout(function () {
//   front.src = `images/sax/A3SHARP_FRONT.png`;
//   back.src = `images/sax/PUSTY_BACK.png`;
//   audio.pause();
//   audio.src = `sound/A3SHARP.mp3`;
//   audio.play();
// }, 2000);
// A3-H3

A3Sharp.addEventListener("click", function () {
  playMusic("A3SHARP.mp3", "A3SHARP_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "t" || event.key === "T") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("A3SHARP.mp3", "A3SHARP_FRONT.png", "PUSTY_BACK.png");
    changeColor(A3Sharp);
  }
});

H3.addEventListener("click", function () {
  playMusic("H3.mp3", "H3_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "y" || event.key === "Y") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("H3.mp3", "H3_FRONT.png", "PUSTY_BACK.png");
    changeColor(H3);
  }
});

// C4-H4

C4.addEventListener("click", function () {
  playMusic("C4.mp3", "C4_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "z" || event.key === "Z") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("C4.mp3", "C4_FRONT.png", "PUSTY_BACK.png");
    changeColor(C4);
  }
});

C4Sharp.addEventListener("click", function () {
  playMusic("C4SHARP.mp3", "C4SHARP_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("C4SHARP.mp3", "C4SHARP_FRONT.png", "PUSTY_BACK.png");
    changeColor(C4Sharp);
  }
});

D4.addEventListener("click", function () {
  playMusic("D4.mp3", "D4_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "Q") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("D4.mp3", "D4_FRONT.png", "PUSTY_BACK.png");
    changeColor(D4);
  }
});

D4Sharp.addEventListener("click", function () {
  playMusic("D4SHARP.mp3", "D4SHARP_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "w" || event.key === "W") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("D4SHARP.mp3", "D4SHARP_FRONT.png", "PUSTY_BACK.png");
    changeColor(D4Sharp);
  }
});

E4.addEventListener("click", function () {
  playMusic("E4.mp3", "E4_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "s" || event.key === "S") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("E4.mp3", "E4_FRONT.png", "PUSTY_BACK.png");
    changeColor(E4);
  }
});

F4.addEventListener("click", function () {
  playMusic("F4.mp3", "F4_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "x" || event.key === "X") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("F4.mp3", "F4_FRONT.png", "PUSTY_BACK.png");
    changeColor(F4);
  }
});

F4Sharp.addEventListener("click", function () {
  playMusic("F4SHARP.mp3", "F4SHARP_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "c" || event.key === "C") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("F4SHARP.mp3", "F4SHARP_FRONT.png", "PUSTY_BACK.png");
    changeColor(F4Sharp);
  }
});

G4.addEventListener("click", function () {
  playMusic("G4.mp3", "G4_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "d" || event.key === "D") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("G4.mp3", "G4_FRONT.png", "PUSTY_BACK.png");
    changeColor(G4);
  }
});

G4Sharp.addEventListener("click", function () {
  playMusic("G4SHARP.mp3", "G4SHARP_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "e" || event.key === "E") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("G4SHARP.mp3", "G4SHARP_FRONT.png", "PUSTY_BACK.png");
    changeColor(G4Sharp);
  }
});

A4.addEventListener("click", function () {
  playMusic("A4.mp3", "A4_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "r" || event.key === "R") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("A4.mp3", "A4_FRONT.png", "PUSTY_BACK.png");
    changeColor(A4);
  }
});

A4Sharp.addEventListener("click", function () {
  playMusic("A4SHARP.mp3", "A4SHARP_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "f" || event.key === "F") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("A4SHARP.mp3", "A4SHARP_FRONT.png", "PUSTY_BACK.png");
    changeColor(A4Sharp);
  }
});

H4.addEventListener("click", function () {
  playMusic("H4.mp3", "H4_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "v" || event.key === "V") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("H4.mp3", "H4_FRONT.png", "PUSTY_BACK.png");
    changeColor(H4);
  }
});

// C5-H5

C5.addEventListener("click", function () {
  playMusic("C5.mp3", "C5_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "b" || event.key === "B") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("C5.mp3", "C5_FRONT.png", "PUSTY_BACK.png");
    changeColor(C5);
  }
});

C5Sharp.addEventListener("click", function () {
  playMusic("C5SHARP.mp3", "PUSTY_FRONT.png", "PUSTY_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "h" || event.key === "H") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("C5SHARP.mp3", "PUSTY_FRONT.png", "PUSTY_BACK.png");
    changeColor(C5Sharp);
  }
});

D5.addEventListener("click", function () {
  playMusic("D5.mp3", "D4_FRONT.png", "OKTAWA_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "u" || event.key === "U") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("D5.mp3", "D4_FRONT.png", "OKTAWA_BACK.png");
    changeColor(D5);
  }
});

D5Sharp.addEventListener("click", function () {
  playMusic("D5SHARP.mp3", "D4SHARP_FRONT.png", "OKTAWA_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "i" || event.key === "I") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("D5SHARP.mp3", "D4SHARP_FRONT.png", "OKTAWA_BACK.png");
    changeColor(D5Sharp);
  }
});

E5.addEventListener("click", function () {
  playMusic("E5.mp3", "E4_FRONT.png", "OKTAWA_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "j" || event.key === "J") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("E5.mp3", "E4_FRONT.png", "OKTAWA_BACK.png");
    changeColor(E5);
  }
});

F5.addEventListener("click", function () {
  playMusic("F5.mp3", "F4_FRONT.png", "OKTAWA_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "n" || event.key === "N") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("F5.mp3", "F4_FRONT.png", "OKTAWA_BACK.png");
    changeColor(F5);
  }
});

F5Sharp.addEventListener("click", function () {
  playMusic("F5SHARP.mp3", "F4SHARP_FRONT.png", "OKTAWA_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "m" || event.key === "M") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("F5SHARP.mp3", "F4SHARP_FRONT.png", "OKTAWA_BACK.png");
    changeColor(F5Sharp);
  }
});

G5.addEventListener("click", function () {
  playMusic("G5.mp3", "G4_FRONT.png", "OKTAWA_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "k" || event.key === "K") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("G5.mp3", "G4_FRONT.png", "OKTAWA_BACK.png");
    changeColor(G5);
  }
});

G5Sharp.addEventListener("click", function () {
  playMusic("G5SHARP.mp3", "G4SHARP_FRONT.png", "OKTAWA_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "o" || event.key === "O") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("G5SHARP.mp3", "G4SHARP_FRONT.png", "OKTAWA_BACK.png");
    changeColor(G5Sharp);
  }
});

A5.addEventListener("click", function () {
  playMusic("A5.mp3", "A4_FRONT.png", "OKTAWA_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "p" || event.key === "P") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("A5.mp3", "A4_FRONT.png", "OKTAWA_BACK.png");
    changeColor(A5);
  }
});

A5Sharp.addEventListener("click", function () {
  playMusic("A5SHARP.mp3", "A4SHARP_FRONT.png", "OKTAWA_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "l" || event.key === "L") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("A5SHARP.mp3", "A4SHARP_FRONT.png", "OKTAWA_BACK.png");
    changeColor(A5Sharp);
  }
});

H5.addEventListener("click", function () {
  playMusic("H5.mp3", "H4_FRONT.png", "OKTAWA_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "," || event.key === "<") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("H5.mp3", "H4_FRONT.png", "OKTAWA_BACK.png");
    changeColor(H5);
  }
});

// C6-F6

C6.addEventListener("click", function () {
  playMusic("C6.mp3", "C5_FRONT.png", "OKTAWA_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "." || event.key === ">") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("C6.mp3", "C5_FRONT.png", "OKTAWA_BACK.png");
    changeColor(C6);
  }
});

C6Sharp.addEventListener("click", function () {
  playMusic("C6SHARP.mp3", "PUSTY_FRONT.png", "OKTAWA_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === ";" || event.key === ":") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("C6SHARP.mp3", "PUSTY_FRONT.png", "OKTAWA_BACK.png");
    changeColor(C6Sharp);
  }
});

D6.addEventListener("click", function () {
  playMusic("D6.mp3", "PUSTY_FRONT.png", "D6_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "[" || event.key === "{") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("D6.mp3", "PUSTY_FRONT.png", "D6_BACK.png");
    changeColor(D6);
  }
});

D6Sharp.addEventListener("click", function () {
  playMusic("D6SHARP.mp3", "PUSTY_FRONT.png", "D6SHARP_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "]" || event.key === "}") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("D6SHARP.mp3", "PUSTY_FRONT.png", "D6SHARP_BACK.png");
    changeColor(D6Sharp);
  }
});

E6.addEventListener("click", function () {
  playMusic("E6.mp3", "E6_FRONT.png", "E6_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "'" || event.key === "'") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("E6.mp3", "E6_FRONT.png", "E6_BACK.png");
    changeColor(E6);
  }
});

F6.addEventListener("click", function () {
  playMusic("F6.mp3", "E6_FRONT.png", "F6_BACK.png");
  changeColor(this);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "/" || event.key === "?") {
    // Tutaj umieść kod, który zostanie wykonany po wciśnięciu klawisza "G"
    playMusic("F6.mp3", "E6_FRONT.png", "F6_BACK.png");
    changeColor(F6);
  }
});
