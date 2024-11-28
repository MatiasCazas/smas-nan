# ** Prueba tecnica - API Nodejs con mongodb y exportacion csv **

## ** Instalar y levantar la app ** 

```bash
git clone https://github.com/MatiasCazas/smas-nan.git

cd smas-nan/

npm i

docker-compose up -d
```

## ** Dependencias del proyecto**

- express: Framework para crear aplicaciones web y APIs.

```bash
npm install express
```

- mongoose: Libreria de modelado de datos de objetos (ODM) para trabajar con MongoDB.

```bash
npm install mongoose
```

- axios: Libreria para realizar peticiones HTTP.

```bash
npm install axios
```

- csv-writter: Libreria para generar archivos CSV.

```bash
npm install csv-writter
```

- dotenv: Herramienta para el manejo de variables de entorno:

```bash
npm install dotenv
```

## **Características**
- Consumo de la API externa [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).
- Persistencia de datos usando MongoDB.
- Generación de archivos CSV descargables.

## ** Endpoints **

- GET /api/external-data

Descripción:

Este endpoint consume una API externa (https://jsonplaceholder.typicode.com/posts) para obtener datos de ejemplo. Los datos recuperados se almacenan en la base de MongoDB.

Respuesta exitosa:
```bash
    {
        "message": "Datos guardados"
    }
```
Errores comunes:
~500 Internal server error: Si ocurre algun problema al consumir la API externa o al guardar los datos en la base de datos.


- GET /api/data

Descripcion:

Este endpoint permite recuperar los datos almacenados en la base de datos de MongoDB. 

Respuesta exitosa:
```bash
    [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
    ]
```
- GET /api/export-csv

Descripcion:

Este endpoint genera un archivo CSV que contiene los datos almacenados en la base de MongoDB y lo envia como descarga al cliente. 

Respuesta exitosa:

Descarga el archivo data.csv que contiene las columnas User ID, ID, Title y Body.

Ejemplo de csv:
```bash
User ID,ID,Title,Body
1,1,sunt aut facere repellat provident occaecati excepturi optio reprehenderit,quia et suscipit
1,2,qui est esse,est rerum tempore vitae
```
