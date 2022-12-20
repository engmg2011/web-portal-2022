# Dockerized Laravel MySql Nginx React

#### This repo is a simple web portal docker containers could be used for starting full stack app using

- PHP 8.1
- Laravel 8.75
- React 18.2
- MySql 
- Phpmyadmin

### Clone and run command
`docker-compose up`
- Then open your "php" container
`docker exec -it <container name> /bin/sh`
- Run the following command to migrate the database
`php artisan migrate`

### Your project should be up and running on
http://localhost:8080

### You can access the phpmyadmin
http://localhost:8085
- username: portal-db-user
- password: portal-db-password


