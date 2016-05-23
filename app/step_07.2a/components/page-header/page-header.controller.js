(function() {
	'use strict';

	angular
		.module("components")
		.controller("HeaderCtrl", HeaderCtrl);

	function HeaderCtrl() {
		var ctrl = this;

		ctrl.getText = getText;

		function getText() {
			return "Hello World!";
		}
	}

})();