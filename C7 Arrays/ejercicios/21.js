console.log(mesesDelAño(['Marzo', 'Diciembre', 'Julio', 'Noviembre']));
function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  var meses=[];
  var cont=0;
  for(var i=0; i<=array.length; i++){

    if(array[i]=="Enero"||array[i]=="Marzo"||array[i]=="Noviembre"){
      meses[cont]=array[i];
      cont++;
      console.log(meses);

    }
  }
  if (meses.length==3){
    return meses;
  }else
  return "No se encontraron los meses pedidos";

}

module.exports = mesesDelAño;
