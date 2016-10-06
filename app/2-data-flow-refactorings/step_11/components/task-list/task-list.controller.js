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

		function save(newTask, oldTask) {
			$ctrl.onSave({newTask: newTask, oldTask: oldTask});
		}

		function toggleEditMode(task) {
			$ctrl.onToggleEditMode({task: task});
		}
	}

})();