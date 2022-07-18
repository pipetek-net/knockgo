const mongooose = require('mongoose');
require('dotenv').config();
const PASS_DB = process.env.PASS_DB;


const MONGO_URL = 'mongodb+srv://Admin:'+PASS_DB+'@knockgo.yu0d9.mongodb.net/KnockGo';

const db = async () => {
    await mongooose
        .connect(MONGO_URL)
        .then(() => console.log('La base de datos de mongo ha sido conectada'))
        .catch(err => console.log(err));
};

module.exports = db;