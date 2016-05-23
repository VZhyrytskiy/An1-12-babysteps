(function() {
	'use strict';

	angular.module("app")
		.controller("SummaryCtrl", SummaryCtrl);

	function SummaryCtrl($scope) {
		var ctrl = this;

		ctrl.getText = getText;

		$scope.$watch("ctrl.visible", function(newVal) {
			ctrl.visible = newVal;
		});

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