(function() {
	'use strict';

	angular
		.module("components")
		.controller("TaskListCtrl", TaskListCtrl);

	function TaskListCtrl($scope) {
		var ctrl = this;

		ctrl.tasks = [
			{ action: "Create...", done: true },
			{ action: "Update...", done: true },
			{ action: "Delete...", done: false }
		];

		ctrl.completeTask = completeTask;

		function completeTask(task) {
			$scope.mainCtrl.completeTask(task);
		}

	}

})();