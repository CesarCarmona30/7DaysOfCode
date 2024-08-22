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

function addItem(list, item, category) {
  if (list[category]) {
    list[category].push(item);
    alert(`El producto ${item} fue agregado a la lista de compras en la categoría ${category} correctamente.`);
  } else {
    alert('Categoría no válida. Intenta de nuevo.');
  }
}

function deleteItem(list, item, category) {
  if (!list[category] || !list[category].length) {
    let message = !list[category] 
      ? 'Categoría no válida.' 
      : `No hay elementos a eliminar en la categoría ${category}.`;
    alert(message);
    return;
  }

  const index = list[category].indexOf(item);
  
  if (index === -1) {
    alert(`El producto ${item} no se encontró en la categoría ${category}.`);
  } else {
    list[category].splice(index, 1);
    alert(`El producto ${item} fue eliminado de la categoría ${category} correctamente.`);
  }
}

function generateMessage(obj) {
  let message = `Tu lista de compras es la siguiente:`
  for (const [key, value] of Object.entries(obj)) {
    message += `\n  > ${capitalize(key)}:`;
    message += value.length ? value.map(item => `\n    - ${item}`).join('') : ' No hay productos a comprar en esta categoria';
  }

  return message;
}

while (true) {
  let message = "¿Deseas agregar un producto a la lista de compras? (si/no):";
  let item, category, option;

  if (Object.values(shoppingList).some(value => value.length)) {
    message += "\nPara eliminar un producto de la lista de compras, escribe e";
  }
  
  option = prompt(message).toLowerCase();
  
  if (option === 'no') break;
  
  if (option !== 'si' && option !== 'e') {
    alert("Opción no válida, intente de nuevo.");
    continue;
  }
  
  
  if (option === 'si') {
    item = prompt("Introduce el producto que quieres añadir a la lista de compras:");
    category = prompt(`Introduce la categoria a la que pertenece el producto:\n${showCategories(shoppingList)}`).toLowerCase();
    addItem(shoppingList, item, category);
  }

  if (option === 'e') {
    item = prompt("Introduce el producto que quieres eliminar de la lista de compras:");
    category = prompt(`Introduce la categoria a la que pertenece el producto:\n${showCategories(shoppingList)}`).toLowerCase();
    deleteItem(shoppingList, item, category);
  }
} 

alert(generateMessage(shoppingList));
