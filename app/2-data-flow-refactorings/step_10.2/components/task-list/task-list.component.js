(function() {
	'use strict';

	angular
		.module("components")
		.component("taskList", {
			transclude: true,
			controller: "TaskList",
			bindings: {
				tasks: "=",
				onComplete: "&",
				onDelete: "&",
				onSave: "&"
			},
			templateUrl: "components/task-list/task-list.html"
		});

})();