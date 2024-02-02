const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./myDatabase.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the myDatabase database.');
});

db.serialize(() => {
  db.run(`
CREATE TABLE USER (
    user_id INTEGER PRIMARY KEY,
    username TEXT,
    email TEXT,
    password TEXT,
    other_attributes TEXT
)`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  db.run(`
CREATE TABLE PRODUCT (
    product_id INTEGER PRIMARY KEY,
    title TEXT,
    description TEXT,
    brand TEXT,
    price REAL,
    discounted_price REAL,
    vat REAL,
    gained_points INTEGER,
    benefits TEXT,
    overview TEXT,
    gender TEXT,
    capacity TEXT,
    model_number TEXT
)`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  db.run(`
CREATE TABLE PRODUCT_IMAGES (
    image_id INTEGER PRIMARY KEY,
    product_id INTEGER,
    url TEXT,
    is_main INTEGER,
    FOREIGN KEY(product_id) REFERENCES PRODUCT(product_id)
)`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  db.run(`
CREATE TABLE PRODUCT_RATINGS (
    rating_id INTEGER PRIMARY KEY,
    product_id INTEGER,
    user_id INTEGER,
    rating INTEGER,
    comment TEXT,
    timestamp TEXT,
    FOREIGN KEY(product_id) REFERENCES PRODUCT(product_id),
    FOREIGN KEY(user_id) REFERENCES USER(user_id)
)`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  db.run(`
CREATE TABLE USER_CART (
    cart_id INTEGER PRIMARY KEY,
    user_id INTEGER UNIQUE,
    product_id INTEGER,
    quantity INTEGER,
    FOREIGN KEY(user_id) REFERENCES USER(user_id),
    FOREIGN KEY(product_id) REFERENCES PRODUCT(product_id)
)`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  db.run(`
CREATE TABLE CATEGORIES (
    category_id INTEGER PRIMARY KEY,
    title TEXT,
    slug TEXT,
    parent_category_id INTEGER,
    FOREIGN KEY(parent_category_id) REFERENCES CATEGORIES(category_id)
)`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  db.run(`
CREATE TABLE PRODUCT_CATEGORIES (
    product_id INTEGER,
    category_id INTEGER,
    PRIMARY KEY (product_id, category_id),
    FOREIGN KEY(product_id) REFERENCES PRODUCT(product_id),
    FOREIGN KEY(category_id) REFERENCES CATEGORIES(category_id)
)`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  console.log('tables created.');
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});