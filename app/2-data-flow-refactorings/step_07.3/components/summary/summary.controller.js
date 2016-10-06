(function() {
	'use strict';

	angular.module("app")
		.controller("Summary", Summary);

	function Summary($scope) {
		let $ctrl = this;

		$ctrl.getText = getText;
		$ctrl.getTaskHeader = getTaskHeader; 

		$ctrl.getTaskHeader();

		// mainCtrl property ($scope access)
		function getTaskHeader() {
			console.log($scope.$mainCtrl.taskHeader);
			return $scope.$mainCtrl.taskHeader
		}

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