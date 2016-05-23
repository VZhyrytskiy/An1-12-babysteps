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
				tasks: "=",
				onComplete: "&",
				onDelete: "&",
				onSave: "&"
			},
			templateUrl: "components/tasklist/tasklist.html"
		};
	}

})();