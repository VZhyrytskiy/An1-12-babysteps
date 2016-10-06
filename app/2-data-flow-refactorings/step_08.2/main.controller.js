(function() {
	'use strict';

	angular.module("app")
		.controller("Main", Main);

	function Main() {
		let $ctrl = this;

		$ctrl.taskHeader = "Some task header";
		$ctrl.visible = true;
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