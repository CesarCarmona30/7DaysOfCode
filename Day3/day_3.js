let layer = "", technology = "", languages = [], option;

do {
  layer = prompt("¿Quieres seguir hacia el área de Frontend o Backend?:");
  if (layer == "Frontend") {
    technology = prompt("¿Quieres aprender React o Vue?:");
  } else if (layer == "Backend") {
    technology = prompt("¿Quieres aprender C# o Java?:");
  } else {
    alert("No ingresaste una opción correcta")
    layer = ""
  }
} while (!layer)

while (true) {
  option = prompt(
    `¿Quieres especializarte en el área elegida o desarrollarte en el área Fullstack?
    \n1.- Área elegida.
    \n2.- Fullstack`);
  if (option == 1) {
    alert(
      `¡Muy bien! Sigue especializandote en ${technology}, 
      para dominar los temas necesarios
      y profundizar más en el desarrollo ${layer}`);
    break;
  } else if(layer == 2) {
    alert(
      `¡Excelente decisión! Es momento de aprender otras tecnologías además de ${technology}, 
      para dominar las habilidades necesarias y adentrarte en el desarrollo ${layer}`);
    break;
  } else {
    alert("Opción no válida, intenta de nuevo.")
  }
} 

while (true) {
  option = prompt("¿Te interesa aprender otra tecnología?\n1.- Si.\n2.- No.")
  if (option == 1) {
    languages.push(prompt("¿Cuál tecnología?:"))
  } else {
    break;   
  }
}

let message = "Las tecnologías que quieres aprender son: {"

languages.forEach(language => {
  message += `\n  - ${language}`
});

alert(`${message}\n}`)