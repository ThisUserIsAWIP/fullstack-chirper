-- CREATE DATABASE chirpr;
-- USE chirpr;
CREATE TABLE Users (
	id int not null auto_increment primary key,
    name varchar(10) not null,
    email varchar(255)  not null,
    password varchar(100) not null,
    _created datetime default current_timestamp
);
CREATE TABLE Chirps (
id int not null auto_increment primary key,
userid int, FOREIGN KEY(userid) REFERENCES Users(id),
content varchar(255) not null,
_created datetime default current_timestamp
);

CREATE USER 'chirpr_app'@'localhost' IDENTIFIED WITH mysql_native_password BY 'chirpr_pass';
GRANT ALL PRIVILEGES ON chirpr_database.* TO 'chirpr_app'@'localhost';
FLUSH PRIVILEGES;

select user(), chirpr_app();

ALTER TABLE Users
DROP COLUMN password,
DROP COLUMN email;