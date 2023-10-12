CREATE TABLE product_info (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pName VARCHAR(63) NOT NULL,
    pPrice FLOAT(7) NOT NULL,
    pCode VARCHAR(63) NOT NULL, --Unique ID of the product
    pPromo VARCHAR(63), --Can be empty
    pQty INT(7) NOT NULL,
    pCategory ENUM('Chicken Inasal','Halo - Halo','Palabok','Pork BBQ','Liempo','Sisig','Empanada','Group Sizes'),
    pSize VARCHAR(7) NOT NULL,
    pWeight FLOAT(7) NOT NULL,
    pDetails TEXT
);
