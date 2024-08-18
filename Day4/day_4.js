const rand_value = Math.floor(Math.random() * 11);
let attempt = 1, user_value;

alert("Adivina el número aleatorio entre 0 y 10");

while (attempt <= 3) {
  user_value = prompt("Introduce el número:");
  if (user_value == rand_value) {
    alert("¡Felicidades! Haz acertado el número.");
    break;
  } else if (attempt < 3) {
    alert(`Número incorrecto.
    Te quedan ${3 - attempt} intentos.`);
    attempt += 1;
  } else {
    alert(`No has acertado el número, era ${rand_value}.`)
  }
}