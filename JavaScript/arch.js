//comentario
console.log("Hola chicos");
/*Tipos de datos
undefined, null, boolean, string, symbol(), number y object(estructura)
*/
//Variables
var numero = "Moises";
console.log(numero);

numero = 16;
console.log(numero);

var miNombre = "Moises";
var a;
var b=2;
console.log(a); //Error-undefined
console.log(b);
a = 10;
console.log(a); //si se vera el 10

//Asignar una variable a otra;
var x = 2;
var y = x;
console.log(x);//ambos 2
console.log(y);

var suma = 7 + 12;
console.log(suma);
var resta = 8 - 3;
console.log(resta);
resta = 4-19;
console.log(resta);
var multi = 5*3;
producto = -7 * 4;
console.log(producto);
var divi = 4/2;
console.log(divi);
divi = 18/23;
console.log(divi);
divi = 3 / 0;
console.log(divi); //Infinito el valor
var numdec = 23.4;

var peso = 78.34;

var product2 = 3.4 * 23.3;
console.log(product2);

product2 = 21.2 * 3;
console.log(product2);

product2 = 3.1 * 0;
console.log(product2);

var cociente = 5.0 / 2.0;

cociente = 2.3 / 6.7;
console.log(cociente);

cociente = 4.2 /0.0;
console.log(cociente);//Infinity
var resto = 15 % 5;
console.log(resto);

resto = 5 % 2;
console.log(resto);

//Incrementar una variable

var librosComp = 105;
console.log(librosComp);

// Opción 1
librosComp = librosComp + 1;
console.log(librosComp);
// Opción 2
librosComp++;
console.log(librosComp);

//Reducir el valor de una variable

var numeroEst = 256;

console.log(numeroEst);

numeroEst--;
console.log(numeroEst);

var a = 23;
a += 5; // = a = a+5
console.log(a);


//Asignación resta 
var b = 23;
b -= 5; //= b = b - 5;
console.log(b);

var totalDeuda = 2446;
totalDeuda -= 354;
console.log(totalDeuda);

var c = 23;
c *= 4; //
console.log(c);

var d = 56;
d /= 2;
console.log(d);

var nombre = 'Ximena';
var apellido = "Toledo";

var miCadena = " Soy una cadena de caracteres \"con comillas\" ";
console.log(miCadena);

var miMeta;
miMeta = 'Aprende a programar con \"Ximena\"';
console.log(miMeta);
//Secuencia de escape
/*
Código | Resultado
\'       Comillas simple
\"      Comillas Doble
\\       Barra invertida
\n       Línea Nueva
\r       Retorno de Carro
\t       Tabulation
\b       Retroceso
\f       Salto de pagina 
*/
console.log("Estoy aprendiendo \"JavaScrip\"");
console.log("Estoy aprendiendo \\ JavaScrip");
console.log("Estoy aprendiendo \n JavaScrip");
console.log("Estoy aprendiendo \r JavaScript");
console.log("Estoy aprendiendo \t JavaScript"+"Otra cadena");

var unir = "Arroyo" + "Toledo";
console.log(unir);

var nom1 = "Moisés";
var nom2 = "Ximena";

var y = " y ";
y += nom2;
nom1 += y;
//console.log(nom1 + y + nom2);
console.log(nom1);

//Operación de longitud de una cadena
var unaCadena;
unaCadena = "Rodríguez";

console.log(unaCadena.length);//Tamaño de la cadena

var programming = "JavaScript";
/*
Cadena:  J a v a S c r i p t
índices: 0 1 2 3 4 5 6 7 8 9 
*/
console.log(programming[3]);
//Inmutabilidad de las cadenas

var cadena2 = "jola, Mundo";

console.log(cadena2);
cadena2 = "Hola mundo"; 
console.log(cadena2);
//Enésimo carácter
console.log(programming[0]);
console.log(programming[1]);
console.log(programming[2]);
console.log(programming[3]);
console.log(programming[4]);
console.log(programming[10]); // Undefined
console.log(programming[-2]); //undefined
console.log(programming[5.6]); //undefined

//Notación de corchetes ultimo carácter

var otraCadena;

/*
El indice siempre es longitud -1 por que comenzamos a contar desde 0
JavaScript -> 10 = 10-1 = 9 es el índice final
*/
otraCadena="python";
console.log(otraCadena[otraCadena.length-1]);

var miCadena2;

/*El penúltimo indice es longitud -2

*/
miCadena2 = "Python";
n = 3;
console.log(miCadena2[miCadena2.length-n]);

//PALABRAS EN BLANCO

var palabrasEnBlanco;

var miSustantivo = "perro"
var miAdjetivo = "negro";
var miVerbo = "corrió";
var miAdverbio = "rápidamente";

var palabrasEnBlanco = "El"+miSustantivo+" "+miAdjetivo+" "+miVerbo+" "+miAdverbio;
console.log(palabrasEnBlanco);

/*El ultimo indice siempre es longitud -1
no arrojara el valor de "t" */ 

miCadena3 = "JavaScript";
console.log(miCadena3[miCadena3.length -1 ]);

