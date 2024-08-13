/*var listaDeCompras=[];
listaDeCompras[3]= 'tomates';
listaDeCompras[1]= 'lechuga';
console.log(listaDeCompras);
console.log(listaDeCompras[3]);
console.log(listaDeCompras.length);
listaDeCompras.push = ('pepino');
console.log("push "+listaDeCompras);*/

var listaDeCompras=['lechuga', 'tomate'];
listaDeCompras.push('pepino');
listaDeCompras.unshift('piña');
console.log(listaDeCompras);
listaDeCompras.pop();
console.log(listaDeCompras);
listaDeCompras.shift();
console.log(listaDeCompras);
var colores = ["amarillo", "azul","rojo"];
console.log(colores.includes('amarillo'));


//utilizando el metodo every
var numeros =[4,7,9,11];
var cumpleCondicion = numeros.every((num) => {
    return num>7;
})
console.log(""+cumpleCondicion);

//convertir string en un array
var palabra = 'henri';
var palabraSeparada = palabra.split('');
console.log (palabraSeparada);
palabraSeparada.pop();
palabraSeparada.push('y');
console.log (palabraSeparada);

//usando el metodo join
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

//usando metodo forEach para imprimir por separado los elementos de un array
var numeros = [1,2,3,4];
numeros.forEach((num)=> console.log(num)) ;
numeros.forEach((num)=>{
    if (num==3){
        console.log(num);
    }
})

//usando el metodo map que sirve para sumar cada elemento del arreglo
var masUno = numeros.map((num) => {
    return num+1
});
console.log(masUno);

let frutas = ["banano","fresa","pera",]
let pos = frutas.indexOf ("banano");   //devuelve la posicion del nombre del elemento buscado
console.log (pos);
console.log (frutas);

//elimina elemento segun posicion
console.log("utilizando splice los eliminados son:  "+frutas.splice(pos,1));
console.log (frutas);

let vegetales = ["repollo","nabo","rabano","zanahoria"];
console.log("eliminando varias cerduras con splice  "+vegetales.splice(1,2));
console.log("las verduras que quedaron  "+vegetales);

let copiaArray =vegetales.slice();
console.log("copiando array con SLICE "+copiaArray)
