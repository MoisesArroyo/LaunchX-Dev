# Información

Cuando las variables de JavaScript son declaradas, tienen un valor inicial de undefined (indefinido). Si haces una operación matemática en una variable undefined, tu resultado será NaN lo que significa "Not a Number" (no es un número). Si concatenas una cadena con una variable undefined, obtendrás una cadena literal con valor undefined.

## Explora las diferencias entre las palabras claves var y let

Uno de los mayores problemas con la declaración de variables utilizando la palabra clave var es que tú puedes fácilmente sobrescribir declaraciones de variables:

```javascript
var camper = "James";
var camper = "David";
console.log(camper);
```

Una palabra clave llamada let fue introducida en ES6, una actualización importante para JavaScript, para resolver este problema potencial con la palabra clave var. Aprenderás sobre otras características de ES6 en desafíos posteriores.

Si reemplazas var por let en el código anterior, resultará en un error:

```javascript
let camper = "James";
let camper = "David";
```

### Declara una variable de solo lectura con la palabra clave const

En ES6, tú también puedes declarar variables usando la palabra clave const.

*Const* tiene todas las características increíbles que tiene let, con el bono añadido de que las variables declaradas usando const son de solo lectura. Son un valor constante, lo que significa que una vez que una variable es asignada con const, no se puede reasignar:

```javascript
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

Siempre debes nombrar variables que no quieras reasignar usando la palabra clave const. Esto ayuda cuando intentas reasignar accidentalmente una variable que está destinada a permanecer constante.

>Nota: Es común que los desarrolladores usen identificadores de variables en mayúsculas para valores inmutables y minúsculas o camelCase para valores mutables (objetos y arreglos). Aprenderás más sobre objetos, arreglos y valores inmutables y mutables en desafíos posteriores. También en desafíos posteriores, verás ejemplos de identificadores de variables mayúsculas, minúsculas o camelCase.

### Encuentra un resto en JavaScript

El operador de resto % entrega el resto de la división entre dos números.

#### Ejemplo

```javascript
5 % 2 = 1 porque
Math.floor(5 / 2) = 2 (Cociente)
2 * 2 = 4
5 - 4 = 1 (Resto)
```

Uso
En matemáticas, un número se puede comprobar para saber si es par o impar revisando el resto de la división del número por 2.

```javascript
17 % 2 = 1 (17 es impar)
48 % 2 = 0 (48 es par)
```

>Nota: El operador de resto es a veces incorrectamente referido como el operador módulo. Es muy similar al módulo, pero no funciona adecuadamente con números negativos.

Escapa comillas literales en cadenas
Cuando estás definiendo una cadena debes comenzar y terminar con una comilla simple o doble. ¿Qué pasa cuando necesitas una comilla literal: " o ' dentro de tu cadena?

En JavaScript, puedes escapar una comilla de considerarse un final de cadena colocando una barra invertida ( \ ) delante de la comilla.

```javascript
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

Esto indica a JavaScript que la siguiente comilla no es el final de la cadena, sino que debería aparecer dentro de la cadena. Así que si imprimieras esto en la consola, obtendrías:

```javascript
Alan said, "Peter is learning JavaScript".
```

Usa barras invertidas para asignar una cadena a la variable myStr de modo que si lo imprimieras en la consola, verías:

```javascript
I am a "double quoted" string inside "double quotes".
```

### Cita cadenas con comillas simples

Los valores de cadena en JavaScript pueden escribirse con comillas simples o dobles, siempre y cuando comiencen y terminen con el mismo tipo de comillas. A diferencia de otros lenguajes de programación, las comillas simples y dobles funcionan igual en JavaScript.

```javascript
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
```

La razón por la que puedes querer usar un tipo de comilla sobre otro es si quieres usar ambos en una cadena. Esto puede suceder si quieres guardar una conversación en una cadena y tener la conversación entre comillas. Otro uso sería guardar una etiqueta < a > con varios atributos entre comillas, todo dentro de una cadena.

