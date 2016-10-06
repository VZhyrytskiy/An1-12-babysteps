(function() {
	'use strict';

	angular
		.module("components")
		.component("taskEditor", {
			controller: "TaskEditor",
			bindings: {
				inputTask: "=task",
				onSave: "&",
			},
			templateUrl: "components/task-editor/task-editor.html"
		});

})();