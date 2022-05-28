const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema ({
    article: {type: String, required:true},
    price: {type: Number},
    urlImg: {type: String, required: true},
    stock:{type:Number, required:true},
},{
    timestamps:true
});

const Product = mongoose.model('Product', productsSchema);

module.exports = Product;

