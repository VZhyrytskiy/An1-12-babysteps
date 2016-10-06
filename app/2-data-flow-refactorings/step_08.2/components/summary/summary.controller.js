(function() {
	'use strict';

	angular.module("app")
		.controller("SummaryCtrl", SummaryCtrl);

	function SummaryCtrl($scope) {
		var ctrl = this;

		ctrl.getText = getText;

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