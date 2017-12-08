var connection = require('./connection.js');

var orm = {

	selectAll: function(table, callback) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			callback(result);
			// console.log(result);
			// connection.end();
		});
	},

	insertOne: function(table, burgerCol, newBurger,callback) {
		var queryString = "INSERT INTO ?? (??) values (?)";
		connection.query(queryString, [table, burgerCol, newBurger], function(err, result) {

			console.log('Added ' + newBurger + ' to the table ');
			callback(result);
			// selectAll();
			//connection.end();
		});

	},

	updateOne: function(table, colValue, burgerId,callback) {
		var queryString = "Update ?? SET devoured=? WHERE id=?";
		connection.query(queryString, [table, colValue, burgerId], function(err, result) {
			console.log('updated ' + burgerId + ' to true');
			callback(result);
			// selectAll();
		});
	},
	deleteAll: function(table, col, colCondition,callback) {
		var queryString = "DELETE FROM ?? where ?? = ?";
		connection.query(queryString, [table, col, colCondition], function(err, result) {
			callback(result);
			// selectAll();
		});
	}

}


module.exports = orm;

