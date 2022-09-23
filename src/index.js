import "./styles.css";

let scorep1 = 0;
let scorep2 = 0;
let stop = true;

while (stop) {
  let p1 = Number(prompt("Player 1: masukan angka"));
  let p2 = Number(prompt("Player 2: masukan angka"));

  let random = getRandom();
  let ulangi = game(p1, p2);
  if (!ulangi) {
    stop = window.confirm("Ulangi?");
  } else {
    if (p1 !== random && p2 !== random) {
      alert("Tidak ada yang benar. hasil seri");
    } else {
      if (p1 === random) {
        alert("player 1 menang");
      }
      if (p2 === random) {
        alert("player 2 menang");
      }
    }
    alert(`Nilai yang dicari: ${random}
    - Player 1: ${scorep1}
    - Player 2: ${scorep1}`);
  }
}

function game(player1, player2) {
  if (player1 === player2) {
    alert("tebakan tidak boleh sama");
    return false;
  } else if (player1 < 1 || player2 < 1) {
    alert("tebakan tidak boleh lebih kecil dari 1");
    return false;
  } else if (player1 > 3 || player2 > 3) {
    alert("tebakan tidak boleh lebih besar dari 3");
    return false;
  }
  return true;
}

function getRandom() {
  const range = [1, 2, 3];
  let isNotRandom = true;
  while (isNotRandom) {
    let random = Math.floor(Math.random() * 10);
    let ketemu = range.find((r) => r === random);
    if (ketemu) {
      isNotRandom = false;
      return random;
    }
  }
}
