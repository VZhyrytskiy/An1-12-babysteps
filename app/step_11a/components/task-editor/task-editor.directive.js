(function() {
	'use strict';

	angular
		.module("components")
		.directive("taskEditor", taskEditor);

	function taskEditor() {
		return {
			scope: {},
			controller: "TaskEditorCtrl",
			controllerAs: "ctrl",
			bindToController: {
				inputTask: "=task",
				onSave: "&",
			},
			templateUrl: "components/task-editor/task-editor.html"
		};
	}

})();