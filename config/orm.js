// Import MySQL connection.
const connection = require("../config/connection.js");


let orm = {
    selectAll: (table, cb) => {
        // SELECT * FROM burgers;
        let queryStr = `SELECT * FROM ${table};`;
        connection.query(queryStr, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },

    insertOne: (table, burgerName) => {
        // INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);
        let queryStr = `INSERT INTO ${table} 
            (burger_name, devoured) 
            VALUES (?, 0)`;

        connection.query(queryStr, burgerName, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },
    
    updateOne: (table, id) => {
        // UPDATE burgers SET devoured=1 WHERE id=?;
        let queryStr = `UPDATE ${table} SET devoured=1 WHERE id=?`;

        connection.query(queryStr, id, (err, result) => {
            if (err) throw err;

            cb(result);
        });
    }
};


// Export the orm object for the model
module.exports = orm;