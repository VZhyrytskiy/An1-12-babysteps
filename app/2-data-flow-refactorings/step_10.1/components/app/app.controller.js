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
		$ctrl.getLanguage = getLanguage;


		
		function calculateSmth() {
			alert("Calculated Smth is: " + 1234);
		}

		function completeTask(task) {
			task.done = true;
		}

		function getLanguage() {
			// some logic ...
			return "en";
		}
	}

})();