# `02` Create the database

As you may have guessed our wordpress application will need a database to store all the information it needs. In the previous step we saw how to install the mariadb server, now we only need to configure the database to run wordpress. To do this we need the following

1. Create a user with a password to access the database in a secure way.
2. Create a database on the server to host the wordpress information.
3. Grant full permission to the user on the database that was created for Wordpress.

It is important to take note of the parameters that are used to access the database, since they will need to be configured in Wordpress for its deployment. For the purposes of this exercise the parameters will be the following.

- **User**: wordpress_user
- **Password**: wordpressSuperSecurePassword
- **Database**: wordpress_db

## 📝 Instructions

Since the use of SQL is beyond the scope of this content, we provide you with a command that will take care of setting up the database for you.

Run the following command as an administrator:

>sudo mysql -u root -p -e "CREATE USER 'wordpress_user'@'localhost' IDENTIFIED BY 'wordpressSuperSecurePassword'; CREATE DATABASE wordpress_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;GRANT ALL PRIVILEGES ON wordpress_db.* TO 'wordpress_user'@'localhost';"

## 💡Hint

If you were deploying Wordpress on a hosting the provider would be in charge of providing you with the access information to your database.