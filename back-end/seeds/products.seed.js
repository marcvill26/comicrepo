const mongoose = require('mongoose');
const db = require('../db');
const Product = require('../models/Product');

const products = [
    {   
        "article":"spiderman funko",
        "price":12,
        "urlImg":"https://cdnfuturartshop-9d53.kxcdn.com/83862-large_default/marvel-pop-80%C2%BA-spider-man-593.jpg",
        "stock":15,
    },

    {
        "article":"Daredevil funko",
        "price":12,
        "urlImg":"https://m.media-amazon.com/images/I/51rdlMA9IgL._AC_SX425_.jpg",
        "stock":15,
    },
    {
        "article":"Caballero luna",
        "price":12,
        "urlImg":"https://funkollection.es/wp-content/uploads/2022/04/figura-Funko-POP-Mr.-Knight-Caballero-Luna-Moon-Knight-Marvel.jpg",
        "stock":15,
    },

];

const productsDocument = products.map(product => new Product(product));

db.connectDB()
    .then(async () => {
        const allProducts = await Comics.find();
        if(allProducts.length > 0){
            await Product.collection.drop();     
        }
    })
    .catch(err => console.error(`Error deleting information from the DB ${err}`))
    .then(async () => {
        await Product.insertMany(productsDocument)
    })
    .catch(err => console.error (`Error creating document in DB: ${err}`))
    .finally(() => mongoose.disconnect());