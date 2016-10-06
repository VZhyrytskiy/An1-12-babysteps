(function() {
	'use strict';

	angular
		.module("components")
		.controller("Header", Header);

	function Header() {
		let $ctrl = this;

		$ctrl.getText = getText;

		function getText() {
			return "Hello World!";
		}
	}

})();