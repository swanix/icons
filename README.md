
# Swanix Icons

Minimal icon set

https://swanix.org/icons


Este proyecto se encuentra en una etapa experimental, puede contener inconsistencias y cambios inesperados sin previo aviso.


## ¿Cómo utilizar el set de iconos?

### Método 1 - Sprite SVG como archivo externo

Descarga los archivos de la carpeta `dist`

- swanix-icons.svg
- swanix-icons.css

Incluye la referencia del archivo CSS en el `<head>` de tu HTML, esta hoja de estilos contiene algunas clases para definir el tamaño y color de los iconos así como algunas propiedades generales:

```html
<link rel="stylesheet" href="path/to/swanix-icons.css" type="text/css" /> 
```

Luego puedes incluir un icono del sprite con el siguiente código:

```html
<svg class="icon"><use xlink:href="path/to/swanix-icons.svg#home"></use></svg>
```

En el anterior ejemplo se mostrará el icono `home` (la palabra después del símbolo `#` corresponde al nombre del icono) puedes cambiarla para mostrar cualquiera de los [iconos disponibles](https://swanix.org/icons)  

Advertencia: con este método el archivo SVG debe encontrarse en el mismo dominio donde se cargan los archivos HTML, de lo contrario no se mostrará correctamente el sprite, esto se debe a una limitación de seguridad de los archivos XML para ser cargados desde dominios externos (son bloqueados por algunos navegadores). Para saber más puedes leer el siguiente artículo: [Understanding CORS and SVG](https://oreillymedia.github.io/Using_SVG/extras/ch10-cors.html) 


### Método 2 - Sprite SVG como archivo en CDN

Este método es todavía experimental y consiste en inyectar el sprite SVG vía AJAX, de esta manera evitamos el bloqueo del archivo cuando lo utilizamos desde un dominio diferente al principal, esto es ideal cuando trabajamos con un CDN para almacenar nuestros archivos estáticos. Para probar su funcionamiento puedes incluir en el `<head>` de tu HTML los archivos que apuntan a nuestro CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/swanix/icons/dist/swanix-icons.css"/>
<script src="https://cdn.jsdelivr.net/gh/swanix/icons/dist/swanix-icons.js"></script>
```

Para incluir los iconos debes omitir la ruta completa al archivo, solo es necesario escribir el nombre del icono:

```html
<svg class="icon"><use xlink:href="#home"></use></svg>
```

En el ejemplo anterior se mostrará el icono `home` en el HTML. Puedes probar tú mismo utilizando esta [plantilla de CodePen](https://codepen.io/pen?template=942b289b3aad6cf8192d1ac90e27f6d3) que incluye los archivos que apuntan a nuestro CDN.

También puedes descargar los 3 archivos (CSS, SVG y JS) para incluirlos en tu propio CDN, pero recuerda que debes referenciar la nueva ruta del sprite SVG en el archivo `swanix-icons.js`:

```js
ajax.open("GET", "url/to/cdn/swanix-icons.svg", true);
```

Este método se basa en el artículo [Ajaxing for your SVG Sprite](https://css-tricks.com/ajaxing-svg-sprite/)


## Licencia

The MIT License (MIT)

Copyright (c) 2016 - presente 

Sebastian Serna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.