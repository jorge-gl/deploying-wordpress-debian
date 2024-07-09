#!/bin/bash

apache_status=$(eval "systemctl status apache2|grep active");

mariadb_status=$(eval "systemctl status mariadb|grep active");

site_data=$(eval "curl -s http://localhost/wordpress/index.php/wp-json/wp-site-health/v1");

data='{"apacheStatus":"'$apache_status'","databaseStatus":"'$mariadb_status'","siteData":'$site_data'}'

echo "$data" > report.json
