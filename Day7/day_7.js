const add = (value1, value2) => value1 + value2;
const subtract = (value1, value2) => value1 - value2;
const mult = (value1, value2) => value1 * value2;
const divide = (value1, value2) => value1 / value2;

let num1, num2, operation, result;

do {
  operation = prompt('Ingrese la operación a realizar: \nsuma\nresta\nmultiplicacion\ndivision\nsalir').toLowerCase();

  if (operation === 'salir') break;
  if (operation !== 'suma' && operation !== 'resta' && operation !== 'multiplicacion' && operation !== 'division') {
    alert('Operación no válida, intente nuevamente');
    continue;
  }

  num1 = parseFloat(prompt('Ingrese el valor del primer número:'));
  num2 = parseFloat(prompt('Ingrese el valor del segundo número:'));

  if (isNaN(num1) || isNaN(num2)) {
    alert('Uno o dos valores no son números válidos, intente de nuevo');
    continue;
  }

  switch (operation) {
    case 'suma':
      result = add(num1, num2);
      break;
    case 'resta':
      result = subtract(num1, num2);
      break;
    case 'multiplicacion':
      result = mult(num1, num2);
      break;
    case 'division':
      if (num2 === 0) {
        alert('No se puede dividir por 0');
        continue;
      }
      result = divide(num1, num2);
      break;
  }

  alert(`El resultado de la ${operation} entre ${num1} y ${num2} es ${result}`)
} while (true)