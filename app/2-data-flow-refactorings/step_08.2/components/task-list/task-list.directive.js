(function() {
	'use strict';

	angular
		.module("components")
		.directive("taskList", taskList);

	function taskList() {
		return {
			scope: true,
			transclude: true,
			controller: "TaskList",
			controllerAs: "$ctrl",
			templateUrl: "components/task-list/task-list.html"
		};
	}

})();