/*Estrucuturas arrays*/

var miArreglo = ["John", 24];
console.log(miArreglo);

var estudiantes = ["Moisés", "Ximena"];
console.log(estudiantes);

var notas=[98, 100, 32, 34, 124];
console.log(notas);

 /*Los arreglos en java scrip pueden tener cualquier tipo de dato*/

 var listaEstu=[["Moises", 10],["Ximena", 10]];
 console.log(listaEstu);

 listaDePrecios[["Camisa",34],["Jeans", 89],["Blusa", 56], ["T-shirt", 23]];
console.log(listaDePrecios);
var datos=[[3.4, 5.6, 6.2],[3,6,1,2], [7,7,3]];
console.log(datos);

var miArreglo = [10, 20, 30];
/*
Indices 0, 1, 2
*/
console.log(miArreglo[1]);

var suma1 = miArreglo[0]+miArreglo[1]+miArreglo[2];
console.log(suma1); 
var miArreglo3 = [10, 20, 30];
miArreglo3[0] = "Hola";
miArreglo3[1] = [1, 2, 3];
miArreglo3[2] = 34;
console.log(miArreglo3);

//Acceder a arreglos multidimensionales

var miArreglo2 = [[1, 2, 3],[4, 5, 6], [7,8,9]];

/*
Indices Internos: 
*/
console.log(miArreglo2[0]); //1 , 2, 3
console.log(miArreglo2[1][2]); // 6
console.log(miArreglo2[1][0]); // 4

//Push

var estaciones = ["Invierno", "otoño", "Primavera"];
var estación;
estaciones.push("Verano"); //Añade al final de la lista;

console.log(estaciones);

estación=estaciones.pop(); //Remueve el ultimo elemento de un arreglo
console.log(estaciones);
console.log(estación);

estaciones.shift(); //añade al final

console.log(estaciones);

estaciones.unshift("Verano"); //Agregar al principio del arreglo
console.log(estaciones);

/*Lista de compras*/
var miListaCompras = [["Cereal", 3],["Manzanas", 2],["galletas", 4]];

console.log("Voy a comprar" + miListaCompras[0][0] +"unidades de" + miListaCompras[0][1]+ ".");

console.log("Voy a comprar" + miListaCompras[1][0] +"unidades de" + miListaCompras[1][1]+ ".");


// Funciones

function mostrarMensaje()
{   console.log("¡Hola Mundo!");

}
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();

// Argumentos
function sumar3(num1, num2)
{   var suma = num1+ num2;
    console.log("El resultado de: "+a +"+"+ b+"="+suma);
}
sumar3(3, 2);
var a, b;
a = 2;
b = 10;
sumar3(a, b);

function concatenar(cadena1, cadena2, cadena3)
{   console.log(cadena1 + " "+ cadena2 +"cadena3" );
}

concatenar("Estoy", "Aprendiendo", "a programar");
var miVarGlo=5;
console.log(miVarGlo);

function miFuncion()
{
    console.log(miVarGlo);
}
miFuncion();
console.log(miVarGlo);

// Ámbito Local

function miFuncion1()
{
    var miVariableLocal = 4;
    console.log(miVariableLocal);
}
miFuncion1();

var miNombre = "Xime";

function mostraMinombre()
{
    var miNombre = "Moi";
    console.log(miNombre);
}
mostraMinombre();
console.log(miNombre);

// Retornar valor
function sumar5(a, b)
{   return a + b;   }

console.log(sumar5(a, b));
var resultado = sumar5(5, 3);
console.log(resultado);
function suma4(a, b)
{   console.log(a+b);
    return a + b;
}
console.log(suma4(5, 3)); //Undefined if not return

// Salida 8, 8

function crearCadenaConMeta(lenguajePro)
{   return "Mi meta es aprender" + lenguajePro; }
var miMeta=crearCadenaConMeta("JavaScript");
console.log(miMeta);

// Permanecer
/* Proximo en la Fila
En informática una cola(queue) es una estructura de datos abstracta en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se reiteran del principio de la cola.

Define una función proximoEnLaFila que tome un arreglo(arreglo)y un numero(elemento) como argumentos. Agrega el número al final del arreglo y luego elimina el primer elemento del arreglo. La función proximoEnLaFinal debe retornar el elemento que fue removido.
*/

function proximoEnLaFila(arr, elem)
{   arr.push(elem); //Agregar al final del arreglo
    arr.shift(); //Remover el primer elemento.

}

var arreglo3 = [1,2,3,4,5];

console.log("Antes: "+ JSON.stringify(arreglo3));
// Función para mostrar los arreglos en consola
console.log(proximoEnLaFila(arreglo3, 6)); 
console.log("Después: "+ JSON.stringify(arreglo3));

//Boleanos

console.log(true); //Únicas manera de como se escribe, NO True or False, todo en minúsculas
console.log(false);

//Operador de igualdad

console.log( 5 == 5 ); //true
console.log( 6 == 5 ); //false
console.log("Hola"=="Hola") //true
console.log("Hola"=="Hola1") //false
console.log([1, 2, 3] == [1, 2, 3]); //false
//No compara arreglos
