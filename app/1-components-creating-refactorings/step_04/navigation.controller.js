(function() {
	'use strict';

	angular.module("app")
		.controller("Navigation", Navigation);

	function Navigation() {
		let $ctrl = this;

		$ctrl.getText = getText;

		function getText() {
			return "Navigation Bar";
		}
	}

})();