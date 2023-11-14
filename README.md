# Internship_task_airtribe

Files Overview
1. app.js
Description: Entry point of the Node.js backend application.

2. db.js
Description: Manages the connection to the MySQL database and might include database-related configurations.

3. leads.js
Description: Handles operations related to leads, such as creating, updating, and searching leads.

4. registrations.js
Description: Manages course registrations, handling user registration for courses.

5. tables.js
Description: Defines and creates database tables, including the schema for instructors, courses, leads, lead comments, etc



 Run "npm install" to install all the dependencies  -> 
This command will read the dependencies section of your package.json file and install the specified packages.

To start the server:-
node app.js


To dockerize:-

run the following command in your terminal:

1. docker run -p 3306:3306 --name=assignment -e MYSQL_ROOT_PASSWORD="12345" -e MYSQL_DATABASE="assignment" -d mysql

 This command does the following things:

 It pulls the image mysql:5.7 from DockerHub and then runs it.
 It starts the MySQL database on port 3306.
 It sets the database password to "12345".
 Lastly, it creates a new database called emails_db.


2. docker build image_name ->> builds the docker image
	
 after that execute the command:-

3. docker run -p 3001:3001 -d image_name

 this command runs a Docker container in the background, mapping port 3001 on the host to port 3001 in the container.
