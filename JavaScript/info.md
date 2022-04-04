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