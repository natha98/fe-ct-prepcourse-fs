
//console.log(esArrayNoVacio([2,5,7]));
function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:

  if(arr.length>=1 && Array.isArray(arr)== true){
    
 return true
}else

return false;
}

module.exports = esArrayNoVacio;