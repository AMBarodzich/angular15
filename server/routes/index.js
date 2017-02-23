
  var express = require('express');
  var router = express.Router();
  
  var database = require('./database'); 
  var mongoose = require('mongoose');
  
  // coonnect to mongoose
  mongoose.connect(database.url);
  var Todo = require('./mongoose/shema');
 
  /* methods for main page */
  router.get('/', function(req, res) {
    res.render('index');
  });

  router.get('/api/todos', function(req, res) {
	  Todo.find({}, function(err, data) {
      res.json(data);
    });
  });

  router.post('/api/todos', function(req, res) {
	  var todo = new Todo({
		  isCompleted:req.body.isCompleted,
		  todo: req.body.todo,
		  sever: req.body.sever,
	  });
	  todo.save(function(err) {
		  if (err) throw err;
		  res.json(todo);
		});
  });	  

  router.put('/api/todos', function(req, res) {
	  Todo.findByIdAndUpdate(req.body._id, { isCompleted: req.body.isCompleted,todo: req.body.todo,sever: req.body.sever}, function(err, data) {
		  if (err) throw err;	  
		  res.json(data);
		});
  });

  router.delete('/api/todos/:_id', function(req, res) {
	  Todo.findByIdAndRemove(req.params._id, function (err, todo) {  
		    var data = {
		        message: "Todo successfully deleted",
		        id: todo._id
		    };
		    res.json(data);
		});
  });
  
  module.exports = router;
