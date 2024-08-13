var array =[1, 2, 3, 4, 5];
console.log(multiplicarElementosPorIndice(array));


function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var nuevoArreglo=[];
  for(var i=0; i<array.length; i++){
    nuevoArreglo[i] = array[i] * i;
  }

  return nuevoArreglo;
}

module.exports = multiplicarElementosPorIndice;