```javascript
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

Sin embargo, esto se convierte en un problema cuando es necesario utilizar las comillas externas dentro de ella. Recuerda, una cadena tiene el mismo tipo de comillas al principio y al final. Pero si tienes esa misma comilla en algún lugar del medio, la cadena se detendrá antes de tiempo y arrojará un error.

```javascript
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
```

Aquí badStr arrojará un error.

En la cadena goodStr anterior, puedes usar ambas comillas de forma segura usando la barra invertida \ como un carácter de escape.

>Nota:  La barra invertida \ no debe confundirse con la barra diagonal /. No hacen lo mismo.

### Escapa secuencias en cadenas

Las comillas no son los únicos caracteres que pueden ser escapados dentro de una cadena. Hay dos razones para usar caracteres de escape:

1. Para permitir el uso de caracteres que de otra manera no te sería posible escribir, como un retorno de carro.
2. Para permitirte representar múltiples comillas en una cadena sin que JavaScript malinterprete lo que quieres decir.

| Código | Resultado |
| -- | -- |
| \' |comilla simple |
| \"| comilla doble |
| \\ |barra invertida |
| \n | línea nueva |
| \r |retorno de carro |
| \t |tabulation |
| \b |límite de palabra |
| \f |fuente de formulario |

## Concatena cadenas con el operador "más"

En JavaScript, cuando el operador + se utiliza con un valor de cadena (String), se le llama operador de concatenación. Puedes construir una nueva cadena a partir de otras cadenas concatenándolas juntas.

Ejemplo

```javascript
'My name is Alan,' + ' I concatenate.'
```

>Nota: Ten cuidado con los espacios. La concatenación no añade espacios entre las cadenas concatenadas, así que tendrás que añadirlos por tu cuenta.

### Concatena cadenas con el operador "más igual"

También podemos utilizar el operador += para concatenar una cadena al final de una variable de cadena existente. Esto puede ser muy útil para romper una cadena larga en varias líneas.

>Nota: Ten cuidado con los espacios. La concatenación no añade espacios entre las cadenas concatenadas, así que tendrás que añadirlos por tu cuenta.

### Construye cadenas con variables

A veces necesitarás construir una cadena, al estilo Mad Libs. Al usar el operador de concatenación (+), puedes insertar una o más variables en una cadena que estés construyendo.

### Agrega variables a cadenas

Al igual que podemos construir una cadena sobre múltiples líneas a partir de las cadenas literales, también podemos añadir variables a una cadena usando el operador "más igual" (+=).

### Encuentra la longitud de una cadena

Puedes encontrar la longitud de un valor de cadena (String) escribiendo .length después de la variable de cadena o literal de cadena.

### Utiliza la notación de corchetes para encontrar el primer carácter en una cadena

La notación de corchetes es una forma de obtener un carácter en un índice (index) específico dentro de una cadena.

La mayoría de lenguajes de programación modernos, como JavaScript, no empiezan a contar desde 1 como lo hacen los humanos. Empiezan desde 0. Esto se conoce como indexación basada en cero.

Por ejemplo, el carácter en el índice 0 de la palabra Charles es C. Así que si declaramos const firstName = "Charles", puedes obtener el valor de la primera letra de la cadena usando firstName[0].

### Comprende la inmutabilidad de las cadenas

En JavaScript, los valores de cadena (String) son inmutables, lo que significa que no pueden ser alterados una vez creados.

```javascript
let myStr = "Bob";
myStr[0] = "J";
```

no puede cambiar el valor de myStr a Job, porque el contenido de myStr no puede ser alterado. Ten en cuenta que esto no significa que myStr no puede cambiarse, solo que los caracteres individuales de una cadena literal no pueden ser cambiados. La única forma de cambiar myStr sería asignarla con una nueva cadena, como esta:

```javascript
let myStr = "Bob";
myStr = "Job";
```

### Utiliza la notación de corchetes para encontrar el enésimo carácter en una cadena

También puedes usar notación de corchetes para obtener el carácter en otras posiciones dentro de una cadena.

Recuerda que las computadoras empiezan a contar desde 0, así que el primer carácter es en realidad el carácter cero.


## Accede a arreglos multidimensional con índices

Se puede pensar que un arreglo multidimensional es como un arreglo de arreglos. Cuando usas corchetes para acceder a tu arreglo, el primer par de corchetes se refiere a las entradas en el arreglo externo (el primer nivel) y cada par adicional de corchetes se refiere al siguiente nivel de entradas.

## Manipula arreglos con push()

Una forma fácil de añadir datos al final de un arreglo es a través de la función push().

.push() toma uno o más parámetros y los "empuja" al final del arreglo.

## Manipula arreglos con pop()

Otra manera de cambiar los datos en un arreglo es con la función .pop().

.pop() se utiliza para sacar un valor del final de un arreglo. Podemos almacenar este valor sacado asignándolo a una variable. En otras palabras, .pop() elimina el último elemento de un arreglo y devuelve ese elemento.

Cualquier tipo de entrada puede ser sacada de un arreglo: números, cadenas, incluso arreglos anidados.

## Manipula arreglos con shift()

pop() siempre elimina el último elemento de un arreglo. ¿Qué tal si quieres eliminar el primero?

Ahí es donde entra .shift(). Funciona igual que .pop(), excepto que elimina el primer elemento en lugar del último.

## Lista de compras

Crea una lista de compras en la variable myList. La lista debe ser un arreglo multidimensional que contenga varios sub-arreglos.

El primer elemento de cada sub-arreglo debe contener una cadena con el nombre del artículo. El segundo elemento debe ser un número que represente la cantidad, por ejemplo.

## Escribe JavaScript reutilizable utilizando funciones
En JavaScript, podemos dividir nuestro código en partes reutilizables llamadas funciones.

Puedes llamar o invocar esta función usando su nombre seguido por paréntesis, así: functionName(); Cada vez que se llame la función se imprimirá el mensaje Hello World en la consola de desarrollo. Todo el código entre las llaves se ejecutará cada vez que se llame la función.

## Pasa valores a las funciones utilizando argumentos

Los parámetros son variables que actúan como marcadores de posición para los valores que deben ser introducidos en una función cuando se llama. Cuando se define una función, se define típicamente junto con uno o más parámetros. Los valores reales que son introducidos (o "pasados") a una función cuando se llama son conocidos como argumentos.


## Devuelve un valor de una función utilizando "Return"
Podemos pasar valores a una función con argumentos. Puedes utilizar una declaración de devolución (return) para enviar un valor fuera de una función.

## Ámbito global y funciones

En JavaScript, el ámbito se refiere a la visibilidad de las variables. Las variables definidas fuera de un bloque de función tienen un ámbito Global. Esto significa que pueden ser observadas desde cualquier lugar en tu código JavaScript.

Las variables que se declaran sin las palabras clave let o const se crean automáticamente en el ámbito global. Esto puede crear consecuencias no intencionadas en cualquier lugar de tu código o al volver a ejecutar una función. Siempre debes declarar tus variables con let o const.

## Ámbito local y funciones

Las variables que se declaran dentro de una función, así como los parámetros de la función tienen un ámbito local. Esto significa que sólo son visibles dentro de esa función.

La llamada a la función myTest() mostrará la cadena foo en la consola. La línea console.log(loc) (fuera de la función myTest) lanzará un error, ya que loc no está definido fuera de la función.

El editor tiene dos console.logs para ayudarte a ver lo que está sucediendo. Revisa la consola a medida que programas para ver cómo cambia. Declara una variable local myVar dentro de myLocalScope y ejecuta las pruebas.

Nota: La consola todavía mostrará el error ReferenceError: myVar is not defined, pero esto no causará que las pruebas fallen.

## Ámbito global vs. local en funciones

Es posible tener variables locales y globales con el mismo nombre. Cuando haces esto, la variable local tiene precedencia sobre la variable global.

La función myFun devolverá la cadena Head porque está presente la versión local de la variable.

## Comprendiendo el valor indefinido devuelto por una función

Una función puede incluir la declaración de devolución (return) pero no tiene por qué hacerlo. En el caso de que la función no tenga una declaración de devolución (return), cuando la llames, la función procesa el código interno, pero el valor devuelto es undefined (indefinido).

## Asignación con un valor devuelto

Si recuerdas de nuestra discusión sobre almacenar valores con el operador de asignación, todo a la derecha del signo de igualdad se resuelve antes de asignar el valor. Esto significa que podemos tomar el valor devuelto de una función y asignarlo a una variable.

## Permanece en línea

En Informática una cola (queue) es una estructura de datos abstracta donde los elementos se mantienen en orden. Los nuevos elementos se pueden añadir en la parte posterior de la cola y los elementos antiguos se retiran de la parte delantera de la cola.

## Comprende los valores booleanos

Otro tipo de datos es el Booleano. Los booleanos solo pueden ser uno de dos valores: true (verdadero) o false (falso). Básicamente son pequeños interruptores de encendido, donde true es encendido y false es apagado. Estos dos estados se excluyen mutuamente.

Nota Los valores del tipo booleano nunca se escriben con comillas. Las cadenas "true" y "false" no son booleanos y no tienen ningún significado especial en JavaScript.


## Usa lógica condicional con las sentencias "If"

Las sentencias if son utilizadas para tomar decisiones en el código. La palabra clave if le dice a JavaScript que ejecute el código entre llaves bajo ciertas condiciones, definidas en los paréntesis. Estas condiciones son conocidas como condiciones booleanas (Boolean) y sólo pueden ser true o false.

Cuando la condición se evalúa como true, el programa ejecuta el comando dentro de las llaves. Cuando la condición booleana se evalúa como false, la sentencia dentro de las llaves no se ejecutará.
```pseudocodigo
si (la condición es verdadera) {
  la sentencia es ejecutada
}
```
se ejecutará.
```javascript
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
```

test(true) devuelve la cadena It was true y test(false) devuelve la cadena It was false.

Cuando test es llamada con un valor de true, la sentencia if evalúa myCondition (mi condición) para ver si es true o no. Puesto que es true, la función devuelve It was true. Cuando llamamos a test con un valor de false, myCondition no es true, la sentencia dentro de las llaves no se ejecuta y la función devuelve It was false.

## Comparación con el operador de igualdad
Hay muchos operadores de comparación en JavaScript. Todos estos operadores devuelven un valor booleano true o false.

El operador más básico es el de igualdad ==. El operador de igualdad compara dos valores y devuelve true si son equivalentes o false si no lo son. Ten en cuenta que una igualdad es diferente a una asignación (=), la cual asigna el valor a la derecha del operador a la variable de la izquierda.

Si myVal es igual a 10, el operador de igualdad devuelve true, así que el código dentro de los corchetes se ejecutará y la función devolverá Equal. De lo contrario, la función devolverá Not Equal. Para que JavaScript compare dos tipos de datos diferentes (por ejemplo, numbers y strings), tiene que convertir un tipo a otro. Esto se conoce como coerción de Tipo. Sin embargo, una vez lo hace, puede comparar términos como se ve a continuación:

## Comparación con el operador de estricta igualdad

La estricta igualdad (===) es la contraparte del operador de igualdad (==). Sin embargo, a diferencia del operador de igualdad, el cual intenta convertir ambos valores comparados a un tipo común, el operador de estricta igualdad no realiza una conversión de tipo.

Si los valores que se comparan tienen diferentes tipos, se consideran desiguales, y el operador de estricta igualdad devolverá falso.

## Practica comparando diferentes valores
En los dos últimos desafíos, aprendimos sobre el operador de igualdad (==) y el operador de estricta igualdad (===). Vamos a hacer una rápida revisión y práctica utilizando estos operadores un poco más.

Si los valores que se comparan no son del mismo tipo, el operador de igualdad realizará una conversión de tipo y luego evaluará los valores. Sin embargo, el operador de estricta igualdad comparará tanto el tipo de datos como el valor tal como es, sin convertir un tipo a otro.

Ejemplos

3 == '3' devuelve true porque JavaScript realiza la conversión de tipo de cadena a número. 3 === '3' devuelve false porque los tipos son diferentes y la conversión de tipo no se realiza.

>Nota: En JavaScript, puedes determinar el tipo de una variable o un valor con el operador typeof, de la siguiente manera:

## Comparación con el operador de desigualdad

El operador de desigualdad (!=) es lo opuesto al operador de igualdad. Esto quiere decir que no es igual, y devuelve false cuando la comparación de igualdad devuelva true y vice versa. Al igual que el operador de igualdad, el operador de desigualdad convertirá los tipos de datos mientras los compara.

## Comparación con el operador de estricta desigualdad

El operador de estricta desigualdad !== es el opuesto lógico del operador de estricta igualdad. Esto significa "Estrictamente Desigual", y devuelve false cuando la comparación de estricta igualdad devolvería true y vice versa. El operador de estricta desigualdad no convertirá los tipos de datos.

## Comparación con el operador "mayor que"

El operador mayor que (>) compara los valores de dos números. Si el número a la izquierda es mayor que el número a la derecha, devuelve true. De lo contrario, devuelve false.

Al igual que el operador de igualdad, el operador mayor que convertirá los tipos de datos de valores mientras los compara.

## Comparación con el operador "mayor o  igual que"

El operador mayor o igual que (>=) compara el valor de dos números. Si el número de la izquierda es mayor o igual que el número de la derecha, devuelve true. De lo contrario, devuelve false.

Al igual que el operador de igualdad, el operador mayor o igual que convertirá los tipos de datos mientras los compara.

## Comparación con el operador "menor que"
El operador menor que (<) compara los valores de dos números. Si el número a la izquierda es menor que el número a la derecha, devuelve true. De lo contrario, devuelve false. Al igual que el operador de igualdad, el operador menor que convertirá los tipos de datos mientras los compara.

## Comparación con el operador "menor o igual que"

El operador menor o igual que (<=) compara el valor de dos números. Si el número de la izquierda es menor o igual que el número de la derecha, devuelve true. Si el número a la izquierda es mayor que el número a la derecha, devuelve false. Al igual que el operador de igualdad, el operador menor o igual que convertirá los tipos de datos mientras los compara.

Comparaciones con el operador lógico "and"
A veces tendrás que probar más de una cosa a la vez. El operador lógico and (&&) devuelve true si y solo si los operandos a la izquierda y a la derecha son verdaderos.



## Comparaciones con el operador lógico "or"

El operador lógico or (||) devuelve true si cualquiera de los operandos es true. De lo contrario, devuelve false.

El operador lógico or se compone de dos símbolos de barra vertical: (||). Este se puede encontrar normalmente entre las teclas de tabulación y escape.

## Introducción a las sentencias "Else"

Cuando la condición en una sentencia if es verdadera, se ejecutará el bloque de código que va a continuación. ¿Qué sucede cuando la condición es falsa? Normalmente no debería ocurrir nada. Con la sentencia else, se puede ejecutar un bloque alternativo de código.

## Introducción a las sentencias "Else If"
Si tienes múltiples condiciones que necesitan ser resueltas, puedes encadenar sentencias if junto con sentencias else if.

## Orden lógico de las sentencias "if else"

El orden es importante en las sentencias if, else if.
La función se ejecuta de arriba a abajo, por lo que habrá que tener cuidado con qué sentencia va primero.

## Encadena sentencias if else

Las sentencias if/else pueden ser encadenadas para crear una lógica compleja. Aquí hay pseudocódigo de múltiples declaraciones if / else if encadenadas

## Código de golf
En el juego de golf cada hoyo tiene un par que significa el número promedio de strokes (golpes) que se espera que haga un golfista para introducir la pelota en un hoyo para completar la jugada. Dependiendo de qué tan por encima o por debajo del par estén tus strokes, hay un nombre diferente.

Tu función recibirá los argumentos par y strokes. Devuelve la cadena correcta según esta tabla que muestra los golpes en orden de prioridad; superior (más alto) a inferior (más bajo):

## Seleccionando entre muchas opciones con declaración switch

Si tienes muchas opciones para elegir, usa una declaración switch. Una sentencia switch prueba un valor y puede tener muchas sentencias case que definen varios valores posibles. Las sentencias se ejecutan desde el primer valor case coincidente hasta que se encuentra un break.

## Agrega una opción predeterminada en las declaraciones switch

En una declaración switch puede que no seas capaz de especificar todos los valores posibles como declaraciones de case (caso). En su lugar, se puede añadir la declaración default, la cual se ejecutará si no se encuentran declaraciones case. Piensa en ella como la última sentencia else en una cadena if/else.

## Múltiples opciones idénticas en las declaraciones "switch"
Si la sentencia break es omitida en un caso (case) de una sentencia switch, las siguientes sentencias case serán ejecutadas hasta encontrar un break.

## Devuelve valores booleanos desde funciones

Podrás recordar que en Comparación con el operador de igualdad todos los operadores de comparación devuelven un valor booleano true, o false.

## Patrón de devolución anticipado para funciones
Cuando se alcanza una sentencia return, la ejecución de la función actual se detiene y el control se devuelve a la ubicación de la llamada.

```javascript
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

