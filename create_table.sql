CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE categories (
    id bigserial NOT NULL PRIMARY KEY UNIQUE,
    name varchar(128) UNIQUE NOT NULL
  );

CREATE TABLE products (
    id uuid NOT NULL DEFAULT uuid_generate_v4() UNIQUE,
    name varchar(256) NOT NULL,
    price decimal(9, 2) NOT NULL,
    category_id bigserial NOT NULL,
  	FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
  );
