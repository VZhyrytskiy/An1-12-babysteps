(function() {
	'use strict';

	angular
		.module("components")
		.directive("taskList", taskList);

	function taskList() {
		return {
			scope: {},
			transclude: true,
			controller: "TaskList",
			controllerAs: "$ctrl",
			bindToController: {
				onComplete: "&"
			},
			templateUrl: "components/task-list/task-list.html"
		};
	}

})();