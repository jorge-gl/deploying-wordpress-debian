# `06` Valida tu instalación

Si ya lograste ver tu sitio web estás listo para validar tu instalación. Este paso es consiste en ejecutar un script de verificación para validar lo solicitado en ésta práctica, para ello sigue los siguientes pasos:

## 1. Habilitar el puerto público

Para que learnpack pueda recibir la información que se enviará desde tu maquina, es necesario habilitar el acceso público del puerto, que por seguridad viene privado por defecto.

Para ello selecciona la pestaña "Puertos" en el panel inferior de codespace, ahi verás los puertos que se están utilizando. Necesitas publicar el puerto `3001` y para ello has click con el botón derecho del mouse en el puerto, ve al menú `Visibilidad del puerto` y selecciona la opción `Público`

![Puerto público](../../../../.learn/assets/public-ports.png)

## 2. Ejecuta el script de validación `validate-wordpress-site.sh`

Una vez que hayas ejecutado el script para verlo funcionar, y lo hayas agregado las tareas cron, es hora de validar.

En el escritorio de tu máquina Debian conseguirás una carpeta llamada `cybersecurity-scripts` y dentro una correspondiente al modulo `03-servers`. Dentro de esta carpeta debes ejecutar con bash el script `validate-wordpress-site.sh`. Al ejecutarlo te solicitará la dirección de learnpack que puedes ver en el archivo `url.txt` de este repositorio.

Si todo sale bien, en la terminal verás un mensaje confirmándote que los datos fueron enviados.

## 3. Ejecuta la prueba

Una vez ejecutado el script con éxito, podrás ejecutar la prueba para validar tu instalación de Windows en VirtualBox.

![Script Windows](../../../../.learn/assets/script-test.png)

## 4. ¡Listo!

Si lograste pasar las pruebas, ya has desplegado un sitio Wordpress en un servidor Debian. De esta forma podrás experimentar con escenarios que pongan a prueba tus habilidades de ciberseguridad y monitoreo de eventos.

Si tienes algún problema no dudes en recurrir a un mentor o a los demás canales de apoyo que te ofrece 4Geeks.
