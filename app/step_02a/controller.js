(function() {
	'use strict';

	angular.module("app")
		.controller("HeaderCtrl", HeaderCtrl);

	function HeaderCtrl() {
		var ctrl = this;

		ctrl.getText = getText;

		function getText() {
			return "Hello World!";
		}
	}

})();