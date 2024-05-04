# `02` Crea la base de datos

Como puedes haber intuido nuestra aplicación Wordpress necesitará una base de datos para almacenar toda la infomación que necesite. En el paso anterior vimos como instalar el servidor mariadb, ahora solo falta configurar la base de datos para la ejecución de wordpress. Para ello necesitamos lo siguiente

1. Crear un usuario con clave para acceder a la base de datos de forma segura
2. Crear una base de datos en el servidor para que aloje la información de Wordpress
3. Otorgar permiso total al usuario sobre la base de datos que se creo para Wordpress

Es importante tomar nota de los parámetros que se utilizan para acceder a la base de datos, puesto que luego necesitarán ser configurados en Wordpress para su despliegue. Para efectos de este ejercicio los parámetros serán los siguientes.

- **Usuario**: wordpress_user
- **Clave**: wordpressSuperSecurePassword
- **Base de datos**: wordpress_db

## 📝 Instrucciones

Debido a que el uso de SQL está fuera del alcance de este contenido, te facilitamos un comando que se encargará de configurar la base de datos por ti.

Ejecuta el siguiente comando como administrador:

>sudo mysql -u root -p -e "CREATE USER 'wordpress_user'@'localhost' IDENTIFIED BY 'wordpressSuperSecurePassword'; CREATE DATABASE wordpress_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;GRANT ALL PRIVILEGES ON wordpress_db.* TO 'wordpress_user'@'localhost';"

## 💡Pista

Si estuvieras desplegando Wordpress en un hosting el proveedor sería el encargado de proporcionarte la información de acceso a tu base de datos.