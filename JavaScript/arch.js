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

//Operador de igualdad estricta
console.log(9==9); //true
console.log(9=="9"); //true
console.log(9 === "9") //false
console.log(9===9); //true

var a1;
var b1;

a1 = 5;
b1 = 5;

console.log(a == b); //true
console.log(a===b); //true
b1=8;
console.log(a == b); //false
console.log(a===b); //false
b = "5"
console.log(a == b); //true
console.log(a===b); //false


a = "JavaScript";
b = "JavaScript";

console.log(a == b); //true
console.log(a===b); //true

//Operador de desigualdad

console.log(9 != 6); //true
console.log(9 != 9); //false
console.log("JavaScript" != "JavaScript"); //false
console.log([1,2,3] != [1,2,3]); //true porque son diferentes por la posicion de memoria en el arreglo por lo tanto como reusltado da un verdadero son dif.
 

//Operador de desigualdad estricta

console.log(1 != "1"); //false
console.log(1 !== "1"); //true

//Operador mayor que
console.log(6>5);//true
console.log(3>10); //false
console.log("B">"A"); //True, compara cadenas por la posicion en su
console.log("ACB"> "ABC"); //compara letra por letra para averigaur cual es el dato mayor C>B
console.log("AB">"A");//True
console.log("Mundo">"Hola"); //Tienen mas caracteres, es mayor
console.log("A">"a");//false
console.log("a">"A");//true

//Mayor o igual que
console.log( 5 > 5 ); // false
console.log(5>=5); //true
console.log(6>=5); //true
console.log(4>=5); //false

//operador menor que

console.log( 5 < 5 ); // false
console.log(5<=5); //true
console.log(6<=5); //false
console.log(4<=5); //true
console.log(10<3); //false
console.log("A"<"B"); //true
console.log("ABC"<"ACB"); //true

var a = 15;
var b = 7;

console.log(a>=b); //true
console.log(a<=b); // false
console.log(a>b); //true
console.log(a<b); // false

//operador lógico

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
var a2=9;
console.log((a2>5)&&(a2<10)); //true
a2=3
console.log((a2>5)&&(a2<10)); //false

//Operador logico OR

/* |X|Y| X|Y
    T|T| T
    T|F| T
    F|T| T
    F|F| F
*/
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log((a2>5)||(a2<10)); //true
a2=23
console.log((a2<5)||(a2<=15)); //true

//operador lógico not

console.log();

console.log(!true);
console.log(!false);
var a = 8;
console.log(!(a > 5)); //false, no dejar un espacio entre parentesis y !
console.log(!(a<5)); //true

//condicionales
 var x = 5;
if(true)
{   console.log("la condicion es verdadera");
}
if(x>2 && x < 10)
{
    console.log("la condicion es verdadera");    
}
var estacion1 = "Verano";
if(estacion1 == "Verano")
{
    console.log("si es verano");
}
console.log("despues del condicional");


//Clausula Else

if(false){   
    console.log("La condion es verd");
}
else{
    console.log("es falsa"); 
}
var y=1;
if(y<2)
{
    console.log("verdadera");
}
else{
    console.log("falso");
}
//IF ELSE

function clasificarValor(valor1)
{   if(valor1 % 2==0)
    {
        console.log("Divisible entre 2.");
    }
    else if(valor %3 ==0)
    {
        console.log("es divisible entre 3");
    }    
    else{
        console.log("No es divisible");
    }
}
clasificarValor(2);
clasificarValor(3);
clasificarValor(6);
clasificarValor(5);

//condicionales de orden lógico

function clasificarValor1(valor2)
{
    if((valor2 < 5)||(valor2 <10))
    {
        console.log("Menor que 5.");
    }
    else{
        console.log("Mayor o igual a 10");
    }
}
function interpretarIMC(indiceDeMasaCorporal)
{   if(indiceDeMasaCorporal<18.5 )
    {   console.log("Bajo Peso");
    }
    else if(indiceDeMasaCorporal<=24.9)
    {   console.log("Normal");
    }
    else if(indiceDeMasaCorporal <=29.9)
    {   console.log("Soprepeso");
    }
    else
    {   console.log("Obeso");
    }
}
interpretarIMC(17);
interpretarIMC(22);
interpretarIMC(28);
interpretarIMC(32);

