
const {Sequelize} = require('sequelize');

const db = new Sequelize('challenge_alkemy_nodejs', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'

});

module.exports = {
    db
}

