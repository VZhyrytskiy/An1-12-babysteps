(function() {
	'use strict';

	angular
		.module("components")
		.directive("summary", summary);

	function summary() {
		return {
			scope: true,
			controller: "Summary",
			controllerAs: "$ctrl",
			bindToController: {
				visible: "=",
				language: "=",
				onCalc: "&"
			},
			templateUrl: "components/summary/summary.html"
		};
	}

})();