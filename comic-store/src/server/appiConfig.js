require('dotenv').config();

const appiConfig ={
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL || 'mongosh "mongodb+srv://cluster0.vyneb.mongodb.net/myFirstDatabase" --apiVersion 1 --username marcvill26',
    JWT_SECRET: process.env.DB_URL || 'secreto-para-desarrollo',
};
console.log('APPICONFIG', appiConfig);
module.exports = appiConfig;