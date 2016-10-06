(function() {
	'use strict';

	angular.module("components")
		.controller("App", App);

	function App() {
		let $ctrl = this;

		$ctrl.taskHeader = "Some task header";
		$ctrl.visible = true;
		$ctrl.tasks = [
			{ action: "Create...", done: true },
			{ action: "Update...", done: true },
			{ action: "Delete...", done: false }
		];

		$ctrl.calculateSmth = calculateSmth;
		$ctrl.completeTask = completeTask;
		$ctrl.deleteTask = deleteTask;
		$ctrl.saveTask = saveTask;
		$ctrl.getLanguage = getLanguage;

		function calculateSmth() {
			alert("Calculated Smth is: " + 1234);
		}

		function completeTask(task) {
			task.done = true;
		}

		function deleteTask(task) {
			var idx = $ctrl.tasks.indexOf(task);
			if (idx >= 0) {
				$ctrl.tasks.splice(idx, 1);
			}
		}

		function saveTask(task) {
			task.isEditMode = false;
		}

		function getLanguage() {
			// some logic ...
			return "en";
		}
	}

})();