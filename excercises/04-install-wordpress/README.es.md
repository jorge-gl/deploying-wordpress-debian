# `04` Instala Wordpress en tu servidor

Una vez tengas los archivos deberás moverlos a la carpeta de tu servidor web, esta carpeta es donde `apache2` busca los sitios web cuando recibe una petición. La carpeta es:

> /var/www/html

## 📝 Instrucciones

Mueve la carpeta wordpress que se extrajo del archivo comprimido a la carpeta del servidor web `/var/www/html`.

Para poder realizar esta acción debes hacerla con permisos de root, por lo que es recomendable hacerlo desde la terminal.

Ten en cuenta que por defecto la carpeta extraída se llama "wordpress", debes mantener este nombre para la validación en los pasos siguientes. Asi que la carpeta del sitio sería `/var/www/html/wordpress`