const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./myDatabase.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the myDatabase database.');
});

// delete data if exists
db.serialize(() => {
  db.run(`
    DELETE FROM USER`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  db.run(`
    DELETE FROM PRODUCT`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  db.run(`
    DELETE FROM PRODUCT_IMAGES`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  db.run(`
    DELETE FROM PRODUCT_RATINGS`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  db.run(`
    DELETE FROM PRODUCT_CATEGORIES`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  db.run(`
    DELETE FROM CATEGORIES`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });
});

db.serialize(() => {
  db.run(`
INSERT INTO USER (username, email, password)
VALUES ('Aya98', 'aya@example.com', 'password')`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  db.run(`
INSERT INTO PRODUCT (title, description, brand, price, discounted_price, vat, gained_points, benefits, overview, gender, capacity, model_number)
VALUES ('Centrum', 'Multivitamin - 30 pcs', 'Multigummies', 1400, 1290, 10.0, 10, 'This is benefits placeholder', 'This is overview placeholder', 'Both', '30 pcs', '119269')`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });

    db.run(`
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES(1, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg', true)`, (err) => {
        if (err) {
            console.error(err.message);
        }
    });

    db.run(`
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES(1, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg', false)`, (err) => {
        if (err) {
            console.error(err.message);
        }
    });

    db.run(`
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES(1, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg', false)`, (err) => {
        if (err) {
            console.error(err.message);
        }
    });

    db.run(`
INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
VALUES(1, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg', false)`, (err) => {
        if (err) {
            console.error(err.message);
        }
    });

    db.run(`
    INSERT INTO PRODUCT_RATINGS (product_id, user_id, rating, comment)
    VALUES (1, 1, 4, 'This is a comment placeholder')`, (err) => {
      if (err) {
        console.error(err.message);
      }
    });

    db.run(`
    INSERT INTO PRODUCT_CATEGORIES (product_id, category_id)
    VALUES (1, 1)`, (err) => {
      if (err) {
        console.error(err.message);
      }
    });

    db.run(`
    INSERT INTO CATEGORIES (title, slug, parent_category_id)
    VALUES ('Nutritional Vitamins', 'nutritional-vitamins', NULL)`, (err) => {
      if (err) {
        console.error(err.message);
      }
    });

});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});