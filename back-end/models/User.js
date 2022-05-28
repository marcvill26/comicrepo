const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    users: {type: String, required:true},
    email:{type: String, required:true},
    password:{type: String, required:true},
    age: {type: Number},
    role:{type:String}
   
},{
    timestamps:true
});

const User = mongoose.model('User', userSchema);

module.exports = User;