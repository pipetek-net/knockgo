const mongooose = require('mongoose');

const MONGO_URL = 'mongodb://localhost:27017/Knockgo';

const db = async () => {
    await mongooose
        .connect(MONGO_URL)
        .then(() => console.log('La base de datos de mongo ha sido conectada'))
        .catch(err => console.log(err));
};

module.exports = db;