(function() {
	'use strict';

	angular.module("app")
		.controller("SomeMainCtrl", SomeMainCtrl);

	function SomeMainCtrl() {
		var ctrl = this;

		ctrl.taskHeader = "Some task header";
		ctrl.getLanguage = getLanguage;
		ctrl.visible = true;

		function getLanguage() {
			// some logic ...
			return "en";
		}
	}

})();