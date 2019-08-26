
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


---------

## Contribuciones

### Requisitos

Antes de iniciar debes tener previamente instalados:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)

## Instalación

En una carpeta vacía de tu equipo escribe el siguiente comando en la terminal:

```
git clone https://github.com/swanix/ui.git
```

Cuando se termine de clonar el proyecto escribe el comando:

```
npm install
```
Este comando instalará las dependencias de Node.js especificadas en el archivo `package.json` (en esencia se trata de [Gulp.js](http://gulpjs.com/) y una serie de plugins necesarios para automatizar algunas tareas de desarrollo).

Las dependencias se instalan en la carpeta `node_modules` (creada automáticamente con el comando `npm install`) y luego de instaladas podemos utilizar Gulp para ver nuestra página de inicio con:

```
npm run watch
```
Este comando ejecuta un servidor estático que apunta a la carpeta `docs` este abrirá el navegador de forma automática mostrando el sitio de prueba con ejemplos del framework y observando si se realizan cambios en los archivos de la carpeta `src` para generar el código de estilos CSS y HTML.

## Estructura de Directorios

```sh
ui/  # Carpeta raíz del repositorio
│
├── dist/               # Código generado para producción       
│   ├── swanix-icons.svg 
│   ├── swanix-icons.css    
│   └── swanix-icons.js
│
├── docs/               # Documentación y demos     
│   ├── assets/
│   ├── content/
│   └── index.html
│       
├── src/               # Código fuente para desarrollo      
│   ├── _figma/
│   ├── icon1.svg        
│   ├── icon2.svg   
│   ├── icon3.svg  
│   ├── ... 
│   └── icon40.svg
│ 
│       
├── README.md       
├── gulpfile.js     # Tasks de Gulp
└── package.json    # Dependencias de Node.js
│
└---------------------------------------------------------
```

Cuando ejecutamos el comando `npm run watch` cualquier cambio realizado en los archivos de la carpeta `src` se compilarán en la carpeta `dist` utilizando el plugin `gulp-sass`.


## Módulos de Node.js

Para el desarrollo se utilizan los siguientes módulos de Node.js (la mayoría son plugins de Gulp).

|Módulo|Versión|Descripción|
|--- |--- |--- |
|browser-sync|2.18.12|Permite ejecutar un servidor local y visualizar nuestro sitio en múltiples navegadores remotos en tiempo real.|
|gulp|4.0.2|Módulo oficial de Gulp para Node.js|
|gulp-rename|1.2.2|Permite renombrar archivos con el nombre que le especifiquemos|
|gulp-plumber|1.1.0|Permite manejar e identificar errores en tiempo de ejecución.|
|gulp-header|2.0.7|Permite añadir encabezados a cualquier archivo.|
|gulp-svgmin|1.2.3| Permite minificar y optimizar archivos SVG|
|gulp-svgstore|6.1.0| Permite fusionar archivos SVG individuales en un solo sprite SVG|
|gulp-cheerio|0.6.3| Permite modificar elementos HTML y XML con Cheerio|
|gulp-data|1.3.1| Permite generar datos a partir de diferentes fuentes: json, front-matter, databases, promises, etc.|

-------

## Licencia

The MIT License (MIT)

Copyright (c) 2016 - present 

Sebastian Serna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.