(function() {
	'use strict';

	angular.module("app")
		.controller("Header", Header);

	function Header($scope) {
		$scope.getText = getText;

		function getText() {
			return "Hello World!";
		}
	}

})();