Lo anterior mostrará la cadena Hello en la consola y devolverá la cadena World. La cadena byebye nunca se mostrará en la consola, porque la función termina en la sentencia return.

Modifica la función abTest para que cuando a o b sean menores que 0 la función salga inmediatamente con un valor undefined.

Sugerencia
Recuerda que undefined es una palabra clave, no una cadena.

## Conteo de cartas
En el juego de casino Blackjack el jugador puede sacarle ventaja a la casa llevando un registro del numero relativo de cartas altas y bajas que quedan en la baraja. Esto es llamado conteo de cartas.

Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla. Cuando el conteo es positivo, el jugador debería apostar alto. Cuando el conteo da 0 o negativo, el jugador debería apostar bajo.

| Cambios del conteo | Cartas |
| -- | -- |
| +1	| 2, 3, 4, 5, 6 |
| 0 |	7, 8, 9 |
| -1 |	10, 'J', 'Q', 'K', 'A' |

Escribirás una función para contar cartas. Recibirá un parámetro card (carta) que puede ser un número o una cadena y aumentar o reducir la variable global count (conteo) de acuerdo al valor de la carta (observa la tabla). La función devolverá una cadena con el conteo actual y la cadena Bet (Apuesta) si el conteo es positivo, o Hold (Espera) si el conteo es cero o negativo. El conteo actual y la decisión del jugador (Bet o Hold) deben estar separados por un solo espacio.

