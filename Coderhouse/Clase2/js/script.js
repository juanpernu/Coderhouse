/*
var str1 = prompt('Ingrese el primer número');
var str2 = prompt('Ingrese el segundo número');

var num1 = Number(str1);
var num2 = Number(str2);

/// NEGACION DE CONDICION
if (!(num1 > num2)) {
  alert("El primer dato es mayor que el segundo");
} else {
  console.log("El primer dato es menor o igual que el segundo");
}
*/

/*
var nombre = "Roberto Carlos";

if (nombre !== "Roberto Carlos") {
  alert("Hola desconocido, como andas?");
} else {
  alert("Raja de acá Robert, traeme a Roberto");
}
*/

/*
var valor1 = 55;
var valor2 = 55;
var nombre = "Pachorra";

if (valor1 > valor2 && nombre === "Pachorra") {
  console.log("El primer valor es mayor que el segundo");
} else if (valor1 === valor2) {
  console.log("Los valores son iguales");
  } else {
  console.log("El segundo es el mayor");
}
*/

/*
//////// SWITCH ////////

var animal = "gato";

switch(animal){
  case 'perro':
    console.log('El animal es un perro');
    break;

  case 'gato':
    console.log('El animal es un gato');
    break;

  default:
    console.log('Ni idea');
    break;
}
*/

/*
//////// ARRAYS ////////

var esquipoGenial = 'Cebollitas';
var esquiposDeFutbol = ['Boca', esquipoGenial,'Racing','River','Temperley'];
console.log(esquiposDeFutbol[1]);
*/



/*
/////// CICLOS ///////

var valor = prompt('Ingrese un valor');

var maximo = Number(valor);

for (var i = 0; i < 5; i++) {
  var valor2 = Number(prompt('Ingrese otro valor'));

  console.log('Estamos en la vuelta ' + i);

  if (valor2 > maximo) {
    maximo = valor2;
  };
}
*/

/*
/////// CICLOS EN ARRAY ///////

var politicos = ['Macri', 'Cristina', 'Moyano', 'Lilita'];

for (var i = 0; i < politicos.length; i++) {
  console.log(politicos[i]);
}
*/

var semana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

for (var i = 0; i < semana.length; i++) {

  if (semana[i] == 'Sabado') {
    console.log('Es sabado, fiesta!');
  } else if (semana[i] == 'Domingo') {
    console.log('Es domingo y mañana se labura :(');
  }
}


