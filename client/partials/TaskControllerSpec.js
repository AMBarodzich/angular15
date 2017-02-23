describe('unit: TodoCtrl', function () {

    var ctrl;
    var scope;

    beforeEach(module('todoApp'));


    beforeEach(inject(function ($rootScope, $controller) {

        scope = $rootScope.$new();

        ctrl = $controller('TodoCtrl', {$scope: scope});
        this.task = "task for testing";
        spyOn(scope, '$emit');

    }));

    it('should init an empty array of tasks', function () {
        expect(scope.todos).toBeDefined();
        expect(scope.todos.length).toEqual(0);
    });

    it('should add a new task to the tasks array', function () {

        scope.save(this.task);

        expect(scope.todos.length).toEqual(1);
        expect(scope.todos.indexOf(this.task)).toBeGreaterThan(-1);
    });

    it('should remove task to the tasks array', function () {

        scope.save(this.task);
        expect(scope.todos.indexOf(this.task)).toBeGreaterThan(-1);

        scope.delete(this.task);
        expect(scope.todos.length).toEqual(0);
        expect(scope.todos.indexOf(this.task)).toEqual(-1);
    });

    it('should emit an event when task added', function () {

        scope.save(this.task);
        expect(scope.$emit).toHaveBeenCalledWith('task:added', 'task just added!');
    });

    it('should emit an event when task removed', function () {

        scope.delete(this.task);
        expect(scope.$emit).toHaveBeenCalledWith('task:removed');
    });

});