Resultados de ejemplo: -3 Hold o 5 Bet

Sugerencia
NO reinicies count a 0 cuando el valor sea 7, 8 o 9. NO devuelvas un arreglo.
NO incluyas comillas (individuales o dobles) en el resultado.


## Construye objetos en JavaScript
Es posible que hayas escuchado el término objeto (object) antes.

Los objetos son similares a los arreglos (arrays), excepto que en lugar de usar índices para acceder y modificar sus datos, accedes a los datos en objetos a través de propiedades (properties).

Los objetos son útiles para almacenar datos de forma estructurada y pueden representar objetos del mundo real, como un gato.

Por ejemplo, aquí hay un objeto de gato:
```javascript
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```
En este ejemplo, todas las propiedades se almacenan como cadenas, como name, legs y tails. Sin embargo, también puedes utilizar números como propiedades. Incluso puedes omitir las comillas para las propiedades de cadenas de una sola palabra, de la siguiente manera:
```javascript
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```
Sin embargo, si tu objeto tiene propiedades que no son cadenas, JavaScript las convertirá automáticamente en cadenas.

## Accede a propiedades de objetos con notación de puntos

Hay dos maneras de acceder a las propiedades de un objeto: notación de puntos (.) y notación de corchetes ([]), similar a un arreglo.

