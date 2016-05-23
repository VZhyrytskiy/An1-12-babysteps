(function() {
	'use strict';

	angular.module("app")
		.controller("SomeMainCtrl", SomeMainCtrl);

	function SomeMainCtrl() {
		var ctrl = this;

		ctrl.taskHeader = "Some task header";
		ctrl.getLanguage = getLanguage;
		ctrl.isSummaryVisible = isSummaryVisible;

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