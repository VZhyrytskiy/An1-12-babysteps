(function() {
	'use strict';

	angular.module("app")
		.controller("SomeMainCtrl", SomeMainCtrl);

	function SomeMainCtrl() {
		var ctrl = this;

		ctrl.taskHeader = "Some task header";
		ctrl.visible = true;
		ctrl.calculateSmth = calculateSmth;
		ctrl.getLanguage = getLanguage;
		
		function calculateSmth() {
			alert("Calculated Smth is: " + 1234);
		}

		function getLanguage() {
			// some logic ...
			return "en";
		}
	}

})();