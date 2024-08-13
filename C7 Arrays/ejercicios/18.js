function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var sumaArreglo=0;
  for(let i=0; i<resultadosTest.length; i++){
    sumaArreglo = sumaArreglo + resultadosTest[i];
  }
  return sumaArreglo/resultadosTest.length;
}

module.exports = promedioResultadosTest;
