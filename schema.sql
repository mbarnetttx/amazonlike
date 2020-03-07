DROP DATABASE IF EXISTS amazon_DB;
CREATE DATABASE amazon_DB;

USE amazon_DB;

CREATE TABLE products(
item_id INTEGER (11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR (50),
department_name VARCHAR (50),
price INTEGER (225),
stock_quantity INTEGER (50),
primary key (item_id)
);

-- CREATE TABLE userauth(
--   id INT NOT NULL AUTO_INCREMENT,
--   username VARCHAR(45) NOT NULL,
--   userpass VARCHAR(45) NOT NULL,
--   PRIMARY KEY (id)
-- )

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Granola', 'Food', '5', '50');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Apples', 'Food', '4', '50');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Yogurt', 'Food', '8', '50'); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Universal_Remote', 'Electronics', '20', '75');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Nintento_Switch', 'Electronics', '450', '10');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Metal_Detector', 'Electronics', '600', '5');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Shoes', 'Apparel', '40', '15');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Jacket', 'Apparel', '75', '50'); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Ski_Pants', 'Apparel', '100', '25');