//Código de Golf

/* 
En el juego de gold cada hoyo tiene un par que representa
el numero de promedio de golpes que se spera que haga un golfista para 
introducir la pelota en el hoyo.
Hay un nombre diferente dependiendo de que tan encima o por debajo del par
esten tus golpes.
retorna la cadena correcta según esta tabla que muestra que los golpes en orden
de mayor a menor prioridad.

Golpes     Retornar
1           "Hole-in-one!"
<= par - 2  "Eagle"
par - 1     "Birdie"
par         "Par"
"par + 1"   "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home!"

par y golpes siempre seran numericos y positivos.
*/

function puntajeDeGolf(par, golpes)
{   if(golpes == 1)
    {
        return "Hole-in-one!";
    }
    else if(golpes <= par-2)
    {
        return "Eagle"
    }
    else if(golpes == par-1)
    {
        return "Birdie";
    }
    else if(golpes == par)
    {
        return par;
    }
    else if(golpes == par+1)
    {
        return "Bogey";
    }
    else if(golpes == par+2 )
    {
        return "Double Bogey";
    }
    else if(golpes>= par + 3)
    {
        return "Go Home";
    }
}
console.log(puntajeDeGolf(4,1));
console.log(puntajeDeGolf(4,2));
console.log(puntajeDeGolf(4,4));
console.log(puntajeDeGolf(4,6));
console.log(puntajeDeGolf(4,7));

//sentencias Switch

function clasificarValor3(valor3)
{   var respuesta;
    switch(valor)
    {   case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "betha";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
        default:
            respuesta = "No seas tonto, no hay este numero";
    }   
    return respuesta;
}
console.log(clasificarValor3(2));
console.log(clasificarValor3(7));
console.log(clasificarValor3(1));

var producto4 = "hamburguesa";
switch(product6)
{   case "pizza":
        console.log("la pizza básica cuesta $10.55");
        break;
    case "hamburguesa":
        console.log("la hamburguesa básica cuesta $6.78");
        break;
    case "helado":
        console.log("el helado grande cuesta $14.78");
        break;
}
console.log("Luego de switch");

//Opción predeterminada

function seleccionarIdioma(valor5)
{   var idioma;
    switch(valor)
    {   case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Frances";
        case 3:
            idioma = "Italiano";
            break;
        default:
            idioma="Ingles";
            break;
    }
    return idioma;
}
console.log(seleccionarIdioma(5));
console.log(seleccionarIdioma(2));
console.log(seleccionarIdioma(1));
console.log(seleccionarIdioma(3));

//Multiples opciones Switch

function clasificarVolumen(num3)
{   var volumen;
    switch(num3)
    {   case 1:
            volumen = "bajo";
            break;
        case 2:
        case 3:
            volumen = "Intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "Alto";
            break;            
    }
    return volumen;
}
console.log(clasificarVolumen(3));
console.log(clasificarVolumen(5));

//Reemplazar if..else por switch

function esMenorQue(a, b)
{
    /* if(a<b){
        return true;
    }
    else{
        return false;
    } */
    return a<b; //The same thing
}
/* console.log(esMenorQue(4,8));

function miFuncion3()
{
    console.log("Hola");
    return "Hola";
}
 */
function raiz(num)
{
    if(num<0)
    {
        return undefined;
    }
    return Math.sqrt(num);
}

console.log(raiz(4));
console.log(raiz(-4));

let count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea
  var dec;
   switch(card)
   {  case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
   }
   if(count > 0){
     dec = "Bet";
   }else{
     dec = "Hold";
   }

  return count + " " + dec;
  // Cambia solo el código encima de esta línea
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
//código de las cartas

//Crear objetos

var miPerro = {
    "nombre": "Gino",
    "edad": 5,
    "peso": 6,
    "raza": "labrador"
};
console.log(miPerro.nombre); //Salida, Gino

var miObjeto = {
    5 : "cinco" //el 5 lo convierte a cadena 
};

