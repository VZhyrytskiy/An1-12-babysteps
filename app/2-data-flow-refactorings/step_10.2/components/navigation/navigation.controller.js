(function() {
	'use strict';

	angular.module("components")
		.controller("NavigationCtrl", NavigationCtrl);

	function NavigationCtrl() {
		var ctrl = this;

		ctrl.getText = getText;

		function getText() {
			return "Navigation Bar";
		}
	}

})();