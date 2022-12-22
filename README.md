# DFL-Node-3 <br>
## DESARROLLO<br>
<br>
Crear un servior que disponibilice las rutas GET Y POST para consultas y guardar los posts en una base de datos PostgreSQL con paquete pg. <br>
<br>
El FRONT esta diseñado con REACT incluye las consultas HTTP a un servidor local en el puerto 3000 con las rutas correspondientes. <br>
<br>
Para iniciar, ocupa los siguientes comandos en SQL. <br>
<br>

```
CREATE DATABASE likeme;
```

```
CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), descripcion VARCHAR(255), likes INT);
```
## REQUERIMIENTOS
<br>
1.- Habilitar los CORS en el servidor utilizando el paquete npm. <br>
2.- Usar paquete PG para interactuar con la base de datos. <br>
3.- Crear una ruta GET con Express para devolver los registros de una tabla de nuestra data base. <br>
4.- Crear una ruta POST con Express que reciba y almacene en la base de datos un nuevo registro. <br>