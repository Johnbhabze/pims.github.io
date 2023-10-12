CREATE TABLE product_info (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pName VARCHAR(63) NOT NULL,
    pPrice FLOAT(7) NOT NULL,
    pCode VARCHAR(63) NOT NULL, --Unique ID of the product
    pPromo VARCHAR(63),
    pQty INT(7) NOT NULL,
    pCategory ENUM('','','',''),
    pBrand ENUM('','','',''),
    pUnit ENUM('g','mg','kg','lb','oz','mL','L'),
    pUnit VARCHAR(63),
    pWeight FLOAT(7) NOT NULL,
    pDetails TEXT
);
