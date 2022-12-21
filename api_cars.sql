USE apicarsdb;

CREATE TABLE brands (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE fuels (
    id INT PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(50) NOT NULL
);

CREATE TABLE models (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    brand_id INT NOT NULL,
    fuel_id INT NOT NULL,
    CONSTRAINT fk_brand_id FOREIGN KEY (brand_id) REFERENCES brands(id),
    CONSTRAINT fk_fuel_id FOREIGN KEY (fuel_id) REFERENCES fuels(id)
);

INSERT INTO fuels (type) VALUES 
	('Gasoline'),
    ('Alcohol'),
    ('Flex'),
    ('Diesel'),
    ('Hybrid'),
    ('Electric');