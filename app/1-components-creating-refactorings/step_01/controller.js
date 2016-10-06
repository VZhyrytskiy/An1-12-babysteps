(function() {
	'use strict';

	angular.module("app")
		.controller("HeaderCtrl", HeaderCtrl);

	function HeaderCtrl($scope) {
		$scope.getText = getText;

		function getText() {
			return "Hello World!";
		}
	}

})();
