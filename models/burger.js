const orm = require("../config/orm.js");


// call ORM functions
let burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },
    insertOne: (burgerName, cb) => {
        orm.insertOne('burgers', burgerName, (res) => {
            cb(res);
        });
    },
    updateOne: (table, id, cb) => {
        orm.updateOne('burgers', id, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;