La notación de puntos es lo que se usa cuando conoces el nombre de la propiedad a la que intentas acceder con antelación.

## Accede a propiedades de objetos con notación de corchete

La segunda manera de acceder a las propiedades de un objeto es con la notación de corchetes ([]). Si la propiedad del objeto al que intentas acceder tiene un espacio en el nombre, necesitarás usar notación de corchetes.

Sin embargo, también puedes utilizar la notación de corchetes en las propiedades de objeto sin espacios.

Aquí hay un ejemplo de cómo usar la notación de corchetes para leer la propiedad de un objeto:

```javascript
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
```

## Accede a propiedades de objetos con variables
Otro uso de la notación de corchetes en objetos es acceder a una propiedad que está almacenada como el valor de una variable. Esto puede ser muy útil para iterar a través de las propiedades de un objeto o para acceder a una tabla de búsqueda.

Aquí hay un ejemplo del uso de una variable para acceder a una propiedad:
```javascript
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
```
La cadena Doberman se mostrará en la consola.

Otra forma de usar este concepto es cuando el nombre de la propiedad se recoge dinámicamente durante la ejecución del programa, de la siguiente manera:
```javascript
const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);
```

someProp tendrá una cadena con un valor propName y la cadena John se mostrará en la consola.

Ten en cuenta que no usamos comillas alrededor del nombre de la variable cuando la usamos para acceder a la propiedad porque utilizamos el valor de la variable, no el nombre.


## Actualizando las propiedades de un objeto

Después de haber creado un objeto de JavaScript, puedes actualizar sus propiedades en cualquier momento tal y como actualizarías cualquier otra variable. Puedes utilizar tanto la notación de puntos como la notación de corchetes para actualizar.

## Añade nuevas propiedades a un objeto de JavaScript

Puedes añadir nuevas propiedades a los objetos de JavaScript existentes de la misma manera que los modificarías.

Así es como podríamos agregar una propiedad bark a nuestro objeto ourDog:

```javascript

ourDog.bark = "bow-wow";

o

ourDog["bark"] = "bow-wow";
```
## Elimina propiedades en un objeto de JavaScript

También podemos eliminar propiedades de objetos de esta forma:
```javascript
delete ourDog.bark;
```
## Usa objetos para hacer búsquedas

Los objetos pueden ser considerados como un almacenamiento clave/valor, como un diccionario. Si tienes datos tabulares, puedes utilizar un objeto para hacer una búsqueda de valores en lugar de una declaración switch o encadenar if/else. Esto es de mucha utilidad cuando se sabe que los datos de entrada están limitados a un cierto rango

## Manipulando objectos complejos

A veces, es posible que desees almacenar datos en una estructura de datos flexible. Un objeto de JavaScript es una forma de manejar datos flexibles. Permiten combinaciones arbitrarias de cadenas, números, booleanos, arreglos, funciones, y objetos.

## Accede a arreglos anidados

Como hemos visto en ejemplos anteriores, los objetos pueden contener tanto objetos anidados como así también arreglos anidados. De manera similar a como se accede a los objetos anidados, la notación de corchetes de arreglos puede ser encadenada para acceder a arreglos anidados.

## Colección de discos

Se te da un objeto literal que representa una parte de tu colección de álbumes musicales. Cada álbum tiene un número de id único como clave y varias otras propiedades. No todos los álbumes tienen una información completa.

Empiezas con una función updateRecords la cual toma un objeto literal, records, que contiene el álbum musical de la colección, un id, prop (como artist o tracks), y value. Completa la función usando las reglas siguientes para modificar el objeto pasado a la función.

Tu función siempre debe devolver el objeto de colección de registros completo.
Si prop no es tracks y value no es una cadena vacía, actualiza o establece la propiedad prop del album a value.
Si prop es tracks pero el álbum no tiene una propiedad tracks, crea un arreglo vacío y agrégale value a él.
Si prop es tracks y value no es una cadena vacía, agrega value al final del arreglo de tracks existentes del álbum.
Si value es una cadena vacía, elimina esa propiedad prop del álbum.
Nota: Se usa una copia del objeto recordCollection para las pruebas.


## Itera con el bucle "while" de JavaScript

Puedes ejecutar el mismo código múltiples veces usando un bucle.

El primer tipo de bucle que aprenderemos se llama bucle while porque ejecuta una condición específica mientras esta sea verdadera, y se detiene una vez que esa condición ya no sea verdadera.

## Itera con los bucles "for" de JavaScript
Puedes ejecutar el mismo código múltiples veces usando un bucle.

El tipo más común de bucle de JavaScript se llama bucle for porque se ejecuta "por" un número específico de veces.

Los bucles for se declaran con tres expresiones opcionales separadas por punto y coma:

for (a; b; c), donde a es la sentencia de inicialización, b es la sentencia condicional, y c es la expresión final.

La sentencia de inicialización se ejecuta una sola vez antes de que el bucle comience. Normalmente se utiliza para definir y configurar tu variable de bucle.

La sentencia condicional es evaluada al principio de cada iteración del bucle y continuará siempre y cuando sea true. Cuando la condición sea false al inicio de la iteración, el bucle dejará de ejecutarse. Esto significa que si la condición comienza como falso, tu bucle nunca se ejecutará.

La expresión final se ejecuta al final de cada iteración del bucle, antes de la siguiente comprobación de condición y se utiliza normalmente para incrementar o disminuir tu contador de bucle.

## Itera números impares con un bucle "for"

Los bucles "for" no tienen que iterar de uno en uno a la vez. Al cambiar nuestra final-expression (expresión final), podemos contar con números pares.


## Cuenta hacia atrás con un bucle "for"

