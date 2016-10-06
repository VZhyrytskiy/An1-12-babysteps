(function() {
	'use strict';

	angular
		.module("components")
		.controller("TaskList", TaskList);

	function TaskList() {
		let $ctrl = this;

		$ctrl.deleteTask = deleteTask;

		// This is where we have the problem: 
		// We are mutating the tasks collection
		// But we do not own that collection: 
		// It was given to us as an input.
		function deleteTask(task) {
			let idx = $ctrl.tasks.indexOf(task);
			if (idx >= 0) {
				$ctrl.tasks.splice(idx, 1);
			}
		}
	}

})();