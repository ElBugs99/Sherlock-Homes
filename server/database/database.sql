CREATE DATABASE sherlockHomes;

CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    priceString VARCHAR(255),
    priceNumber VARCHAR(255), --guardado como texto
    atributes TEXT,
    location TEXT,
    imageUrl TEXT,
    url TEXT
);