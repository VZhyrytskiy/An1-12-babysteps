(function() {
	'use strict';

	angular
		.module("components")
		.controller("TaskEditor", TaskEditor);

	function TaskEditor() {
		let $ctrl = this;

		$ctrl.save = save;

		function save(task) {
			task.isEditMode = false;
			$ctrl.onSave({task: $ctrl.task});
		}
	}

})();