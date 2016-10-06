(function() {
	'use strict';

	angular.module("app")
		.controller("Main", Main);

	function Main() {
		let $ctrl = this;

		$ctrl.taskHeader = "Some task header";
		$ctrl.getLanguage = getLanguage;
		$ctrl.isSummaryVisible = isSummaryVisible;

		function getLanguage() {
			// some logic ...
			return "en";
		}

		function isSummaryVisible() {
			// some logic...
			return true;
		}
	}

})();