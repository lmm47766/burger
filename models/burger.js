var orm = require('../config/orm.js');

var burger = {

	selectAll: function(callback) {
		orm.selectAll("burgers", function(res){
			callback(res);
		})

	},

	insertOne: function(newBurger, callback) {
		orm.insertOne("burgers",'burger_name',newBurger, function(res) {
			callback(res);
		});
	},

	updateOne: function(burgerId, callback) {
		orm.updateOne('burgers', true, burgerId, function(res){
			callback(res);
		});
	}


};

module.exports = burger;