

function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
 var palabraInvertida;
 palabraInvertida=((texto.split('')).reverse()).join('');


  return palabraInvertida;
}

module.exports = invertirTexto;
