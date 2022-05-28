const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    users: {type: String, required:true},
    email:{type: String, required:true},
    password:{type: String, required:true},
    age: {type: Number, required: true},
    role:{type:String, required:true},
    //Comics:[{type: mongoose.Types.ObjectId, ref:'Comic'}],
},{
    timestamps:true
});

const User = mongoose.model('User', userSchema);

module.exports = User;