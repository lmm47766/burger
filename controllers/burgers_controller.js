var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {

   burger.selectAll(function(data){
    var nDev = [];
    var dev = [];    
    for (var i = 0; i < data.length; i++) {
        if (data[i].devoured) {
          dev.push(data[i]);
        }
        else{
          nDev.push(data[i]);
        }      
    }
    	res.render("index", {  notDevoured: nDev, devoured: dev });
   });
});

router.post("/todos", function(req, res) {
	burger.insertOne(req.body.burger, function(result) {
	    //res.json({ id: result.insertId });
	  	res.end();
  	});

});

router.put("/update/:id", function(req, res) {
	burger.updateOne(req.params.id, function(result) {
	    // res.json({ id: result.insertId });
	  	res.end();
  	});
});

router.delete("/delete", function(req, res) {
	burger.deleteAll(function(result) {
	  	res.end();
  	});
});

module.exports = router;

