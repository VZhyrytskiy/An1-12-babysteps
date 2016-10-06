(function() {
	'use strict';

	angular
		.module("components")
		.component("taskList", {
			transclude: true,
			controller: "TaskList",
			bindings: {
				onComplete: "&",
				tasks: "="
			},
			templateUrl: "components/task-list/task-list.html"
		});

})();