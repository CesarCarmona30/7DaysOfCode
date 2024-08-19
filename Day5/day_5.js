let shoppingList = {
  "verduras": [],
  "frutas": [],
  "lacteos": [],
  "animal": [],
  "aseo": [],
  "enlatados": [],
  "dulces": [],
  "otros": []
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function showCategories(obj) {
  return Object.keys(obj)
    .map(key => `\n- ${capitalize(key)}`)
    .join('');
}

function addItemToList(list, item, category) {
  if (list[category]) {
    list[category].push(itme);
    alert(`El producto ${item} fue agregado a la lista de compras en la categoría ${category} correctamente.`);
  } else {
    alert('Categoría no válida. Intenta de nuevo.');
  }
}

function generateMessage(obj) {
  let message = `Tu lista de compras es la siguiente:`
  for (const [key, value] of Object.entries(obj)) {
    message += `\n  > ${capitalize(key)}:`;
    message += addItemToList.length ? value.map(item => `\n    - ${item}`).join('') : 'No hay productos a comprar en esta categoria';
  }

  return message;
}

while (true) {
  let option = prompt("¿Deseas agregar un producto a la lista de compras? (si/no):").toLowerCase();
  if (option === 'no') break;
  if (option !== 'si') {
    alert("Opción no válida, intente de nuevo.");
    continue
  } 
  
  let item = prompt("Introduce el producto que quieres añadir a la lista de compras:");
  let category = prompt(`Introduce la categoria a la que pertenece el producto:\n${showCategories(shoppingList)}`).toLowerCase();

  addItemToList(obj, item, category);  
} 

alert(generateMessage(shoppingList))