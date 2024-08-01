function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
var contador = 0;
for (var i=1; i<=numero; i++){


  if(numero%i == 0 ){
    contador = contador+1;
  }


   if(i ==numero && contador ==2){
    return true;
   }   if(i ==numero && contador >=2){
    return false;
   }

}

}

module.exports = esNumeroPrimo;
