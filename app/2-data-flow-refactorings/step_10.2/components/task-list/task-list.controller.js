(function() {
	'use strict';

	angular
		.module("components")
		.controller("TaskList", TaskList);

	function TaskList() {
		let $ctrl = this;

		$ctrl.deleteTask = deleteTask;
		$ctrl.toggleEditMode = toggleEditMode;
		$ctrl.save = save;

		function deleteTask(task) {
			$ctrl.onDelete({task: task});
		}

		function save(task) {
			task.isEditMode = false;
		}

		function toggleEditMode(task) {
			task.isEditMode = !task.isEditMode;
		}
	}

})();