Un bucle for también puede contar hacia atrás, siempre que definamos las condiciones adecuadas.
Para poder disminuirle dos cada iteración, necesitaremos cambiar nuestra inicialización, condición, y expresión final.
Empezaremos en i = 10 e iteraremos mientras i > 0. Disminuiremos i en 2 por cada bucle con i -= 2.

## Itera a través de un arreglo con un bucle "for"

Una tarea común en JavaScript es iterar a través del contenido de un arreglo. Una forma de hacerlo es con un bucle for. Este código mostrará cada elemento del arreglo arr en la consola:
Recuerda que los arreglos tienen una indexación basada en cero, lo que significa que el último índice del arreglo es igual a su longitud menos uno (length - 1). Nuestra condición para este bucle es i < arr.length, que detiene el bucle cuando i es igual a length. En este caso, la última iteración es i === 4, es decir, cuando i se convierte en igual a arr.length - 1 y resultados 6 a la consola. Entonces i aumenta a 5, y el bucle termina i < arr.length es false.

## Anida bucles "for"
Si tienes un arreglo multidimensional, puedes utilizar la misma lógica que aprendimos anteriormente para recorrer tanto el arreglo como cualquier sub-arreglo. Aquí hay un ejemplo:

Esto imprime cada sub-elemento dentro de arr uno a la vez. Ten en cuenta que para el bucle interior, estamos comprobando el .length de arr[i], ya que arr[i] es en sí mismo es un arreglo.

## Itera con el bucle "do...while" de JavaScript

El siguiente tipo de bucle que aprenderás se llama bucle do...while. Se llama bucle do...while porque primero hace (do) una pasada por el código dentro del bucle sin importar qué, y luego continua ejecutando el bucle mientras (while) la condición especificada sea verdadera (true).

Cuando lleguemos a la siguiente línea, no hay ninguna condición para evaluar, así que entramos al código dentro de las llaves y se ejecuta. Añadiremos un único elemento al arreglo y luego incrementaremos i antes de llegar a la verificación de la condición. 

## Reemplaza bucles usando recursión

La recursión es el concepto que una función puede expresarse en términos de sí misma. Para ayudar a comprender esto, comienza pensando en la siguiente tarea: multiplica los primeros n elementos de un arreglo para crear el producto de esos elementos. Usando un bucle for, puedes hacer esto:
```javascript
function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
```
Sin embargo, nota que multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. Esto significa que puedes reescribir multiply en términos de sí misma y que nunca necesites hacer uso de un bucle.
```javascript
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```
La versión recursiva de multiply se desglosa así. En el caso base, donde n <= 0, devuelve 1. Para valores más grandes de n, se llama a sí misma, pero con n - 1. Esa llamada de función se evalúa de la misma manera, llamando a multiply otra vez hasta que n <= 0. En este punto, todas las funciones pueden devolver y la multiply original devuelve la respuesta.

Nota: Las funciones recursivas deben tener un caso base cuando devuelven sin tener que llamar a la función de nuevo (en este ejemplo, cuando n <= 0), de lo contrario nunca podrán terminar de ejecutarse.

## Búsqueda de perfiles

Tenemos un arreglo de objetos que representan a diferentes personas en nuestras listas de contactos.

Una función lookUpProfile que recibe nombre (name) y una propiedad (prop) como argumentos preescritos para ti.

La función debe verificar si el nombre (name) es el nombre de pila del contacto (firstName) y la propiedad (prop) dada es una propiedad de ese contacto.

Si ambos son verdaderos, entonces devolver el "valor" de esa propiedad.

Si name no corresponde a ningún contacto, entonces devuelve la cadena No such contact.

Si prop no corresponde a ninguna propiedad válida de un contacto encontrado que coincida con name entonces devuelve la cadena No such property.

## Genera fracciones aleatorias con JavaScript

Los números aleatorios son útiles para crear comportamientos aleatorios.

JavaScript tiene una función Math.random() que genera un número decimal aleatorio entre 0 (inclusivo) y 1 (exclusivo). Así que Math.random() puede devolver un 0 pero nunca devuelve un 1.

Nota: Así como aprendimos en almacenando valores con el operador de igualdad, todas las llamadas de funciones se resolverán antes de que el return se ejecute, así que podemos devolver (return) el valor de la función Math.random().

## Genera números enteros aleatorios con JavaScript
Es genial que podamos generar números decimales aleatorios, pero es incluso más útil si lo usamos para generar números enteros aleatorios.

1. Usa Math.random() para generar un decimal aleatorio.
2. Multiplica ese decimal aleatorio por 20.
3. Utiliza otra función, Math.floor() para redondear el número hacia abajo a su número entero más cercano.

Recuerda que *Math.random()* nunca devolverá un 1 y porque estamos redondeando hacia abajo, es imposible obtener 20. Esta técnica nos dará un número entero entre 0 y 19.

Poniendo todo junto, así es como se ve nuestro código:
```javascript
Math.floor(Math.random() * 20);
```
Estamos llamando a Math.random(), multiplicando el resultado por 20 y pasando el valor a la función Math.floor() para redondear el valor hacia abajo al número entero más cercano.

## Genera números enteros aleatorios dentro de un rango
En lugar de generar un número entero aleatorio entre cero y un número dado como lo hicimos anteriormente, podemos generar un número entero aleatorio que se encuentre dentro de un rango de dos números específicos.

Para ello, definiremos un número mínimo min y un número máximo max.

Esta es la fórmula que utilizaremos. Tómate un momento para leerla e intenta entender lo que este código está haciendo
```javascript
Math.floor(Math.random() * (max - min + 1)) + min
```

## Utiliza la función "parseInt"

La función parseInt() analiza una cadena y devuelve un entero. A continuación, te presentamos un ejemplo:
```javascript
const a = parseInt("007");
``` 
La función anterior convierte la cadena 007 al entero 7. Si el primer carácter de la cadena no puede ser convertido en un número, entonces devuelve NaN.

