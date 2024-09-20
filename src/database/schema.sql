CREATE DATABASE shopdimy;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
);

CREATE TABLE IF NOT EXISTS products(
     id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
     name VARCHAR NOT NULL,
     date DATE NOT NULL,
     quantity INTEGER,
     category_id UUID,
     FOREIGN KEY(category_id) REFERENCES categories(id)
);
