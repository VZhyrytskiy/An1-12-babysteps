(function() {
	'use strict';

	angular
		.module("app")
		.controller("TaskListCtrl", TaskListCtrl);

	function TaskListCtrl() {
		var ctrl = this;

		ctrl.tasks = [
			{ action: "Create...", done: true },
			{ action: "Update...", done: true },
			{ action: "Delete...", done: false }
		];

	}

})();