//acceder a porpiedadesm notacion por corchete.

var miCuaderno = {
    "color":"verde",
    "categoria": 3,
    "numero de paginas": 200,
    "numero de hojas": 100
};
console.log(miCuaderno["numero de paginas"]);

var resul ={
    1: "moy123",
    2: "genius234",
    3: "crazy566",
    4: "ultimus308"
};
var posic = 4;
console.log(resul[posic]);

//actualiza propiedades

var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella", "agua"]
};

mochila.color = "rojo"; //cambio

mochila.contenido.push("lapiz"); //se agrega el lapiz al final

console.log(mochila.contenido);
//Agregar propiedades
var curso={
    "titulo" : "Hola mundo",
    "idioma": "español",
    "duracion": 30
}

curso.vistas = 34599;
console.log(curso.vistas);

delete curso.titulo;

console.log(curso.titulo); //undefined

//objetos para busqueda

function phoneticLookup(val)
{   var result={
    "aplpha": "Adams",
    "bravo": "Boston",
    "charlie":"chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
};
    return result(val);
} 
//verificar propiedades

var miCuaderno = {
    "color":"verde",
    "categoria":3,
    "precio": 4.42
};

miCuaderno.hasOwnProperty("color");

function verificarObjeto(obj, propiedad)
{
    if(obj.hasOwnProperty(propiedad))
    {
        return "Propiedad: "+obj[propiedad];
    }
    else{
        return "El objeto no existe";
    }
}

//objetos comletos
var ordenespiza=
[
    {   
        "tipo":"margarita",
        "tamaño": "individual",
        "precio": 5.67,
        "toppings": [
            "extra queso",
            "champiñones",
            "piña"
        ],
        "para llevar": true

    },
    {
        "tipo":"cuatro quesos",
        "tamaño": "familiar",
        "precio": 10.67,
        "toppings": [
            "extra queso",
            "piminiento",
            "jamon"
        ],
        "para llevar": false
    }
]

console.log(ordenespiza[0]["tamaño"]);
console.log(ordenespiza[1][precio]);

//objetos anidados

var miReceta={
    "descripcion":"mi postre favorito",
    "costo": 15.5,
    "ingredientes": 
    {
        "masa":{
            "harina": "100 grs",
            "sal": "1 cucharada",
            "agua": "1 taza"
        },
        "cobertura":
        {
            "azucar":"120 grm",
            "chocolate": "4 cucharadas",
            "mantequilla": "200 grms"
        }
    }
}

console.log(miRectea.ingredientes.cobertura.chocolate); // = cucharadas

console.log(miReceta.ingredientes.cobertura["azucar"]);
console.log(miReceta.ingredientes,masa["agua"]);
console.log(miReceta.ingredientes["cobertura"].azucar);

//Arreglos anidados
var misPlantas =
[   {
        tipo: "Flores",
        lista:["rosas", "tulipanes", "deintes de leon"]
    },
    {
        tipo: "Arboles",
        lista:
        [
            "abedo",
            "pino",
            "abedul"
        ]
    }
];
console.log(misPlantas[0].lista[1]);
console.log(misPlantas[1].lista[2]);
//Colección de discos

var coleccionDeDiscos = {
    7854: {
        tituloDelAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Satyin Alive"]
    },
    3467:{
        tituloDelAlbum: "Bohemian",
        artista: "Queen",
        canciones: ["Love me"]
    }
}

function actualizarDiscos(discos, id, propiedad, valor)
{
    if(valor==="")
    {
        delete discos[id].propiedad;
    }
    else if(propiedad === "canciones")
    {
        discos[id][propiedad]=discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    }
    else {
        discos[id][propiedad]=valor;
    }
}
console.log(coleccionDeDiscos[7854].tituloDelAlbum);

actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA");

console.log(coleccionDeDiscos[5439].canciones);

//Cicloooooooooossssss

var i = 0;
while(i<=3)
{
    console.log("Hola Mundo");
    i++;
}

var miArreglo9=[];
var j=0;
console.log(miArreglo9);
while(j<10){
    miArreglo9.push(i);
    j++;
}
console.log(miArreglo9);