(function() {
	'use strict';

	angular.module("app")
		.controller("SomeMainCtrl", SomeMainCtrl);

	function SomeMainCtrl() {
		var ctrl = this;

		ctrl.taskHeader = "Some task header";
	}

})();