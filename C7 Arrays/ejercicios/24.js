console.log(continueStatement(2));
function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

  var  bucle = [];
  var contador = num;
  var j=0;
  for(var i =0; i<10;i++){
    if(i == 5){
      continue;
     }else{
      
    contador = contador+2;
    console.log("entro"+i);
    bucle[j]=contador
    j=j+1;
     }
     
  }


  return bucle;

}

module.exports = continueStatement;