Utiliza la función "parseInt" con Radix (Base)
La función parseInt() analiza una cadena y devuelve un entero. Recibe un segundo argumento para la base (radix), que especifica la base del número representado en la cadena. La base (radix) puede ser un número entero entre 2 y 36.

La llamada a la función se realiza de la siguiente manera:
```javascript
parseInt(string, radix);
```
Y aquí hay un ejemplo:
```javascript
const a = parseInt("11", 2);
``` 
La variable radix indica que 11 está en el sistema binario, o base 2. Este ejemplo convierte la cadena 11 a un entero 3.

## Usa el operador condicional (ternario)
El operador condicional, también llamado el operador ternario, puede utilizarse como una expresión if-else de una sola línea.

La sintaxis es a ? b : c, donde a es la condición, b es el código a ejecutar cuando la condición devuelve true, y c es el código a ejecutar cuando la condición devuelve false.

La siguiente función utiliza una sentencia if/else para comprobar una condición:
```javascript
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
``` 
Esto puede reescribirse usando el operador condicional:

```javascript
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
``` 

## Usa múltiples operadores condicionales (ternarios)
En el desafío anterior, usaste un único operador condicional. También puedes encadenarlos para comprobar múltiples condiciones.

La siguiente función utiliza sentencias if, else if, y else para comprobar múltiples condiciones:

```javascript
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

La función anterior puede ser reescrita utilizando múltiples operadores condicionales:

```javascript
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```
Se considera buena práctica dar formato a múltiples operadores condicionales de forma que cada condición esté en una línea separada, como se muestra arriba. Usar múltiples operadores condicionales sin una indentación adecuada puede hacer tu código difícil de leer. Por ejemplo:

```javascript
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

## Utiliza recursión para crear una cuenta regresiva

En el desafío anterior, aprendiste como usar la recursión para reemplazar un bucle for. Ahora, echemos un vistazo a una función más compleja que devuelve un arreglo de enteros consecutivos empezando con 1 hasta el número pasado a la función.

Como se menciona en el desafío anterior, habrá un caso base. El caso base le dice a la función recursiva cuando no necesita llamarse a sí misma. Es un caso simple donde el valor de retorno ya se conoce. También habrá una llamada recursiva la cual ejecuta la función original con argumentos diferentes. Si la función se escribe correctamente, eventualmente el caso base será alcanzado.

Por ejemplo, digamos que quieres escribir una función recursiva que devuelva un arreglo conteniendo los números 1 hasta n. Esta función necesitará aceptar un argumento, n que representa el número final. Entonces necesitará llamarse a sí misma con valores progresivamente más pequeños de n hasta que alcance 1. Podrías escribir la función de la siguiente manera:
```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```

El valor [1, 2, 3, 4, 5] se mostrará en la consola.

Al principio, esto parece contraintuitivo ya que el valor de n disminuye, pero los valores en el arreglo final se están incrementando. Esto sucede porque la inserción ocurre al último, después de la llamada recursiva. En el punto donde n es empujado en el arreglo, countup(n - 1) ya ha sido evaluada y devuelto [1, 2, ..., n - 1].

## Usa recursión para crear un rango de números

Continuando con el desafío anterior, te ofrecemos otra oportunidad de crear una función recursiva para resolver un problema.

Hemos definido una función llamada rangeOfNumbers con dos parámetros. La función debe devolver un arreglo de enteros que comienza con el número representado por el parámetro startNum y termina con el número representado por el parámetro endNum. El número inicial será siempre menor o igual que el número final. Tu función debe utilizar recursión, llamándose a sí misma, y no utilizar bucles de ningún tipo. También debe funcionar en el caso que startNum y endNum sean iguales.

## Compara el alcance de las palabras clave "var" y "let"

Si no estás familiarizado con let, echa un vistazo a este desafío.

Cuando declaras una variable con la palabra clave var, esta es declarada globalmente o localmente sí es declarada dentro de una función.

La palabra clave let se comporta de forma similar, pero con algunas características adicionales. Cuanto declaras una variable con la palabra clave let dentro de un bloque, una declaración o expresión. Su alcance está limitado a ese bloque, declaración o expresión.

## Muta un arreglo declarado con const
Si no estás familiarizado con const, echa un vistazo a este desafío.

La declaración const tiene muchos casos de uso, en el JavaScript moderno.

Algunos desarrolladores prefieren asignar todas sus variables utilizando const por defecto, a menos que sepan que necesitarán reasignar el valor. Solo en ese caso, utilizan let.

Sin embargo, es importante comprender que los objetos (incluyendo arreglos y funciones), asignados a una variable usando const siguen siendo mutables. Usar la declaración const solo previene la reasignación del identificador de una variable.

## Prevenir la mutación del objeto
Como se vio en el desafío anterior, la declaración const por sí sola no protege la información de la mutación. Para asegurar que tu información no cambie, JavaScript provee una función Object.freeze para prevenir la mutación de datos.

Cualquier intento de cambiar el objeto será rechazado, lanzando un error si el script se ejecuta en modo estricto (strict mode).


## Usa funciones flecha para escribir funciones anónimas de manera breve

En JavaScript, usualmente no necesitas nombrar tus funciones, especialmente cuando se pasa una función como argumento a otra función. En su lugar, creamos funciones inline (en línea). No necesitamos nombrar estas funciones porque no las reutilizamos en otro lugar
Para lograr esto, por lo general se usa la siguiente sintaxis:
```javascript
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```
ES6 nos proporciona el azúcar sintáctico, para no tener que escribir funciones anónimas de este modo. En su lugar, puedes usar la sintaxis de función flecha:
```javascript
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```
Cuando la función no posee cuerpo y sólo tiene un valor de retorno, la sintaxis de "función de flecha", te permite omitir la palabra clave return, así como los corchetes que rodean el código. Esto ayuda a simplificar las funciones más pequeñas en sentencias de una sola línea:
```javascript
const myFunc = () => "value";
```
Este código todavía devolverá la cadena value por defecto.


### Escribe funciones flecha con parámetros

