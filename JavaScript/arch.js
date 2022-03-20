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
console.log(miCadena2[miCadena2.length-2]);

