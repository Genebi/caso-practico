CREATE DATABASE IF NOT EXISTS Festival CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE Assistants (
	id int(11) AUTO_INCREMENT NOT NULL,
	name varchar(100) COLLATE utf8_spanish_ci NOT NULL,
	age int(2) DEFAULT NULL,
	city varchar(50) COLLATE utf8_spanish_ci NOT NULL,
	hobbies text COLLATE utf8_spanish_ci DEFAULT NULL,
	date datetime NOT NULL,
	PRIMARY KEY (id)
);