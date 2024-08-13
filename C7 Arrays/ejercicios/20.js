
function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
var contador=0;

for (var i=0; i<array.length; i++){
  if(array[0]==array[i]){
    contador = contador +1;
  }
}
if(contador == array.length){
 
  return true;

}else{
  return false;
}
  
}

module.exports = todosIguales;
