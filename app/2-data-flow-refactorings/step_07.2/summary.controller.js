(function() {
	'use strict';

	angular.module("app")
		.controller("Summary", Summary);

	function Summary($scope) {
		let $ctrl = this;

		$ctrl.visible = true;
		$ctrl.getText = getText;

		$scope.$watch("$mainCtrl.visible", function(newVal) {
			console.log(newVal);
			$ctrl.visible = newVal;
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