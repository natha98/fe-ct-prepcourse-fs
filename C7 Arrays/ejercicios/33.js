
console.log(combine("a", "12", "xyz"));
function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:

  var tamaño =[];
  var combine=[];
  


 var array1 =str1.split('');

  
  var array2 =str2.split('');
  var array3 =str3.split('');
  console.log(array3.length);

  if(array1.length>=array2.length && array1.length>=array3.length){

    tamaño=array1.length;
  }
  if(array2.length>=array1.length && array2.length>=array3.length){
    
    tamaño=array2.length;
  }
  if(array3.length>=array1.length && array3.length>=array2.length){
  
    tamaño=array3.length;
  }

  for(var i=0; i<tamaño;i++){
    combine[i]="";
    if(array1.length >i){
      combine[i]=combine[i]+array1[i];
  }

   if(array2.length >i){
    combine[i]=combine[i]+array2[i];
}

    if(array3.length >i){
   combine[i]=combine[i]+array3[i];
}
  }
  return combine.join('');

}

module.exports = combine;