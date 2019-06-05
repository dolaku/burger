// Import MySQL connection.
const connection = require("../config/connection.js");


let orm = {
    selectAll: () => {
        // SELECT * FROM burgers;
    },
    insertOne: () => {
        // INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);
    },
    updateOne: () => {
        // UPDATE burgers SET devoured=1 WHERE id=?;
    }
}


// Export the orm object for the model
module.exports = orm;