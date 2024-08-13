
console.log(breakStatement(-2));

function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:

  var  bucle = [];
  var contador = num;
  for(var i =0; i<10;i++){
    contador = contador+2;
    bucle[i]=contador
    
    if(contador == i){
     break;
    }
  }

if(contador ==i){
  return "Se interrumpió la ejecución";
}else{
  return bucle;
}
}

module.exports = breakStatement;
