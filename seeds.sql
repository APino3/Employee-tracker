DROP SCHEMA IF EXISTS employee_tracker; 
CREATE DATABASE employee_tracker; 
USE employee_tracker; 

DROP TABLE IF EXISTS department; 
DROP TABLE IF EXISTS role ;
DROP TABLE IF EXISTS employee; 

CREATE TABLE department (
	id INT PRIMARY KEY, 
    name VARCHAR(30)
); 

CREATE TABLE role (
	id INT PRIMARY KEY,
    title VARCHAR (30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
	id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT, 
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);



INSERT INTO department (id, name) VALUES
	(100, 'Finance'), 
    (125, 'Engineering'), 
    (150, 'Human Resources');
    

INSERT INTO role (id, title, salary, department_id ) VALUES 
	(200, 'CPA', 35000, 100), 
    (225, 'CFO', 40000, 100), 
    (250, 'Admin', 45000, 150); 


INSERT INTO employee VALUES
	(25, 'Vanessa', 'Smith', 200, NULL), 
    (50, 'Johnny', 'Roberts', 225, 25), 
    (75, 'Katherine', 'Walters', 250, 50);