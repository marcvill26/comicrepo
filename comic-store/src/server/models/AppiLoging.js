const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const appiUserLoginSchema = new Schema(
    {
        email: {type: String, required:true},
        password: {type: String, required:true},
    },{
        timestamps:true
    }
);
const appiLoging = mongoose.model('Usuario', appiUserLoginSchema);

module.exports= appiLoging;