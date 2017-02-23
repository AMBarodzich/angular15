// controller for the second page
todoApp.controller('TodoCtrl', function($rootScope, $scope, todosFactory) {		
  var TEST = "task for testing";
  $scope.todos = [];
  $scope.isEditable = [];

  // object to hold all things related to Absent Employees
  $scope.Preloader = {};
  $scope.Warningerror = {};
  // for easy access
  var Preloader = $scope.Preloader;
  var warningerror = $scope.Warningerror
  // boolean flag to indicate api call success
  Preloader.dataLoaded = false;
  Preloader.Loaded = true; 
  warningerror.noempty= true;
  $scope.severities=["1","2","3","4","5"];
 
  // get all Todos on Load
   todosFactory.getTodos().then(function(data) {   
    $scope.selectedSev = $scope.severities[0];
    $scope.todos = data.data;
    $rootScope.cols = $scope.todos.length;
    Preloader.dataLoaded = true;
    Preloader.Loaded = false;
  });

  // Save a Todo to the server
  $scope.save = function(test) {
    if(test){
      $scope.todos.push(test);
      $scope.$emit('task:added', 'task just added!');
    }
    if ($scope.todoInput) {
    	warningerror.noempty= true;
      todosFactory.saveTodo({
        "sever": $scope.selectedSev,
        "todo": $scope.todoInput,
        "isCompleted": false
      }).then(function(data) {
        $scope.todos.push(data.data);
        $rootScope.cols += 1;
      });
      $scope.todoInput = '';
    }
    else {
    	warningerror.noempty= false;
    }
  };

  // update the status of the Todo
  $scope.updateStatus = function($event, _id, todo) {
    var cbk = $event.target.checked;
    var _t = $scope.todos[$scope.todos.indexOf(todo)];
    todosFactory.updateTodo({
      _id: _id,
      isCompleted: cbk,
      sever: _t.sever,
      todo: _t.todo
    }).then(function(data) {
        _t.isCompleted = cbk;
    });
  };
  $scope.cancelClick = function(todo,i){
	  $scope.isEditable[i] = false;
	    todosFactory.getTodos().then(function(data) {
	      $scope.todos[$scope.todos.indexOf(todo)] = data.data[$scope.todos.indexOf(todo)];
	    });
  };
  $scope.editClick = function(i) {
	    $scope.isEditable[i] = true;
  };
  
  // Update the edited Todo
  $scope.edit = function(event,todo,i) {
        if (event.trim()) {
        	warningerror.noempty= true;
          var _t = $scope.todos[$scope.todos.indexOf(todo)];
          todosFactory.updateTodo({
        	  _id: _t._id,
            todo: event.trim(),
            sever: _t.sever,
            isCompleted: _t.isCompleted
          }).then(function(data) {
            _t.todo = event.trim();
            $scope.isEditable[i] = false;
          });
        }
        else {
        	warningerror.noempty= false;
        }
  };

//Delete a Todo
  $scope.delete = function(todo) {
    if($scope.todos.indexOf(todo) === TEST){
      $scope.todos.splice(0, 1);
      $scope.$emit('task:removed');
      return;
    }
    var todo_id = $scope.todos[$scope.todos.indexOf(todo)]._id;
    $scope.todos.splice($scope.todos.indexOf(todo), 1);
    todosFactory.deleteTodo(todo_id);
  };
});