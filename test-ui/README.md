# Medical patient list

## How to run?

Clone this code to your local repository

### git clone https://github.com/ArturKazan/TestPakage.git

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Database

In MySql create a database using following scrip:

###For database
CREATE DATABASE *your database name*
###For table
**First table**

CREATE TABLE comments (
patient_id varchar(45) NOT NULL,
comment_text varchar(45) NOT NULL,
comment_id varchar(45) NOT NULL,
comment_date date DEFAULT NULL,
PRIMARY KEY (comment_id),
CONSTRAINT fk_comments_1 FOREIGN KEY (comment_id) REFERENCES patients (unique_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

**Second table**

CREATE TABLE patients (
unique_id varchar(45) NOT NULL,
first_name varchar(45) DEFAULT NULL,
last_name varchar(45) DEFAULT NULL,
birth_date datetime DEFAULT NULL,
sex bit(1) DEFAULT NULL,
country varchar(45) DEFAULT NULL,
adress varchar(45) DEFAULT NULL,
state varchar(45) DEFAULT NULL,
PRIMARY KEY (unique_id),
UNIQUE KEY unique_id_UNIQUE (unique_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

###Set username and password in file application.properties
##Run project and write 'npm start' in terminal