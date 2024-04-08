CREATE DATABASE citypopulation;
use citypopulation;

CREATE TABLE cities (
    cityid SERIAL PRIMARY KEY,
    name VARCHAR(255),
    totalpopulation INT
);

CREATE TABLE residenttypes (
    residenttypeid SERIAL PRIMARY KEY,
    cityid INT,
    name VARCHAR(255),
    language VARCHAR(255),
    FOREIGN KEY (cityid) REFERENCES cities(cityid)
);

INSERT INTO cities (name, totalpopulation) VALUES
('Minsk', 2000000),
('Gomel', 500000),
('Mogilev', 350000),
('New York', 8623000),
('London', 8900000),
('Sydney', 5000000),
('Tokyo', 9273000),
('Paris', 2148000);

INSERT INTO residenttypes (cityid, name, language) VALUES
(1, 'Belarusian', 'Belarusian'),
(2, 'Belarusian', 'Belarusian'),
(3, 'Belarusian', 'Belarusian'),
(4, 'American', 'English'),
(5, 'British', 'English'),
(6, 'Australian', 'English'),
(7, 'Japanese', 'Japanese'),
(8, 'French', 'French');
