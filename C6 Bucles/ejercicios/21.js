function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var i=0;
  while (i<=numero){
    i=i+1;

   if (Math.pow (2,i)==numero){
   return true;
   }

   if (i==numero){
    return false;
   }
  
  }
}

module.exports = esPotenciaDeDos;
