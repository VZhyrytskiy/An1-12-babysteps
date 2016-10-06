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
		$ctrl.toggleEditMode = toggleEditMode;

		function calculateSmth() {
			alert("Calculated Smth is: " + 1234);
		}

		function completeTask(task) {
			task.done = true;
		}

		function deleteTask(task) {
			let idx = $ctrl.tasks.indexOf(task);
			if (idx >= 0) {
				$ctrl.tasks.splice(idx, 1);
			}
		}

		function saveTask(newTask, oldTask) {
			console.log(newTask);
			console.log(oldTask);
			// newTask.isEditMode = false;
			oldTask.isEditMode = false;
			// $ctrl.tasks.push(newTask);

			let idx = $ctrl.tasks.indexOf(oldTask);
			if (idx >= 0) {
				$ctrl.tasks.splice(idx, 1, newTask);
			}
			
		}

		function toggleEditMode(task) {
			task.isEditMode = !task.isEditMode;
		}

		function getLanguage() {
			// some logic ...
			return "en";
		}
	}

})();