# Hojas de estilo en cascada

Son archivos que funcionan con html para los estilos

Lenguaje basado en reglas. Las reglas determinaran el estilo que se aplicara a nuestro archivo .html

3 opciones para Css:

- Estilos en linea
- < style > < /style >
- Archivo.css

El estilo se añade directamente a la etiqueta de apertura del elemento HTML
Ejemplo
< h2 style="color: red">Moises< /h2 >

Añadimos el elemento style dentro de head para describir el estilo
Ejemplo:
< head >
    < style >
        h2 {
            color: blue;
        }
    < /style >
< /head >

Todos los títulos h2 tendrán este color dentro de nuestro archivo html
Se cre aun archivo tipo .css para definir los estilos de nuestro html
usaremos las reglas de estilo css para acceder a el archivo html

## Padding

Distancia entre el contenido de un elemento html y su borde
Padding a cada lado:

Padding -> botón, right, top, left, asi damos margen a cada lado del padding

## padding en una linea

El padding se puede definir en una sola linea en dirección a las manecillas de reloj, ejemplo de
padding: 20(top), 20(derecha), 20(abajo), 20(izquierda)

## Margen

Es la distancia entre el borde de un elemento y el borde de otros elementos.
Ahora queremos separar un borde de otro borde
Tambien podemos poner el margen que deseemos
De igual forma podemos agregar en una línea lo que son los margenes. De igual forma es en dirección a las manecillas del reloj.

## Padding vs Margin

- Padding es la distancia entre la imagen y el contenido de ese elemento y su borde.
- Margin es la distancia entre el final del padding y el elemento consiguiente cercano.

## Selectores de Atributos

### Selectores de presencia y valor

- Estos selectores permiten seleccionar un elemento solo a partir de la presencia de un atributo(por ejemplo href) o partir de varias coincidencias diferentes con respecto al valor del atributo

## Unidades Absolutas y relativas

- 200px de ancho

* Pixeles

- 20vw de Ancho 

* Viewport, son unidades relativas por que son relativas a otros valores

- 15 em de Ancho    

* Depende del tamaño de la letra del contenedor y el tamaño de la letra.

### Unidades de longitudes absolutas 

Todas las unidades siguientes son unidades de longitud absoluta: No son relativas a nada más y en general se considera que siempre tienen el mismo tamaño

cm -> 1cm = 96px/2,54cm
mm -> 1mm = 1/10 de 1cm
Q -> 1Q = 1/40 de 1cm
in -> 2,54cm = 96px
px = 1/96 de 1 in

### Unidades de longitud relativa

Son relativas a algo más, el tamaño de la letra del elemento principal o al tamaño de la ventana gráfica. La ventaja de usar unidades relativas es que con una planificación cuidadosa puedes lograr que el tamaño del texto u otros elementos escalen en relación con todo lo demás en la pagina. En la tabla siguiente se enumeran algunas de las unidades más útiles para el desarrollo WEB.

> em -> Tamaño de letra del elemento padre, en el caso de propiedades tipográficas como font-size y tamaño de la fuente

> ex -> Altura de la fuente

> rem -> tamaño de la letra del elemento raíz

> lh -> Altura de la línea del elemento

### Priorizar un estilo sobre otro

En CSS se prioriza el tipo de elemento o ultimo elemento en CSS.
Entre dos etiquetas tipo class en el archivo css, se asigna de acuerdo al ultimo declarado.

Entre un selector genérico sobre una etiqueta, la clase tiene precedencia por ser más especifico, por eso aun no seá el ultimo tendrá prioridad.

### ID vs CLASS

El id tiene prioridad sobre la clase. Es porque es más especifico.

El estilo en linea se prioriza aun encima por los Id's
Pero si quiero priorizar un valor dentro de un class, Id o style
debo agregar

> !important;

>.text-azul{
> color: blue !important;     
>}
Los anterior hace que se elige como importante esa clase.

### Colores en CSS

Existen colores en hexadecimal

00     00   00
Rojo Verde Azul

### Variables en CSS