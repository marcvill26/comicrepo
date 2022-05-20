const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const comicsSchema = new Schema({
    hero: {type: String, required:true},
        nameHero:{type: String, required:true},
        writer: {type: String, required:true},
        year:{type: Number, required:true},
        description: {type: String},
        penciler:{type: String},
        image:{type: String},
        colletion:{type: String},
        issues:{type: Number, required:true},
        id: {type: Number},
},{
    timestamps:true
});

const Comic = mongoose.model('Comic', comicsSchema);

module.exports = Comic;