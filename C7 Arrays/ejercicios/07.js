
console.log(ordenarArray(['a','f','d']));
function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  console.log(typeof array[0]);

  if(typeof array[0]=='number'){
  return array.sort(function(a, b){return a - b}); // --> 3, 12, 23
  }
  else{
    return array.sort();
  }
}

module.exports = ordenarArray; 
