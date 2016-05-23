(function() {
	'use strict';

	angular
		.module("components")
		.directive("summary", summary);

	function summary() {
		return {
			scope: {},
			controller: "SummaryCtrl",
			controllerAs: "ctrl",
			bindToController: {
				visible: "=",
				language: "=",
				onCalc: "&"
			},
			templateUrl: "components/summary/summary.html"
		};
	}

})();