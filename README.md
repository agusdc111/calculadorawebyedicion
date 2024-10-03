# Calculadora de Productos

Esta es una aplicación web que permite seleccionar productos y calcular el total en función de la cantidad y el precio de cada uno. Además, forma parte de un sistema más amplio que incluye una aplicación secundaria para editar los productos y sus categorías, almacenados en un archivo JSON.

## Características

- **Calculadora de Productos**: Selecciona productos, ajusta la cantidad y calcula el total.
- **Editor de Productos**: Agrega, elimina y modifica productos y categorías.

## Tecnologías Utilizadas

- **Frontend**: HTML, CSS, JavaScript, React (a través de un CDN)
- **Backend**: Node.js, Express, http-auth
- **Almacenamiento**: Archivo JSON

## Estructura del Proyecto

- `index.html`: Página principal de la calculadora de productos.
- `editar.html`: Página del editor de productos.
- `script.js`: Lógica del editor de productos.
- `server.js`: Servidor Express para servir las aplicaciones y manejar el archivo JSON.
- `styles.css`: Estilos para el editor de productos.
- `products.json`: Archivo JSON que almacena los productos y sus categorías.
- `usuarios.txt`: Lista de usuarios y contraseñas para editar productos

## Dependencias

Para ejecutar este proyecto, necesitas tener instaladas las siguientes dependencias:

- Node.js (Instalado previamente)
- Express
- Body-parser
- http-auth

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/agusdc111/calculadorawebyedicion.git
    cd calculadorawebyedicion
    ```

2. Instala las dependencias:
    ```bash
    npm install express body-parser http-auth
    ```

3. Inicia el servidor:
    ```bash
    node server.js
    ```

4. Abre tu navegador y navega a `http://localhost:5000` para ver la calculadora de productos.

5. Para acceder al editor de productos, navega a `http://localhost:5000/editar`.

## Uso

### Calculadora de Productos

1. Abre `http://localhost:5000` en tu navegador.
2. Selecciona una categoría de productos.
3. Ajusta la cantidad de cada producto usando los botones `+` y `-`.
4. Haz clic en "Ver total" para ver el resumen y el total de la compra.
5. Haz clic en "Limpiar carrito" para reiniciar la selección de productos.

### Editor de Productos

1. Abre `http://localhost:5000/editar` en tu navegador.
2. Ingresa alguno de los usuarios y contraseñas que se encuentran en el archivo `usuarios.txt` (Por default se encuentran los usuarios admin:admin y guest:guest)
3. Para agregar una nueva categoría, escribe el nombre de la categoría en el campo "Nueva categoría" y haz clic en "Agregar Categoría".
4. Para eliminar una categoría, haz clic en "Eliminar Categoría" junto a la categoría que deseas eliminar.
5. Para agregar un producto a una categoría, haz clic en "Agregar Producto" y proporciona el nombre y precio del producto.
6. Para eliminar un producto, haz clic en "Eliminar" junto al producto que deseas eliminar.
7. Para guardar cambios en nombres y/o precios, haz clic en "Guardar Cambios".

## Contribución

Las contribuciones son bienvenidas. Por favor, sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza los cambios necesarios y haz commit (`git commit -m 'Agrega nueva característica'`).
4. Sube los cambios a tu repositorio (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.
