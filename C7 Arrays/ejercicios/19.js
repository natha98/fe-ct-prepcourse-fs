
console.log(multiplicarArgumentos(1,2,3));

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  var multiplicacion =1;
  console.log("son "+arguments.length);
  if (arguments.length ==0){
    return 0;
  }
  if (arguments.length ===1){
    return arguments[0];

  
  }if (arguments.length>1){
console.log("se cumplio la condicion")
    for(var i =0; i<arguments.length; i++){
      multiplicacion = multiplicacion*arguments[i];
      console.log(multiplicacion)
    }
    return multiplicacion;

  
  }
}

module.exports = multiplicarArgumentos;
