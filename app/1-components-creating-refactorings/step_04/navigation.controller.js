(function() {
	'use strict';

	angular.module("app")
		.controller("NavigationCtrl", NavigationCtrl);

	function NavigationCtrl($scope) {
		var ctrl = this;

		ctrl.getText = getText;

		function getText() {
			return "Navigation Bar";
		}
	}

})();