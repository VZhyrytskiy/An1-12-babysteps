(function() {
	'use strict';

	angular
		.module("components")
		.directive("taskList", taskList);

	function taskList() {
		return {
			scope: {},
			transclude: true, // +
			controller: "TaskListCtrl",
			controllerAs: "ctrl",
			bindToController: {
				onComplete: "&",
				tasks: "="
			},
			templateUrl: "components/task-list/task-list.html"
		};
	}

})();