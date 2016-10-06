(function() {
	'use strict';

	angular.module("app")
		.controller("Summary", Summary);

	function Summary() {
		let $ctrl = this;

		$ctrl.getText = getText;

		function getText(lang) {
			if (lang === "en") {
				return "English!";
			}
			else {
				return "Russian!";
			}
		}
	}

})();