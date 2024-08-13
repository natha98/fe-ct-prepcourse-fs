
var array =['2','1','5'];
console.log(filtrarNumerosPares(array));

function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var cont=0;
  var numerosPares=[];
  for (let i=0; i<array.length;i++){
    if(array[i]%2==0){
     
      numerosPares[cont]=array[i];
      cont= cont +1
    }
  }
return numerosPares;
}

module.exports = filtrarNumerosPares;
