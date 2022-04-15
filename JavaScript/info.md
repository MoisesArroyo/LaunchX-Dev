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