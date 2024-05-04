# `04` Install Wordpress on your server

Once you have the files you should move them to the folder on your web server, this folder is where `apache2` looks for websites when it receives a request. The folder is:

> /var/www/html

## 📝 Instructions

Move the wordpress folder that was extracted from the archive to the web server folder `/var/www/html`.

In order to perform this action you must do it with root permissions, so it is recommended to do it from the terminal.

Note that by default the extracted folder is called "wordpress", you must keep this name for validation in the following steps. So the site folder would be `/var/www/html/wordpress`.