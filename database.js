import SQLite from 'react-native-sqlite-storage';

// Open your database (you may have already done this in your app)
const db = SQLite.openDatabase(
    {
        name: 'myDatabase.db',
        location: 'default',
    },
    () => {
        console.log("Database connected!")
    },
    (error) => {
        console.error('Error opening database:', error);
    }
);

// Define the product data
const productData = {
    name: 'Galenika Bensedin 10mg Diazepam',
    sku: '1B1-GBDI',
    stock: 'Out of stock',
    price_min: 39.99,
    price_max: 129.99,
    categories: 'Sleep Relief',
};

// Insert the data into the products table
db.transaction((tx) => {
    tx.executeSql(
        'INSERT INTO products (name, sku, stock, price_min, price_max, categories) VALUES (?, ?, ?, ?, ?, ?)',
        [
            productData.name,
            productData.sku,
            productData.stock,
            productData.price_min,
            productData.price_max,
            productData.categories,
        ],
        (tx, results) => {
            // Check if the insert was successful
            if (results.rowsAffected > 0) {
                console.log('Product inserted successfully.');
            } else {
                console.error('Failed to insert product.');
            }
        },
        (error) => {
            console.error('Error inserting product:', error);
        }
    );
});
