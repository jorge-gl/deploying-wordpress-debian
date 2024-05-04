# `05` Wordpress site configuration

Once you have copied the files to your web folder it is time to configure your site for operation. 

The first thing you should do is copy the `wp-config-sample.php` file and create one called `wp-config.php`, which will contain the wordpress database access parameters (the `wp-config-sample.php` file works as a template). Once in there you will need to update the database access parameters.

![Wordpress params](.learn/assets/wp-config-params.png)

If everything works fine when you open in the browser the address [localhost/wordpress](localhost/wordpress) you will see a web page where you must enter the title of the site and you will be asked for the data of what will be the administrator user of your Wordpress website.

![Wordpress settings](.learn/assets/wordpress-setup.png)

## 📝 Instructions

1. Copy the folder extracted from the wordpress zip file to the `/var/www/html` folder.
2. Configure the wp-config.php file with the database access parameters.
3. Enter the local address of your wordpress [localhost/wordpress](localhost/wordpress) and configure the site data.

## 💡Hint

- Any errors in the configuration of the `wp-config.php` file you will see when you enter the address [localhost/wordpress](localhost/wordpress). The message may tell you where the error is

- If your virtual machine is on a Nat Network, Host Only Network or uses a bridged adapter, you can use the ip address of the virtual machine to view the website from other computers.

- If you have made any configuration changes or installations on the web server, you may need to restart the apache service with the following command:

> sudo systemctl restart apache2