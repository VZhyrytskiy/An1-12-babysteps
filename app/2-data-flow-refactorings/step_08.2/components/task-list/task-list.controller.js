(function() {
	'use strict';

	angular
		.module("components")
		.controller("TaskList", TaskList);

	function TaskList($scope) {
		let $ctrl = this;

		$ctrl.tasks = [
			{ action: "Create...", done: true },
			{ action: "Update...", done: true },
			{ action: "Delete...", done: false }
		];

		$ctrl.completeTask = completeTask;

		function completeTask(task) {
			$scope.$mainCtrl.completeTask(task);
		}

	}

})();