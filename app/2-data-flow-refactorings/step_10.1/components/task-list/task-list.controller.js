(function() {
	'use strict';

	angular
		.module("components")
		.controller("TaskListCtrl", TaskListCtrl);

	function TaskListCtrl() {
		var ctrl = this;

		ctrl.deleteTask = deleteTask;

		// This is where we have the problem: 
		// We are mutating the tasks collection
		// But we do not own that collection: 
		// It was given to us as an input.
		function deleteTask(task) {
			var idx = ctrl.tasks.indexOf(task);
			if (idx >= 0) {
				ctrl.tasks.splice(idx, 1);
			}
		}
	}

})();