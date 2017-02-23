// our services
todoApp.factory('todosFactory', function($http) {
  var urlBase = '/api/todos';
  var _todoService = {};

  //get data
  _todoService.getTodos = function() {
    return $http.get(urlBase);
  };

  //save data
  _todoService.saveTodo = function(todo) {
    return $http.post(urlBase, todo);
  };
  
  //update data and status
  _todoService.updateTodo = function(todo) {
    return $http.put(urlBase, todo);
  };
  
  //delete data
  _todoService.deleteTodo = function(id) {
    return $http.delete(urlBase + '/' + id);
  };

  return _todoService;
});
