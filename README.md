# GlamStudio MakeUp

Aplicación web [glamstudio.com.ar] en ReactJS - Tienda virtual Full Stack MERN

Con registro, login, oauth de Google y Facebook, carrito, historial de compras.

Para administradores: subida de productos, edición, historial de ventas.

Núcleo tomado de [jaewonhimnae/react-shop-app] y luego completado y personalizado.

Escrita en ReactJS y NodeJS, base de datos clouster de Atlas (MongoDB).

Corriendo en AWS EC2 por NginX con proxy inverso a PM2, dominio comprado en godaddy.

-------------------------------------------------------------------------------------------------

For use: create a env.json file in the root folder and:
{
    "PORT_BACKEND": 5000,
    "DB_CONECTION": "mongodb...",
    "access_token": "...",   (Mercado Libre)
    "ENV": "dev"   (or "prod")
}

 [glamstudio.com.ar]: <http://glamstudio.com.ar>
 [jaewonhimnae/react-shop-app]: <https://github.com/jaewonhimnae/react-shop-app>
