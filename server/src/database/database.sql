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

INSERT INTO houses
(title, priceString, priceNumber, atributes, location, imageUrl, url)
VALUES
('CASA BONITA', 'UF 7000', '7.000', '3 baños, 5 dorms', 'viña', 'https://elcomercio.pe/resizer/HNec1mVtOB2Wc3wHGTBU1FVEObM=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LR2Z6HNJBZGLDFS65BHD7SJZQU.jpg', 'urlfalsa')
;