function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  var arrayInvertido=[];
  console.log("cual es el length "+array.length);
  
  for(let i = 0; i < array.length; i++ ){
   
        arrayInvertido[i]= array[array.length-i-1];
  }
  return arrayInvertido;
}

module.exports = invertirArray;
