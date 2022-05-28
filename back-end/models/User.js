const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {type: String, required:true},
    lastName: {type: String},
    age: {type: Number, required: true},
    role:{type:String, required:true},
    //Comics:[{type: mongoose.Types.ObjectId, ref:'Comic'}],
},{
    timestamps:true
});

const User = mongoose.model('User', userSchema);

module.exports = User;