const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./myDatabase.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the myDatabase database.");
});

// delete data if exists
db.serialize(() => {
  db.run(
    `
        DELETE
        FROM USER`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        DELETE
        FROM PRODUCT`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        DELETE
        FROM PRODUCT_IMAGES`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        DELETE
        FROM PRODUCT_RATINGS`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        DELETE
        FROM PRODUCT_CATEGORIES`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        DELETE
        FROM CATEGORIES`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
});

db.serialize(() => {
  db.run(
    `
        INSERT INTO USER (username, email, password)
        VALUES ('Aya98', 'aya@example.com', 'password')`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT (title, description, brand, price, discounted_price, vat, gained_points, benefits, overview,
                             gender, capacity, model_number)
        VALUES ('Centrum', 'Multivitamin - 30 pcs', 'Multigummies', 1400, 1290, 10.0, 10,
                'A product that leaves your skin calm and fragrant with a light scent all day\nA non-greasy formula that quickly melts into the skin\nRefreshes and moisturizes the skin thanks to jojoba oil and vitamin E\nVery effective on the face, hands, and body\nLet your skin experience tropical wonders with this moisturizing cream', 'Revive your skin and enjoy the delicate moisturizing cream with a joyful zesty scent of tropical fruits. NIVEA Soft Freshies absorbs quickly into the skin, making the skin feel refreshingly moist. Caring formula with Vitamine E and Jojoba Oil makes your skin feel noticeably relaxed, refreshed and smoother. For your handbag or at home: NIVEA Soft. Ingredients:- Aqua, Glycerin, Paraffinum Liquidum, Myristyl Alcohol, Butylene Glycol, Alcohol Denat., Stearic Acid, Myristyl Myristate, Cera Microcristallina, Glyceryl Stearate, Hydrogenated Coco-Glycerides, Simmondsia Chinensis Seed Oil, Tocopheryl Acetate, Lanolin Alcohol (Eucerit), Polyglyceryl-2 Caprate, Dimethicone, Sodium Hydroxide, Carbomer, Phenoxyethanol, Limonene, Coumarin, Citronellol, Parfum.', 'Both', '30 pcs', '119269')`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT (title, description, brand, price, discounted_price, vat, gained_points, benefits, overview,
                             gender, capacity, model_number)
        VALUES ('Centrum', 'Multivitamin - 30 pcs', 'Multigummies', 1400, 1290, 10.0, 10,
                'A product that leaves your skin calm and fragrant with a light scent all day\nA non-greasy formula that quickly melts into the skin\nRefreshes and moisturizes the skin thanks to jojoba oil and vitamin E\nVery effective on the face, hands, and body\nLet your skin experience tropical wonders with this moisturizing cream', 'Revive your skin and enjoy the delicate moisturizing cream with a joyful zesty scent of tropical fruits. NIVEA Soft Freshies absorbs quickly into the skin, making the skin feel refreshingly moist. Caring formula with Vitamine E and Jojoba Oil makes your skin feel noticeably relaxed, refreshed and smoother. For your handbag or at home: NIVEA Soft. Ingredients:- Aqua, Glycerin, Paraffinum Liquidum, Myristyl Alcohol, Butylene Glycol, Alcohol Denat., Stearic Acid, Myristyl Myristate, Cera Microcristallina, Glyceryl Stearate, Hydrogenated Coco-Glycerides, Simmondsia Chinensis Seed Oil, Tocopheryl Acetate, Lanolin Alcohol (Eucerit), Polyglyceryl-2 Caprate, Dimethicone, Sodium Hydroxide, Carbomer, Phenoxyethanol, Limonene, Coumarin, Citronellol, Parfum.', 'Both', '30 pcs', '119269')`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT (title, description, brand, price, discounted_price, vat, gained_points, benefits, overview,
                             gender, capacity, model_number)
        VALUES ('Centrum', 'Multivitamin - 30 pcs', 'Multigummies', 1400, 1290, 10.0, 10,
                'A product that leaves your skin calm and fragrant with a light scent all day\nA non-greasy formula that quickly melts into the skin\nRefreshes and moisturizes the skin thanks to jojoba oil and vitamin E\nVery effective on the face, hands, and body\nLet your skin experience tropical wonders with this moisturizing cream', 'Revive your skin and enjoy the delicate moisturizing cream with a joyful zesty scent of tropical fruits. NIVEA Soft Freshies absorbs quickly into the skin, making the skin feel refreshingly moist. Caring formula with Vitamine E and Jojoba Oil makes your skin feel noticeably relaxed, refreshed and smoother. For your handbag or at home: NIVEA Soft. Ingredients:- Aqua, Glycerin, Paraffinum Liquidum, Myristyl Alcohol, Butylene Glycol, Alcohol Denat., Stearic Acid, Myristyl Myristate, Cera Microcristallina, Glyceryl Stearate, Hydrogenated Coco-Glycerides, Simmondsia Chinensis Seed Oil, Tocopheryl Acetate, Lanolin Alcohol (Eucerit), Polyglyceryl-2 Caprate, Dimethicone, Sodium Hydroxide, Carbomer, Phenoxyethanol, Limonene, Coumarin, Citronellol, Parfum.', 'Both', '30 pcs', '119269')`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT (title, description, brand, price, discounted_price, vat, gained_points, benefits, overview,
                             gender, capacity, model_number)
        VALUES ('Centrum', 'Multivitamin - 30 pcs', 'Multigummies', 1400, 1290, 10.0, 10,
                'A product that leaves your skin calm and fragrant with a light scent all day\nA non-greasy formula that quickly melts into the skin\nRefreshes and moisturizes the skin thanks to jojoba oil and vitamin E\nVery effective on the face, hands, and body\nLet your skin experience tropical wonders with this moisturizing cream', 'Revive your skin and enjoy the delicate moisturizing cream with a joyful zesty scent of tropical fruits. NIVEA Soft Freshies absorbs quickly into the skin, making the skin feel refreshingly moist. Caring formula with Vitamine E and Jojoba Oil makes your skin feel noticeably relaxed, refreshed and smoother. For your handbag or at home: NIVEA Soft. Ingredients:- Aqua, Glycerin, Paraffinum Liquidum, Myristyl Alcohol, Butylene Glycol, Alcohol Denat., Stearic Acid, Myristyl Myristate, Cera Microcristallina, Glyceryl Stearate, Hydrogenated Coco-Glycerides, Simmondsia Chinensis Seed Oil, Tocopheryl Acetate, Lanolin Alcohol (Eucerit), Polyglyceryl-2 Caprate, Dimethicone, Sodium Hydroxide, Carbomer, Phenoxyethanol, Limonene, Coumarin, Citronellol, Parfum.', 'Both', '30 pcs', '119269')`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT (title, description, brand, price, discounted_price, vat, gained_points, benefits, overview,
                             gender, capacity, model_number)
        VALUES ('Centrum', 'Multivitamin - 30 pcs', 'Multigummies', 1400, 1290, 10.0, 10,
                'A product that leaves your skin calm and fragrant with a light scent all day\nA non-greasy formula that quickly melts into the skin\nRefreshes and moisturizes the skin thanks to jojoba oil and vitamin E\nVery effective on the face, hands, and body\nLet your skin experience tropical wonders with this moisturizing cream', 'Revive your skin and enjoy the delicate moisturizing cream with a joyful zesty scent of tropical fruits. NIVEA Soft Freshies absorbs quickly into the skin, making the skin feel refreshingly moist. Caring formula with Vitamine E and Jojoba Oil makes your skin feel noticeably relaxed, refreshed and smoother. For your handbag or at home: NIVEA Soft. Ingredients:- Aqua, Glycerin, Paraffinum Liquidum, Myristyl Alcohol, Butylene Glycol, Alcohol Denat., Stearic Acid, Myristyl Myristate, Cera Microcristallina, Glyceryl Stearate, Hydrogenated Coco-Glycerides, Simmondsia Chinensis Seed Oil, Tocopheryl Acetate, Lanolin Alcohol (Eucerit), Polyglyceryl-2 Caprate, Dimethicone, Sodium Hydroxide, Carbomer, Phenoxyethanol, Limonene, Coumarin, Citronellol, Parfum.', 'Both', '30 pcs', '119269')`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT (title, description, brand, price, discounted_price, vat, gained_points, benefits, overview,
                             gender, capacity, model_number)
        VALUES ('Centrum', 'Multivitamin - 30 pcs', 'Multigummies', 1400, 1290, 10.0, 10,
                'A product that leaves your skin calm and fragrant with a light scent all day\nA non-greasy formula that quickly melts into the skin\nRefreshes and moisturizes the skin thanks to jojoba oil and vitamin E\nVery effective on the face, hands, and body\nLet your skin experience tropical wonders with this moisturizing cream', 'Revive your skin and enjoy the delicate moisturizing cream with a joyful zesty scent of tropical fruits. NIVEA Soft Freshies absorbs quickly into the skin, making the skin feel refreshingly moist. Caring formula with Vitamine E and Jojoba Oil makes your skin feel noticeably relaxed, refreshed and smoother. For your handbag or at home: NIVEA Soft. Ingredients:- Aqua, Glycerin, Paraffinum Liquidum, Myristyl Alcohol, Butylene Glycol, Alcohol Denat., Stearic Acid, Myristyl Myristate, Cera Microcristallina, Glyceryl Stearate, Hydrogenated Coco-Glycerides, Simmondsia Chinensis Seed Oil, Tocopheryl Acetate, Lanolin Alcohol (Eucerit), Polyglyceryl-2 Caprate, Dimethicone, Sodium Hydroxide, Carbomer, Phenoxyethanol, Limonene, Coumarin, Citronellol, Parfum.', 'Both', '30 pcs', '119269')`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT (title, description, brand, price, discounted_price, vat, gained_points, benefits, overview,
                             gender, capacity, model_number)
        VALUES ('Centrum', 'Multivitamin - 30 pcs', 'Multigummies', 1400, 1290, 10.0, 10,
                'A product that leaves your skin calm and fragrant with a light scent all day\nA non-greasy formula that quickly melts into the skin\nRefreshes and moisturizes the skin thanks to jojoba oil and vitamin E\nVery effective on the face, hands, and body\nLet your skin experience tropical wonders with this moisturizing cream', 'Revive your skin and enjoy the delicate moisturizing cream with a joyful zesty scent of tropical fruits. NIVEA Soft Freshies absorbs quickly into the skin, making the skin feel refreshingly moist. Caring formula with Vitamine E and Jojoba Oil makes your skin feel noticeably relaxed, refreshed and smoother. For your handbag or at home: NIVEA Soft. Ingredients:- Aqua, Glycerin, Paraffinum Liquidum, Myristyl Alcohol, Butylene Glycol, Alcohol Denat., Stearic Acid, Myristyl Myristate, Cera Microcristallina, Glyceryl Stearate, Hydrogenated Coco-Glycerides, Simmondsia Chinensis Seed Oil, Tocopheryl Acetate, Lanolin Alcohol (Eucerit), Polyglyceryl-2 Caprate, Dimethicone, Sodium Hydroxide, Carbomer, Phenoxyethanol, Limonene, Coumarin, Citronellol, Parfum.', 'Both', '30 pcs', '119269')`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT (title, description, brand, price, discounted_price, vat, gained_points, benefits, overview,
                             gender, capacity, model_number)
        VALUES ('Centrum', 'Multivitamin - 30 pcs', 'Multigummies', 1400, 1290, 10.0, 10,
                'A product that leaves your skin calm and fragrant with a light scent all day\nA non-greasy formula that quickly melts into the skin\nRefreshes and moisturizes the skin thanks to jojoba oil and vitamin E\nVery effective on the face, hands, and body\nLet your skin experience tropical wonders with this moisturizing cream', 'Revive your skin and enjoy the delicate moisturizing cream with a joyful zesty scent of tropical fruits. NIVEA Soft Freshies absorbs quickly into the skin, making the skin feel refreshingly moist. Caring formula with Vitamine E and Jojoba Oil makes your skin feel noticeably relaxed, refreshed and smoother. For your handbag or at home: NIVEA Soft. Ingredients:- Aqua, Glycerin, Paraffinum Liquidum, Myristyl Alcohol, Butylene Glycol, Alcohol Denat., Stearic Acid, Myristyl Myristate, Cera Microcristallina, Glyceryl Stearate, Hydrogenated Coco-Glycerides, Simmondsia Chinensis Seed Oil, Tocopheryl Acetate, Lanolin Alcohol (Eucerit), Polyglyceryl-2 Caprate, Dimethicone, Sodium Hydroxide, Carbomer, Phenoxyethanol, Limonene, Coumarin, Citronellol, Parfum.', 'Both', '30 pcs', '119269')`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT (title, description, brand, price, discounted_price, vat, gained_points, benefits, overview,
                             gender, capacity, model_number)
        VALUES ('Centrum', 'Multivitamin - 30 pcs', 'Multigummies', 1400, 1290, 10.0, 10,
                'A product that leaves your skin calm and fragrant with a light scent all day\nA non-greasy formula that quickly melts into the skin\nRefreshes and moisturizes the skin thanks to jojoba oil and vitamin E\nVery effective on the face, hands, and body\nLet your skin experience tropical wonders with this moisturizing cream', 'Revive your skin and enjoy the delicate moisturizing cream with a joyful zesty scent of tropical fruits. NIVEA Soft Freshies absorbs quickly into the skin, making the skin feel refreshingly moist. Caring formula with Vitamine E and Jojoba Oil makes your skin feel noticeably relaxed, refreshed and smoother. For your handbag or at home: NIVEA Soft. Ingredients:- Aqua, Glycerin, Paraffinum Liquidum, Myristyl Alcohol, Butylene Glycol, Alcohol Denat., Stearic Acid, Myristyl Myristate, Cera Microcristallina, Glyceryl Stearate, Hydrogenated Coco-Glycerides, Simmondsia Chinensis Seed Oil, Tocopheryl Acetate, Lanolin Alcohol (Eucerit), Polyglyceryl-2 Caprate, Dimethicone, Sodium Hydroxide, Carbomer, Phenoxyethanol, Limonene, Coumarin, Citronellol, Parfum.', 'Both', '30 pcs', '119269')`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT (title, description, brand, price, discounted_price, vat, gained_points, benefits, overview,
                             gender, capacity, model_number)
        VALUES ('Centrum', 'Multivitamin - 30 pcs', 'Multigummies', 1400, 1290, 10.0, 10,
                'A product that leaves your skin calm and fragrant with a light scent all day\nA non-greasy formula that quickly melts into the skin\nRefreshes and moisturizes the skin thanks to jojoba oil and vitamin E\nVery effective on the face, hands, and body\nLet your skin experience tropical wonders with this moisturizing cream', 'Revive your skin and enjoy the delicate moisturizing cream with a joyful zesty scent of tropical fruits. NIVEA Soft Freshies absorbs quickly into the skin, making the skin feel refreshingly moist. Caring formula with Vitamine E and Jojoba Oil makes your skin feel noticeably relaxed, refreshed and smoother. For your handbag or at home: NIVEA Soft. Ingredients:- Aqua, Glycerin, Paraffinum Liquidum, Myristyl Alcohol, Butylene Glycol, Alcohol Denat., Stearic Acid, Myristyl Myristate, Cera Microcristallina, Glyceryl Stearate, Hydrogenated Coco-Glycerides, Simmondsia Chinensis Seed Oil, Tocopheryl Acetate, Lanolin Alcohol (Eucerit), Polyglyceryl-2 Caprate, Dimethicone, Sodium Hydroxide, Carbomer, Phenoxyethanol, Limonene, Coumarin, Citronellol, Parfum.', 'Both', '30 pcs', '119269')`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT (title, description, brand, price, discounted_price, vat, gained_points, benefits, overview,
                             gender, capacity, model_number)
        VALUES ('Centrum', 'Multivitamin - 30 pcs', 'Multigummies', 1400, 1290, 10.0, 10,
                'A product that leaves your skin calm and fragrant with a light scent all day\nA non-greasy formula that quickly melts into the skin\nRefreshes and moisturizes the skin thanks to jojoba oil and vitamin E\nVery effective on the face, hands, and body\nLet your skin experience tropical wonders with this moisturizing cream', 'Revive your skin and enjoy the delicate moisturizing cream with a joyful zesty scent of tropical fruits. NIVEA Soft Freshies absorbs quickly into the skin, making the skin feel refreshingly moist. Caring formula with Vitamine E and Jojoba Oil makes your skin feel noticeably relaxed, refreshed and smoother. For your handbag or at home: NIVEA Soft. Ingredients:- Aqua, Glycerin, Paraffinum Liquidum, Myristyl Alcohol, Butylene Glycol, Alcohol Denat., Stearic Acid, Myristyl Myristate, Cera Microcristallina, Glyceryl Stearate, Hydrogenated Coco-Glycerides, Simmondsia Chinensis Seed Oil, Tocopheryl Acetate, Lanolin Alcohol (Eucerit), Polyglyceryl-2 Caprate, Dimethicone, Sodium Hydroxide, Carbomer, Phenoxyethanol, Limonene, Coumarin, Citronellol, Parfum.', 'Both', '30 pcs', '119269')`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (1, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                true)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (1, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (1, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (1, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (2, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                true)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (2, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (2, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (2, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (3, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                true)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (3, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (3, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (3, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (4, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                true)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (4, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (4, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (4, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (5, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                true)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (5, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (5, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (5, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (6, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                true)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (6, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (6, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
  db.run(
    `
        INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
        VALUES (6, 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg',
                false)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  const productIds = [7, 8, 9, 10, 11];
  const imageUrl = 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11423416-1554493886910365.jpg';

  productIds.forEach(productId => {
    // Insert main image
    db.run(
      `INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
       VALUES (?, ?, true)`,
      [productId, imageUrl],
      (err) => {
        if (err) {
          console.error(err.message);
        }
      }
    );

    // Insert additional images
    for (let i = 0; i < 3; i++) {
      db.run(
        `INSERT INTO PRODUCT_IMAGES (product_id, url, is_main)
         VALUES (?, ?, false)`,
        [productId, imageUrl],
        (err) => {
          if (err) {
            console.error(err.message);
          }
        }
      );
    }
  });

  db.run(
    `
        INSERT INTO PRODUCT_RATINGS (product_id, user_id, rating, comment)
        VALUES (1, 1, 4, 'This is a comment placeholder')`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  db.run(
    `
        INSERT INTO PRODUCT_CATEGORIES (product_id, category_id)
        VALUES (1, 1)`,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  const categories = [
    { title: 'Nutritional Vitamins', slug: 'nutritional-vitamins', parent_category_id: null },
    { title: 'Health Supplements', slug: 'health-supplements', parent_category_id: null },
    { title: 'Beauty Products', slug: 'beauty-products', parent_category_id: null },
    
  ];

  categories.forEach(category => {
    db.run(
      `INSERT INTO CATEGORIES (title, slug, parent_category_id)
       VALUES (?, ?, ?)`,
      [category.title, category.slug, category.parent_category_id],
      (err) => {
        if (err) {
          console.error(err.message);
        }
      }
    );
  });
  
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Close the database connection.");
});
