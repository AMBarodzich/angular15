// controller for the main page
todoApp.controller('HomeCtrl', function($rootScope, $scope, todosFactory) {

	todosFactory.getTodos().then(function(data) {
		
		$rootScope.cols = data.data.length;
	
	});
//count our tasks	
	$scope.getCol = function() {
		return $rootScope.cols;
	};
	
// current date
	var monthNames = [ "January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December" ];

	var d = new Date();
	var datestring = monthNames[d.getMonth()] + " " + d.getDate() + ", "
			+ d.getFullYear();
	$scope.date = datestring;
});