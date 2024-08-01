var modulo;
modulo = 21 % 5;
console.log("res "+modulo);

console.log("el tipo de dato es " +esTipoDato(5));
console.log("es numero entero " +esNumeroEntero("n"));
console.log("es numero nulo? " + esNuloOIndefinido());
console.log("es numero nulo? " + tienenMismaLongitud("natha", "juli"));
console.log("aleatorio"+numeroRandom());
console.log("divisible por 3 y 5 "+fizzBuzz(15));
console.log("el residuo es "+(2.5%1));
console.log("mas de 3 digitos"+tieneTresDigitos(196));
console.log("el prodcuto es:"+productoEntreNúmeros(-5, 5));
console.log("el prodcuto es:"+sumarHastaN(5) );
 
console.log("primo?"+esNumeroPrimo(6) );

console.log("potemcia?:"+esPotenciaDeDos(3));


function esTipoDato(valor) {
    // La función recibe un argumento llamado valor.
    // Retorna el tipo de dato de este valor.
    // Por ejemplo: "string", "number", "boolean", "object", etc.
    // Tu código:
    return typeof valor;
    
  }

  function esNumeroEntero(numero) {
    // La función recibe un argumento llamado numero.
    // Verifica si este es un número entero o no.
    // Retorna true si lo es, de lo contrario, retorna false.
    // Por ejemplo: 
    // 24 ---> true 
    // -1212 ---> true 
    // 121.212 ---> false 
    // Tu código:
  if (typeof numero == "number"){
    if (numero%1 == 0){
        console.log("es numero entero "+numero);
      return true;
    }else{
      return false;
    }
  }
  else{
    return false
  }


  
}

function esNuloOIndefinido(valor) {
    // La función recibe un argumento llamado valor.
    // Si este valor es null o undefined, retorna true.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // null ---> true 
    // undefined ---> true 
    // 22 ---> false
    // "texto" ---> false
    // Tu código:

    if (valor == null || valor == "undefined"){
        return true;
    }else{
        return false;
    }
  }

  function tienenMismaLongitud(str1, str2) {
    // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
    // Retorna true si los dos strings tienen la misma longitud.
    // De lo contrario, retorna false.
    // Por ejemplo: 
    // "SoyHenry", "HenrySoy" ---> true 
    // "hi", "there" ---> false 
    // Tu código:

    if (str1.length == str2.length){
        return true;
    }else{
        return false;
    }


module.exports = numeroRandom;

    
    
  }

  // ⛔️ Recuerda que debes utilizar el objeto global "Math".

function numeroRandom() {
    // La función numeroRandom debe generar un número al azar entre 0 y 1 y retornarlo.
    // Tu código:


    return Math.random();
  }
  function tieneTresDigitos(num) {
    // Si el número recibido tiene tres dígitos, retorna true.
    // Caso contrario, retorna false.
    // Tu código:
  if (num>99){
    return true;
  
  }else
  return false;
  
  
  }
  
  function fizzBuzz(num) {
    // Si "num" es divisible entre 3, retorna "fizz".
    // Si "num" es divisible entre 5, retorna "buzz".
    // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
    // De lo contrario, retorna false.
    // Tu código:
  
    if (num%3==0 && num%5==0){
      return "fizzbuzz";
    }else
    if(num%3==0 ){
      return "fizz";
    }
    if(num%5==0 ){
      return "buzz";
    }else
    return false;
  }

  function productoEntreNúmeros(a, b) {
    // Dados dos argumentos "a" y "b", devuelve el producto de todos
    // los números entre a y b (inclusive).
    // Tu código:
    var producto = 1;
    for (var i=a; i<=b; i++ ){
  
      producto = producto *i;
  
      
    }
    return producto;
  }

  function sumarHastaN(n) {
    // La función recibe un número "n" por argumento.
    // Devuelve la suma de todos los números desde 1 hasta n.
    // Tu código:
  var suma =0;
    for (var i=1; i<=n; i++){
      suma = suma+i;
    }
  
  return suma;
  }
  

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
  console.log("numero"+numero);
  console.log("i"+i);

  if(numero%i == 0 ){
    contador = contador+1;
  }

  console.log(""+contador);
   if(i ==numero && contador ==2){
    return true;
   }   if(i ==numero && contador >=2){
    return false;
   }

}

}
  