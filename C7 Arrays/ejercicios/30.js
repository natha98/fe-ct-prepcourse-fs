

function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
 
var repetido=0;

for(var i =0; i<numeros.length;i++){
  for (var j=0; j<numeros.length; j++){

    
    if(numeros[i]==numeros[j]){
      repetido=repetido+1;


      if(j<=numeros.length && repetido>=2){
        
        return numeros[i];
      
      }
    }
    if(j==(numeros.length-1) && repetido<=2){

      repetido=0;
      
    
    }
  }

}

if (repetido ==0){
  return undefined;
}else{
return repetido;
}
}
module.exports = encontrarElementoRepetido;