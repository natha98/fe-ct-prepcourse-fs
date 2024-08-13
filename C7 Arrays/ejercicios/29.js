
console.log(encontrarNumeroFaltante([2,3,5]));

function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  console.log(numeros);
  var contador=numeros[0];
  var faltante=0;


  if(numeros.length==0){
    return null;
  }
    else{
  for(var i=0; i<numeros.length;i++){
    

    if(numeros[i]!=contador){
      faltante = contador;
      break;
    }else
    contador=contador+1;
  }
  
  }
  if(faltante==0){
    return null;
  }
  else{
  return faltante;
  }

}

module.exports = encontrarNumeroFaltante;