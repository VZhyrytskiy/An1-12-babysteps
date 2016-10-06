(function() {
	'use strict';

	angular
		.module("components")
		.component("taskEditor", {
			controller: "TaskEditor",
			bindings: {
				task: "=",
				onSave: "&",
			},
			templateUrl: "components/task-editor/task-editor.html"
		});

})();