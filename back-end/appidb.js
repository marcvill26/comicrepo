const appiConfig = require('./appiConfig');
const mongoose = require('mongoose');

const DB_URL = appiConfig.DB_URL;

const connectDB = () => mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,

});

module.exports ={ connectDB, DB_URL };