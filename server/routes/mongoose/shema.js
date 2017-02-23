//shema mongoose
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var todoSchema = new Schema({
	    isCompleted: { type: Boolean, default: false},
	    todo: { type: String },
	    sever: { type: Number },
	});
  var Todo = mongoose.model('Todo', todoSchema);
  module.exports = Todo;