

function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
 
  var numeroGrande = array[0];
  for (var i=0; i<array.length; i++){
    if(array[i]>numeroGrande){
    
  
      numeroGrande = array[i];
    }
  }

  if(array.length==0){
  return 0;
  }
  else{
  return array.indexOf(numeroGrande);
  }
}

module.exports = encontrarIndiceMayor;