Al igual que una función regular, puedes pasar argumentos a una función flecha.

```javaScript
const doubler = (item) => item * 2;
doubler(4);
```
doubler(4) devolvería el valor 8.

Si una función flecha tiene un solo parámetro, los paréntesis que encierran el parámetro pueden ser omitidos.

Es posible pasar más de un argumento a una función flecha.
```javascript
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```
multiplier(4, 2) devolverá el valor 8.


### Establece parámetros por defecto para tus funciones

Para ayudarnos a crear funciones más flexibles, ES6 introduce parametros por defecto para funciones.

```javascript
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```
La consola mostrará las cadenas Hello John y Hello Anonymous.

El parámetro por defecto entra en juego cuando el argumento no es especificado (es indefinido). Como puedes ver en el ejemplo anterior, el parámetro name recibirá su valor por defecto Anonymous cuando no proveas un valor para el parámetro. Puede agregar valores por defecto para tantos parámetros como desees

### Utiliza el parámetro rest con parámetros de función

Para ayudarnos a crear funciones más flexibles, ES6 introduce el parámetro rest para los parámetros de función. Con el parámetro rest, puedes crear funciones que tomen un número variable de argumentos. Estos argumentos se almacenan en un arreglo al que se puede acceder más tarde desde dentro de la función.

```javascript
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

La consola mostrará las cadenas You have passed 3 arguments. y You have passed 4 arguments..

El parámetro rest elimina la necesidad de comprobar el arreglo args y nos permite aplicar map(), filter() y reduce() en el arreglo de parámetros.

### Utiliza el operador de propagación para evaluar los arreglos en el lugar

ES6 introduce el operador de propagación, que nos permite expandir arreglos y otras expresiones en lugares donde se esperan múltiples parámetros o elementos.

El siguiente código ES5 usa apply() para calcular el valor máximo en un arreglo:
```javascript
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
maximus tendrá un valor de 89.
```

Tuvimos que usar Math.max.apply(null, arr) porque Math.max(arr) devuelve NaN. Math.max() espera argumentos separados por comas, pero no un arreglo. El operador de propagación hace que esta sintaxis sea más fácil de leer y mantener.
```javascript
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
maximus tendría un valor de 89.
```

...arr devuelve un arreglo desempacado. En otras palabras, propaga el arreglo. Sin embargo, el operador de propagación sólo funciona en el lugar, como en un argumento de función o en un arreglo literal. El siguiente código no funcionará:

```javascript
const spreaded = ...arr;
```

### Usa sintaxis de desestructuración para extraer valores de objetos

La sintaxis de desestructuración es una sintaxis especial introducida en ES6, para asignar los valores directamente desde un objeto.

```javascript
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

name tendría una cadena con valor John Doe, y age tendría el número 34.

Aquí hay una sentencia de asignación equivalente usando la sintaxis de desestructuración de ES6:
```javascript
const { name, age } = user;
```
De nuevo, name tendrá una cadena con valor John Doe, y age tendrá el número 34.

Aquí, las variables name y age serán creadas y se asignarán los valores respectivos a partir del objeto user. Puedes observar que esto es mucho más limpio.

Puedes extraer tantos o pocos valores del objeto como desees.

### Usa sintaxis de desestructuración para asignar variables desde objetos

La desestructuración te permite asignar un nuevo nombre de variable al extraer valores. Puedes hacer esto al poner el nuevo nombre después de dos puntos al asignar el valor.

```javascript
const user = { name: 'John Doe', age: 34 };
```

Así es como puedes dar nuevos nombres de variables en la asignación:

```javascript
const { name: userName, age: userAge } = user;
```

Puedes leerlo como "obtén el valor de user.name y asígnalo a una nueva variable llamada userName" y así sucesivamente. El valor de userName sería la cadena John Doe, y el valor de userAge sería el número 34.


### Usa sintaxis de desestructuración para asignar variables desde objetos anidados

Puedes usar los mismos principios de las dos lecciones anteriores para desestructurar los valores desde objetos anidados.

Usando un objeto similar a los ejemplos anteriores:
```javascript
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```
Así es como se extraen los valores de propiedades de objetos y se los asigna a variables con el mismo nombre:

```javascript
const { johnDoe: { age, email }} = user;
```

Y así es como se puede asignar los valores de las propiedades de un objeto a variables con diferentes nombres:

```javascript
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

### Usa sintaxis de desestructuración para asignar variables desde arreglos

ES6 hace que desestructurar arreglos sea tan fácil como desestructurar objetos.

Una diferencia clave entre el operador de propagación y la desestructuración de arreglos es que el operador de propagación desempaca todos los contenidos de un arreglo en una lista separada por comas. En consecuencia, no puedes elegir qué elementos deseas asignar como variables.

Desestructurar un arreglo nos permite hacer exactamente eso:

```javascript
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```

La consola mostrará los valores de a y b como 1, 2.

A la variable a se le asigna el primer valor del arreglo, y a b se le asigna el segundo valor del arreglo. También podemos acceder al valor en cualquier índice de un arreglo con la desestructuración usando comas para alcanzar el índice deseado:

```javascript
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```

La consola mostrará los valores de a, b, y c como 1, 2, 5.


### Utiliza la sintaxis de desestructuración con el parámetro rest para reasignar elementos de un arreglo

En algunas situaciones que implican la desestructuración de arreglos, tal vez queramos recolectar el resto de elementos en un arreglo separado.

El resultado es similar a Array.prototype.slice(), como se muestra a continuación:

```javascript
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

La consola mostrará los valores 1, 2 y [3, 4, 5, 7].

Las variables a y b toman el primer y segundo valor del arreglo. Después de eso, debido a la presencia del parámetro rest, arr obtiene el resto de los valores en forma de un arreglo. El elemento rest sólo funciona correctamente como la última variable en la lista. Por ejemplo, no puedes usar el parámetro rest para capturar un sub-arreglo que deje fuera el último elemento del arreglo original.