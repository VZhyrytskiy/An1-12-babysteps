(function() {
	'use strict';

	angular
		.module("components")
		.controller("TaskEditorCtrl", TaskEditorCtrl);

	function TaskEditorCtrl() {
		var ctrl = this;

		ctrl.save = save;

		function save(task) {
			task.isEditMode = false;
			ctrl.onSave({task: ctrl.task});
		}
	}

})();